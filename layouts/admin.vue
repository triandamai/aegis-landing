<script setup lang="ts">
const router = useRouter()
const drawer = ref(false)
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

          <v-btn icon="mdi-logout" variant="text"></v-btn>
        </template>
      </v-app-bar>

      <v-navigation-drawer
          v-model="drawer"
          :location="$vuetify.display.mobile ? 'bottom' : undefined"
      >
        <v-list>
          <v-list-item href="/admin/services" title="Layanan"></v-list-item>
          <v-divider></v-divider>
          <v-list-item href="/admin/contact" title="Pesan"></v-list-item>
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