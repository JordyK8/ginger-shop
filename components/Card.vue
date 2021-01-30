<template>
  <v-card 
    max-width="300"
    min-width="180"
  >
    <v-img
      :src="src"
      height="300px"
      :alt="src.description"
    ></v-img>

    <v-card-title>
      {{title}}
    </v-card-title>

    <v-card-subtitle>
      {{subTitle}}
    </v-card-subtitle>
  <div v-if="!buttons">
    <v-card-actions>
      <v-btn
        color="orange lighten-1"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{text}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </div>
  <div v-else>
    <v-card-actions class="add-to-card-section">
      <v-btn @click="amount--" class="mr-6" :disabled="amountToLow">
        -
      </v-btn>
      <div class="input-box">
        <v-input :amount="amount" type="number" class="input">
          {{amount}}
        </v-input>
      </div>
      <v-btn @click="amount++"  class="ml-6">
        +
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
      >
        <v-icon @click="addToCart" large>mdi-cart-arrow-down</v-icon>
      </v-btn>
    </v-card-actions>
  </div>
  </v-card>
</template>
<script>
  export default {
    props:['src','description','text','subTitle','title','buttons'],
    data: () => ({
      show: false,
      amount:1,
    }),
    methods:{
      addToCart(){
        this.$store.dispatch('addItem', { amount: this.amount, title:this.title, src:this.src })
      }
    },
    computed:{
      amountToLow(){
        return this.amount > 1 ? false: true
      }
    }
  }
</script>
<style scoped>
  .input{ 
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin-top:20px;
 
    
  }
  .add-to-card-section{
  }
</style>