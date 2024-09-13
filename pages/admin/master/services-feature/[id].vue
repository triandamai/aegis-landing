<script setup lang="ts">

const header = [
  {key: 'name', title: 'Nama'},
  {key: 'image', title: 'Gambar'},
  {key: 'description', title: 'Deskripsi'},
  {key: 'action', title: 'Aksi'}
]
const {publicServiceUrl} = useFile()
const store = useAdminMasterServiceFeature()

function showEdit(data: DataFeatureService) {
  store.isEdit = true
  store.featureId = data.id
  store.featureName = data.name
  store.featureDescription = data.description
  store.featureImageUrl = data.image
  store.showForm=true
}
</script>

<template>
  <NuxtLayout name="admin">

    <!--    create new -->
    <v-dialog v-model="store.showForm" max-width="500">
      <template v-slot:default="{ isActive }">
        <v-card rounded="lg">
          <v-card-title class="d-flex justify-space-between align-center">
            <div class="text-h5 text-medium-emphasis ps-2">
              {{ store.isEdit ? 'Ubah Benefit' : 'Tambah Benefit' }}
            </div>

            <v-btn
                icon="mdi-close"
                variant="text"
                @click="isActive.value = false"
            ></v-btn>
          </v-card-title>

          <v-divider class="mb-4"></v-divider>

          <v-card-text>
            <v-text-field v-model="store.featureName" label="Nama Benefit" variant="outlined"></v-text-field>
            <v-textarea
                v-model="store.featureDescription"
                :counter="300"
                label="Deskripsi"
                class="mb-2"
                rows="2"
                variant="outlined"
                persistent-counter
            ></v-textarea>
            <v-row>
              <v-col cols="12" md="4" sm="6" lg="2" xl="2">
                <v-img
                    :src="store.getImagePreview"
                    contain
                ></v-img>
              </v-col>
              <v-col cols="12" md="6" sm="6" lg="10" xl="10">
                <v-file-input v-model="store.featureImage" label="Icon" variant="outlined"></v-file-input>
              </v-col>
            </v-row>
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
                class="text-none"
                color="primary"
                variant="flat"
                :loading="store.loadingSubmit"
                @click="()=>{
                  if(store.isEdit){
                   store.updateFeature()
                  }else{
                    store.createFeature()
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
          :title="`Hapus paket ${store.selectedService?.name}`"
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn :loading="store.showDeleteLoading" @click="()=>{
            store.showDelete = false
            store.selectedService = null
          }">
            <template v-slot:loader>
              <v-progress-circular indeterminate></v-progress-circular>
            </template>
            Batal
          </v-btn>

          <v-btn :loading="store.showDeleteLoading"
                 @click="()=>{ store.deleteServices()}">
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
      <template v-slot:[`item.image`]="{ item }">
        <v-card class="my-2" elevation="0" rounded flat>
          <v-img
              :src="publicServiceUrl(item.image ?? '')"
              height="64"
              contain
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
            store.selectedService = item
          }" icon="mdi-delete" variant="flat">
          </v-btn>
        </div>
      </template>
    </v-data-table-server>
  </NuxtLayout>
</template>

<style scoped>

</style>