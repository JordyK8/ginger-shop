<template>
    <div>
        <v-carousel
            cycle
            style="border-radius: 5px"
            height="600"
            hide-delimiter-background
            show-arrows-on-hover
        >
            <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
            >
                
            </v-carousel-item>
            <NuxtLink :to="'/products'">
            
            <v-btn
                    x-large
                    color="success"
                    dark
                >
                    BUY NOW
                </v-btn>
                </NuxtLink>
        </v-carousel>
        <div class="hoi">
            <p>Is there anything you want to write here??</p>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            items: [
          {
            src: 'https://wallpaperaccess.com/full/2496355.jpg',
          },
          {
            src: 'https://previews.123rf.com/images/televisor555/televisor5551704/televisor555170400197/75823439-ginger-root-pile-in-sun-on-market-display-golden-brown-ginger-photo-background-or-wallpaper-spicy-pl.jpg',
          },
          
        ],
        }),
    }
</script>
<style scoped>
button{
    position: absolute;
    top: 75%;
    left: 50%;
    width: 170px;
    transform: translate(-50%, -50%);
    
}
.hoi{
    width: 100%;
    color: black;
    padding: 5px;
    background-color: white;
    margin-top: 10px;
    border-radius: 5px;
    text-align: center;
}
</style>