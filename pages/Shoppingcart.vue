<template>
<div>
    <div v-if="cartItems.length > 0">
        <app-card-item v-for="item in cartItems"
            :key="item.title"
            :title="item.title"
            :amount="item.amount"
            :src="item.src"
        >
        </app-card-item>
    </div>
    <div v-else>
       <h1>No items in yout cart yet!</h1>
    </div>
</div>
</template>

<script>
import CartItem from '../components/CardItem.vue'
export default {
    components:{
        appCardItem: CartItem
    },
    computed:{
        cartItems(){
            return this.$store.state.cart.items
        }
    },
}
</script>

<style>

</style>