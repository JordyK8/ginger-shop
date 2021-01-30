<template>
<div>
<v-card> 
    <v-tabs
        color="deep-purple accent-4"
        right
    >
        <v-tab v-for="product in products"
            :key="product.id">{{product.title}}</v-tab>
        

        <v-tab-item
            v-for="product in products"
            :key="product.id"
        >
            <v-container fluid>
           
                    <app-card-layout 
                        :cards="cards" 
                        :buttons="buttons" 
                        :filter="product.title" 
                        class="d-flex justify-center">
                    </app-card-layout>
            
            </v-container>
        </v-tab-item>
    </v-tabs>
</v-card>
  
</div>
</template>

<script>
import CardLayout from '../components/CardLayout.vue'
export default {
    components:{
        appCardLayout: CardLayout
    },
    data(){
        return{
            products:[
                {title:'All', id:'3'},
                {title:'Ginger',id:'1'},
                {title: 'Gee', id:'2'},
            ],
            cards: [
                {
                    id:'1',
                    src:'https://jdsfoodgroup.co.uk/wp-content/uploads/2020/04/Gimber-20ml.jpg',
                    description:'Gember drink 100ml',
                    title:'Ginger drink 100ml',
                    subTitle:'...',
                    text:'...',
                    categorie: 'Ginger'
                },
                {
                    id:'2',
                    src:'https://cdn.webshopapp.com/shops/258983/files/318749433/gimber-gimber.jpg',
                    description:'Jogging in park',
                    title:'Ginger drink 200ml',
                    subTitle:'...',
                    text:'...',
                    categorie: 'Gee'
                },
                {       
                    id:'3',
                    src:'https://www.denotenshop.nl/media/catalog/product/cache/044f523ba46fc9882456e9087dcb7d21/7/1/710535409512.jpg',
                    description:'Seniors in park',
                    title:'Ginger drink 500ml',
                    subTitle:'...',
                    text:'...',
                    categorie: 'Ginger'
                },
        
            ],
            buttons:true,
            absolute: true,
            overlay: false,   
        }
    },

}
</script>

<style>

</style>