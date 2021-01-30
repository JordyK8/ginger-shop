<template>
  <div>

    <app-carousel></app-carousel>
    <app-card-layout :cards="cards" class="d-flex justify-center"></app-card-layout>
  </div>
</template>

<script>

import Carousel from '../components/Carousel.vue'
import CardLayout from '../components/CardLayout.vue'
export default {
  components:{
    appCarousel: Carousel,
    appCardLayout: CardLayout
            },
  data(){
    return{
      cards: [
        {
          id:'1',
          src:'https://static.mommypoppins.com/styles/image620x420/s3/bigstock-141931544_edit.jpg',
          description:'Mother with child in park',
          title:'Good for children',
          subTitle:'Ginger gets your child the care it needs',
          text:''
        },
        {
          id:'2',
          src:'https://www.verywellfit.com/thmb/7p6W--n4iNAlMU5wlVTyOr7J-8k=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1061745418-e91c3dd01a0f4dc3a8a80f12222a0644.jpg',
          description:'Jogging in park',
          title:'Important for health',
          subTitle:'Ginger provides your body with energie',
          text:''
        },
        {
          id:'3',
          src:'https://c8.alamy.com/comp/A3GHEP/a-group-of-old-men-on-a-park-bench-in-puglia-southern-italy-A3GHEP.jpg',
          description:'Seniors in park',
          title:'Advantaged for seniors',
          subTitle:'Ginger takes care of the elderly',
          text:''
        },
        
      ]
    }
  },
}
</script>

<style>

</style>