<template>
<div class="cart-items">
    <h2 style="display: inline-block" >{{title}}</h2> <img class="image" :src="src" alt="">
    <div class="float-right" style="display:inline"> 
        <v-btn @click="addOne" class="mr-6">
            +
        </v-btn>
        <span>{{amount}}</span>
        <v-btn @click="subtractOne" class="ml-6">
            -
        </v-btn>
    </div>
</div>
</template>

<script>
export default {
    props:['title', 'amount', 'src'],
    methods:{
        addOne(){
            this.$store.dispatch('addOne',{title: this.title, amount: this.amount})
        },
        subtractOne(){
            this.$store.dispatch('subtractOne',{title: this.title, amount: this.amount})
        }
    }
}
</script>

<style scoped>
h2{
    align-items: center
}
.cart-items{
    margin: 50px 30px;
    width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
.image{
    width: 70px;
    height: 70px;
    margin-left:40px;
    border-radius:90px ;
}

</style>