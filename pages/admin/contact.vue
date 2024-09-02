<script setup lang="ts">
const contact = useAdminContact()
const headers = [
  {key: 'full_name', title: 'Pesan',}
]

const selected = ref<{ id:number,created_at: string, full_name: string, email: string, subject: string, message: string|null }|null>(null)


function getSubjectLabel(subject: string) {
  if (subject === "SERVICE") return "Layanan"
  if (subject === "CRITIC") return "Kritik"
  if (subject === "ADVICE") return "Saran"
  return "Layanan"
}


</script>

<template>
  <NuxtLayout name="admin">
    <v-dialog  v-model="contact.showDialog"  max-width="500">
      <template v-slot:default="{ isActive }">
        <v-card rounded="lg">
          <v-card-title class="d-flex justify-space-between align-center">
            <div class="text-h5 text-medium-emphasis ps-2">
              Pesan dari {{selected?.full_name}}
            </div>

            <v-btn
                icon="mdi-close"
                variant="text"
                @click="()=>{
                  isActive.value = false
                  selected = null
                }"
            ></v-btn>
          </v-card-title>

          <v-divider class="mb-4"></v-divider>

          <v-card-text>
            <div class="text-medium-emphasis mb-4">
              {{selected?.message}}
             </div>
          </v-card-text>

          <v-divider class="mt-2"></v-divider>

          <v-card-actions class="my-2 d-flex justify-end">
            <v-btn
                class="text-none"
                rounded="xl"
                text="Tutup"
                @click="()=>{ isActive.value = false
                  selected = null}"
            ></v-btn>

          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    <v-data-table-server
        v-model:items-per-page="contact.size"
        :headers="headers"
        :items="contact.items"
        :items-length="contact.totalItems"
        :loading="false"
        :search="contact.search"
        @update:options="(opt)=>{
          if((opt.page -1) > contact.page){
            contact.nextPage()
          }else if((opt.page -1) < contact.page){
            contact.prevPage()
          }else if((opt.page -1) === contact.page){
            contact.getMessages()
          }
        }"
    >
      <template v-slot:item="{ item }">
      <v-list-item
          base-color="surface-light"
          border="opacity-50 sm"
          lines="two"
          prepend-avatar="https://placehold.co/600x400"
          rounded="lg"
          variant="flat"
          class="my-2"
      >
        <v-list-item-title>
          <span>
            <span class="text-h6">{{ `${item.full_name}`}}</span>
            <span class="text-sm">{{ `(${item.email})`}}</span>
            <v-chip class="ml-2">{{getSubjectLabel(item.subject)}}</v-chip>
          </span>
        </v-list-item-title>

        <v-list-item-subtitle :opacity=".8 ">
          <v-scroll-y-reverse-transition mode="out-in">
            <div
                key="not-subscribed"
                class="text-caption line-clamp-1 pr-2"
            >
              {{item.message}}
            </div>
          </v-scroll-y-reverse-transition>
        </v-list-item-subtitle>

        <template v-slot:append>
          <v-fade-transition mode="out-in">
            <v-btn
                :key="`info`"
                :color="'success'"
                :prepend-icon=" 'mdi-open-in-new'"
                :text="'Selengkapnya'"
                class="text-none"
                size="small"
                variant="flat"
                flat
                @click="()=>{
                  selected = item
                  contact.showDialog = true
                }"
            ></v-btn>
          </v-fade-transition>
        </template>
      </v-list-item>
      </template>
    </v-data-table-server>
  </NuxtLayout>
</template>

<style scoped>

</style>