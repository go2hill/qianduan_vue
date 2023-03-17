<template>
    <div class="product-list">
        <el-row>
            <el-col :span="8" v-for="product in products" :key="product.id">
                <router-link :to="'/product/' + product.id">
                    <div class="product-card">
                        <img :src="product.image" alt="" class="product-image" />
                        <div class="product-title">{{ product.title }}</div>
                        <div class="product-price">¥{{ product.price }}</div>
                    </div>
                </router-link>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                products: []
            };
        },
        created() {
            axios.get("http://localhost:8088/api/products").then(response => {
                this.products = response.data;
            });
        }
    };
</script>

<style>
    .product-list {
        padding: 20px;
    }

    .product-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

    .product-card:hover {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }

    .product-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
        margin-bottom: 10px;
    }

    .product-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .product-price {
        font-size: 16px;
        color: #f60;
    }
</style>
