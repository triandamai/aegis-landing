<script setup lang="ts">
const reservation = useAdminReservation()
const headers = [
  {key: 'email', title: 'Reservasi Layanan'}
]


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
        @update:options="(opt)=>reservation.onPageChange(opt.page)"
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
                  :text="item.business?.business_email ?? ''"
                  variant="outlined"
              ></v-chip>
            </v-card-title>

            <div class="py-1">
              <div class="text-h6">{{ item.business?.business_name }}</div>
              <div class="font-weight-light text-medium-emphasis">
                Reservasi Layanan: {{ item.package?.title }} {{item.service?.name}}
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
                :href="`https://wa.me/${item.business?.business_phone}?text=I'm%20interested%20in%20your%20car%20for%20sale`"
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