<script setup>
import { ref, reactive, computed, watch } from 'vue';

// const data = {link: "ww.facebook.com",imgUrl: 
// "https://down-id.img.susercontent.com/file/id-11134207-7r990-lniw4yugx5s6f9",
//  altText:"Captain America", value: "Haii",}

  let boneka =[
    {nama: "bola",bentuk: "bulat",warna: "coklat"},
    {nama: "beruang",bentuk: "beruang",warna: "putih"},
    {nama: "monyet",bentuk:"monyet",warna: "pink"},
];

</script>

<template>
<div v-for="(item, index) in boneka" :key="index">
    <h2>{{ item.nama }}</h2>
    <p>wakil : {{ item.bentuk }}</p>
    <p>warna : {{ item.warna }}</p>
</div>

    <!-- <a :herf="data.link">{{ data.name }}</a>
    <img :src="data.imgUrl" :alt="data.altText">
    <input type="text" :value="data.value"> -->
    </template>


<style scoped>
</style>