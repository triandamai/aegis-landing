<script setup lang="ts">
import {da} from "vuetify/locale";

const header = [
  {key: 'title', title: 'Nama'},
  {key: 'subtitle', title: 'Deskripsi'},
  {key: 'feature', title: 'Benefit'},
  {key: 'slug', title: 'Slug'},
  {key: 'image', title: 'Gambar'},
  {key: 'icon', title: 'Icon'},
  {key: 'action', title: 'Aksi'}
]
const {publicServiceUrl} = useFile()
const store = useAdminMasterPackage()

function showEdit(data: DataPackage) {
  store.isEdit = true
  store.packageId = data.id
  store.packageTitle = data.title
  store.packageSubTitle = data.subtitle
  store.packageDescription = data.description
  store.packageBenefitTitle = data.feature_title
  store.packageBenefitDescription = data.feature_sub_title
  store.packageIconUrl = data.icon
  store.packageImageUrl = data.image
  store.packagePrice = data.price
  store.showForm = true
}
</script>

<template>
  <NuxtLayout name="admin">

    <!--    create new -->
    <v-dialog v-model="store.showForm"
              max-width="800"
              scrollable
    >
      <template v-slot:default="{ isActive }">
        <v-card rounded="lg">
          <v-card-title class="d-flex justify-space-between align-center">
            <div class="text-h5 text-medium-emphasis ps-2">
              {{ store.isEdit ? 'Ubah paket' : 'Tambah paket baru' }}
            </div>

            <v-btn
                icon="mdi-close"
                variant="text"
                @click="isActive.value = false"
            ></v-btn>
          </v-card-title>

          <v-divider class="mb-4"></v-divider>

          <v-card-text>
            <v-text-field v-model="store.packageTitle" label="Nama Paket Layanan" variant="outlined"></v-text-field>
            <v-text-field v-model="store.packageSubTitle" label="Deskripsi singkat" variant="outlined"></v-text-field>
            <v-textarea
                v-model="store.packageDescription"
                :counter="300"
                label="Deskripsi"
                class="mb-2"
                rows="2"
                variant="outlined"
                persistent-counter
            ></v-textarea>
            <v-text-field v-model="store.packageBenefitTitle" label="Judul Benefit" variant="outlined"></v-text-field>
            <v-textarea
                v-model="store.packageBenefitDescription"
                :counter="300"
                label="Deskripsi Benefit"
                class="mb-2"
                rows="2"
                variant="outlined"
                persistent-counter
            ></v-textarea>
            <v-text-field
                v-model="store.packagePrice"
                label="Harga"
                prefix="Rp"
                variant="outlined"
            ></v-text-field>
            <v-row>
              <v-col cols="12" md="4" sm="6" lg="4" xl="4">
                <v-img
                    :src="store.getImagePreview"
                    contain
                ></v-img>
              </v-col>
              <v-col cols="12" md="6" sm="6" lg="8" xl="8">
                <v-file-input v-model="store.packageImage" label="Gambar" variant="outlined"></v-file-input>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6" sm="6" lg="4" xl="4">
                <v-img
                    :src="store.getImageIconPreview"
                    contain
                ></v-img>
              </v-col>
              <v-col cols="12" md="4" sm="6" lg="8" xl="8">
                <v-file-input v-model="store.packageIcon" label="Icon" variant="outlined"></v-file-input>
              </v-col>
            </v-row>
            <v-checkbox v-model="store.packageRecommendation" label="Rekomendasi ?"></v-checkbox>
          </v-card-text>

          <v-divider class="mt-2"></v-divider>

          <v-card-actions class="my-2 d-flex justify-end">
            <v-btn
                class="text-none"
                rounded="xl"
                :disabled="store.loadingSubmit"
                @click="()=>{
                  store.resetForm()
                  isActive.value = false
                }"
            >Batal
            </v-btn>

            <v-btn
                variant="flat"
                :loading="store.loadingSubmit"
                @click="()=>{
                  if(store.isEdit) {
                    store.updatePackages()
                  } else {
                    store.createPackages()
                  }
                }"
            >
              <template v-slot:loader>
                <v-progress-circular indeterminate></v-progress-circular>
              </template>
              Simpan
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    <!--    end create -->
    <!--  dialog delete  -->
    <v-dialog
        v-model="store.showDelete"
        max-width="400"
        persistent
    >

      <v-card
          prepend-icon="mdi-delete"
          text="Paket akan dihapus secara permanen, Anda bisa menambahkan lagi paket."
          :title="`Hapus paket ${store.selectedPackage?.title}`"
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn :loading="store.showDeleteLoading" @click="()=>{
            store.showDelete = false
            store.selectedPackage = null
          }">
            <template v-slot:loader>
              <v-progress-circular indeterminate></v-progress-circular>
            </template>
            Batal
          </v-btn>

          <v-btn :loading="store.showDeleteLoading"
                 @click="()=>{
            store.deletePackage()
          }">
            <template v-slot:loader>
              <v-progress-circular indeterminate></v-progress-circular>
            </template>
            Ya, Hapus
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
    <!--  end dialog delete  -->
    <v-btn variant="flat" @click="()=>{
      store.showForm = true
      store.isEdit=false
    }">Tambah
    </v-btn>
    <v-data-table-server
        v-model:items-per-page="store.size"
        :headers="header"
        :items="store.items"
        :items-length="store.totalItems"
        :loading="store.loading"
        :search="store.search"
        @update:options="(opt)=>store.onPageChange(opt.page)"
    >
      <template v-slot:[`header.action`]>
        <div class="text-end">Aksi</div>
      </template>
      <template v-slot:[`item.feature`]="{ item }">
        <NuxtLink class="underline text-blue-600 cursor-pointer" :to="`/admin/master/package-feature/${item.id}`">Atur
          Benefit
        </NuxtLink>
      </template>
      <template v-slot:[`item.slug`]="{ item }">
        <NuxtLink class="underline text-blue-600 cursor-pointer" :to="`/packages/${item.slug}`">/{{ item.slug }}
        </NuxtLink>
      </template>
      <template v-slot:[`item.image`]="{ item }">
        <v-card class="my-2" elevation="2" rounded>
          <v-img
              :src="publicServiceUrl(item.image ?? '')"
              height="64"
              cover
          ></v-img>
        </v-card>
      </template>
      <template v-slot:[`item.icon`]="{ item }">
        <v-card class="my-2" elevation="2" rounded>
          <v-img
              :src="publicServiceUrl(item.icon ?? '')"
              height="64"
              cover
          ></v-img>
        </v-card>
      </template>
      <template v-slot:[`item.action`]="{ item }">
        <div class="d-flex justify-space-around">
          <v-btn @click="()=>{
            showEdit(item)
          }" icon="mdi-pencil" variant="flat">
          </v-btn>

          <v-btn @click="()=>{
            store.showDelete = true
            store.selectedPackage = item
          }" icon="mdi-delete" variant="flat">
          </v-btn>
        </div>
      </template>
    </v-data-table-server>
  </NuxtLayout>
</template>

<style scoped>

</style>