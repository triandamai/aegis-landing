<script setup lang="ts">

const header = [
  {key: 'feature.name', title: 'Nama'},
  {key: 'feature.image', title: 'Gambar'},
  {key: 'feature.description', title: 'Deskripsi'},
  {key: 'action', title: 'Aksi'}
]
const {publicServiceUrl} = useFile()
const store = useAdminMasterPackageFeature()
useAsyncData(async ()=> store.getServiceFeature())

</script>

<template>
  <NuxtLayout name="admin">

    <!--    create new -->
    <v-dialog v-model="store.showForm" max-width="500">
      <template v-slot:default="{ isActive }">
        <v-card rounded="lg">
          <v-card-title class="d-flex justify-space-between align-center">
            <div class="text-h5 text-medium-emphasis ps-2">
              Tambah layanan baru
            </div>

            <v-btn
                icon="mdi-close"
                variant="text"
                @click="isActive.value = false"
            ></v-btn>
          </v-card-title>

          <v-divider class="mb-4"></v-divider>

          <v-card-text>
            <v-autocomplete
                v-model="store.featureId"
                clearable
                label="Pilih Benefit"
                :items="store.features"
                item-value="id"
                variant="outlined"
                chips
                closable-chips
            >
              <template v-slot:chip="{ props, item }">
                <v-chip
                    v-bind="props"
                    :text="item.raw.name ?? ''"
                ></v-chip>
              </template>

              <template v-slot:item="{ props, item }">
                <v-list-item
                    v-bind="props"
                    :subtitle="item.raw.name ?? ''"
                    :title="item.raw.services?.name ?? ''"
                ></v-list-item>
              </template>
            </v-autocomplete>
          </v-card-text>

          <v-divider class="mt-2"></v-divider>

          <v-card-actions class="my-2 d-flex justify-end">
            <v-btn
                class="text-none"
                rounded="xl"
                text="Cancel"
                @click="isActive.value = false"
            ></v-btn>

            <v-btn
                class="text-none"
                color="primary"
                rounded="xl"
                text="Send"
                variant="flat"
                @click="store.createFeature"
            ></v-btn>
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
          :title="`Hapus paket ${store.selectedFeature?.feature?.name}`"
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn :loading="store.showDeleteLoading"  @click="()=>{
            store.showDelete = false
            store.selectedFeature = null
          }">
            <template v-slot:loader>
              <v-progress-circular indeterminate></v-progress-circular>
            </template>
            Batal
          </v-btn>

          <v-btn :loading="store.showDeleteLoading" @click="()=>{ store.deleteServices()}">
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
    }">Tambah</v-btn>
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
      <template v-slot:[`item.feature.image`]="{ item }">
        <v-card class="my-2" elevation="0" rounded flat>
          <v-img
              :src="publicServiceUrl(item?.feature?.image ?? '')"
              height="64"
              contain
          ></v-img>
        </v-card>
      </template>
      <template v-slot:[`item.action`]="{ item }">
        <div class="d-flex justify-space-around">
          <v-btn @click="()=>{
            store.showDelete = true
            store.selectedFeature = item
          }" icon="mdi-delete" variant="flat">
          </v-btn>
        </div>
      </template>
    </v-data-table-server>
  </NuxtLayout>
</template>

<style scoped>

</style>