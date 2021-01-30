<template>
  <div class=" pa-16 flex-d flex-wrap">
      <app-card v-for="card in filteredCards"
        class="mb-12"
        style="margin: 0 auto"
        :buttons="buttons"
        :key="card.id"
        :src="card.src"
        :title="card.title"
        :description="card.description"
        :subTitle="card.subTitle"
        :text="card.text"
        :categorie="card.categorie"
        d-flex justify-center
      ></app-card>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  props:['cards','buttons','filter'],
  components:{
      appCard: Card
  },
  computed:{
    filteredCards(){
      if(this.filter == 'All'){
        return this.cards
      } else{
      return this.cards.filter(card => card.categorie == this.filter)
    }
    
  },
}
}
</script>

<style>

</style>