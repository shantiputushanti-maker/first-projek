<script setup>
import { ref, reactive, computed, watch } from 'vue';


</script>

<template>
    <header>
    <nav>
        <ul>
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/product">product</RouterLink>
            </li>
        </ul>
    </nav>
    </header>
</template>

<style scoped>
header {
    position:sticky;
    top: 0;
    z-index: 1000;
    background: #fff;
    border-bottom: 1px solid pink;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

nav {
    max-width: 1200px;
margin: 0 auto;
padding: 0 32px;
}

nav ul {
    display: flex;
    align-items: center;
    gap: 12px;
    list-style: none;
    margin: 0;
    padding: 16px 0;
}

nav li {
margin: 0;
padding: 0;
}

nav a {
    position: relative;
    display: inline-block;
    padding: 10px 18px;
    color: green;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    border-radius: 8px;
    transition: color 0.25s ease, background-color 0.25s ease;;
}



</style>