<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="dark"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
        ></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          text
        ><NuxtLink :to="link.path" color="white">
          {{ link.text }}
        </NuxtLink>
        </v-btn>
        

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
        <div class="ml-12">
          <NuxtLink :to="'/shoppingcart'">
          <v-btn
            icon
          >
            <v-icon >mdi-cart-arrow-down</v-icon>
          </v-btn>
          </NuxtLink>
            <span class="cartNum">{{shoppingCart.items.length}}</span>
        </div>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
              class="pa-5"
            >
            <nuxt/>


              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer class="pa-0" app>
      <app-footer></app-footer>
    </v-footer>
  </v-app>
</template>

<script>
import TheFooter from '../components/TheFooter'
  export default {
    components:{
      appFooter: TheFooter
    },
    data: () => ({
      links: [
        {
          text:'HealthDrinks',
          path:'/'
        },
        {
          text:'Products',
          path:'/products'
        },
        {
          text:'About',
          path:'/about'
        },
        {
          text:'Contact',
          path:'/contact'
        },
      ]
    }),
    computed:{
      shoppingCart(){
        return this.$store.state.cart
      }
    }
  }
  
</script>
<style scoped>
  a{
    color: white;
    text-decoration: none;
  }
  .cartNum{
    margin-left: -12.9px;
  }
</style>
