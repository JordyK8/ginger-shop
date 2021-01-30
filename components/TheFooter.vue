<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class=" lighten-1 white--text text-center"
    >
   
      <v-card-text class="moveDown">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-6 white--text"
          icon
        >
          <v-icon size="28px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="fullWidth">
      </v-card-text>
      

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
<style scoped>
.fullWidth{
  width: 100vw;
}
.moveDown{
  margin-bottom: -35px;
}
</style>