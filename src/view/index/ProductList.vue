<template>
    <div>
        <div v-for="product in products" :key="product.id">
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }}</p>
            <button @click="addToCart(product)">加入购物车</button>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        data() {
            return {
                products: [
                    { id: 1, name: '商品1', price: 10 },
                    { id: 2, name: '商品2', price: 20 },
                    { id: 3, name: '商品3', price: 30 },
                    { id: 4, name: '商品4', price: 40 },
                    { id: 5, name: '商品5', price: 50 }
                ]
            };
        },
        methods: {
            ...mapMutations(['ADD_TO_CART']),
            addToCart(item) {
                this.ADD_TO_CART(item);
            }
        }
    };
</script>
