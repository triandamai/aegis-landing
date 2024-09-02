<script setup lang="ts">
const login = useLoginAdmin()
</script>

<template>
  <v-img class="mx-auto my-6" max-width="228"
         src="/images/logo.png"></v-img>

  <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
    <div class="text-subtitle-1 text-medium-emphasis">Account</div>

    <v-text-field v-model="login.email" density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>

    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">Password</div>
    <v-text-field v-model="login.password"  :append-inner-icon="login.showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="login.showPassword ? 'text' : 'password'"
                  density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline"
                  variant="outlined"
                  @click:append-inner="login.showPassword = !login.showPassword"></v-text-field>

    <v-btn block @click="login.signIn" class="mb-8" color="blue" size="large" variant="tonal">
      Log In
    </v-btn>
  </v-card>
</template>

<style scoped>

</style>