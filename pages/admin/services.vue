<script setup lang="ts">
const reservation = useAdminServices()
const headers = [
  {key: 'email', title: 'Reservasi Layanan'}
]

function getBusinessLabel(scale: string): string {
  if (scale === "SMALL") return "Kecil"
  if (scale === "MICRO") return "Mikro"
  if (scale === "MEDIUM") return "Menengah"
  return "Menengah"
}
</script>

<template>
  <NuxtLayout name="admin">
    <v-data-table-server
        v-model:items-per-page="reservation.size"
        :headers="headers"
        :items="reservation.items"
        :items-length="reservation.totalItems"
        :loading="false"
        :search="reservation.search"
        @update:options="(opt)=>{
          if((opt.page -1) > reservation.page){
            reservation.nextPage()
          }else if((opt.page -1) < reservation.page){
            reservation.prevPage()
          }else if((opt.page -1) === reservation.page){
            reservation.getBookServices()
          }
        }"
    >
      <template v-slot:item="{ item }">
        <v-card
            class="ma-4"
            rounded="lg"
            variant="outlined"
        >
          <v-card-item>
            <v-card-title class="text-body-2 d-flex align-center">
              <v-icon
                  icon="mdi-calendar"
                  start
              ></v-icon>

              <span class="text-medium-emphasis font-weight-bold">{{ new Date(item.book_at).toLocaleString() }}</span>

              <v-spacer></v-spacer>

              <v-avatar
                  image="https://placehold.co/600x400"
                  size="x-small"
              ></v-avatar>

              <v-chip
                  class="ms-2 text-medium-emphasis"
                  prepend-icon="mdi-email"
                  size="small"
                  :text="item.email"
                  variant="outlined"
              ></v-chip>
            </v-card-title>

            <div class="py-1">
              <div class="text-h6">{{ item.business_name }}</div>
              <div class="font-weight-light text-medium-emphasis">
                Reservasi Layanan: {{ item.services_type }}
              </div>
              <div class="font-weight-light text-medium-emphasis">
                Lokasi: {{ item.location }}
              </div>
            </div>
          </v-card-item>

          <v-divider></v-divider>

          <div class="pa-4 d-flex align-center">
            <v-spacer></v-spacer>

            <v-btn
                icon="mdi-dots-horizontal"
                variant="text"
            ></v-btn>

            <v-btn
                class="me-2 text-none"
                color="success"
                prepend-icon="mdi-whatsapp"
                variant="flat"
            >
              Hubungi
            </v-btn>

          </div>
        </v-card>
      </template>
    </v-data-table-server>
  </NuxtLayout>
</template>

<style scoped>

</style>