<script setup lang="ts">
import type {User} from "@supabase/auth-js";

const router = useRouter()
const drawer = ref(false)
const client = useSupabaseClient()
const session = ref<User | null>(null)
const name = ref("")

function init() {
  client.auth.getUser()
      .then(data => {
        if (data.error) {
          session.value = null
        } else {
          if (data.data == null) {
            session.value = null
          } else {
            session.value = data.data.user;
            let split = data.data.user.user_metadata["full_name"].split(" ")
            if (split.length > 0) {
              name.value = split[0]
            }
          }
        }
      }).catch(() => {
    session.value = null
  })
}


function signOut() {
  client.auth.signOut().finally(() => {
    router.push({path:"/admin/login",replace:true})
  })
}

onMounted(() => {
  init()
})
</script>

<template>
<ClientOnly>
  <v-responsive class="border rounded">
    <v-app>
      <v-app-bar prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Aegis Admin Panel</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-avatar
              size="36px"
          >
            <v-img
                alt="Avatar"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
            ></v-img>
          </v-avatar>

          <v-btn @click="signOut" icon="mdi-logout" variant="text"></v-btn>
        </template>
      </v-app-bar>

      <v-navigation-drawer
          v-model="drawer"
          :location="$vuetify.display.mobile ? 'bottom' : undefined"
      >
        <v-list>
          <v-list-subheader title="Layanan"></v-list-subheader>
          <v-list-item href="/admin/reservation" title="Resevasi"></v-list-item>
          <v-list-item href="/admin/inbox" title="Pesan"></v-list-item>
          <v-divider></v-divider>
          <v-list-subheader title="Master"></v-list-subheader>
          <v-list-item href="/admin/master/services" title="Layanan"></v-list-item>
          <v-list-item href="/admin/master/packages" title="Paket"></v-list-item>
          <v-divider></v-divider>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container>
          <slot/>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</ClientOnly>
</template>

<style scoped>

</style>