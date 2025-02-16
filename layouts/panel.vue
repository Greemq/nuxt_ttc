<script lang="ts" setup>
import Navbar from "@/components/navbar.vue";
import Sidebar from '@/components/sidebar.vue';
onMounted(()=>{
    console.log('mounted')
})
</script>

<template>
    <div class="flex h-screen">
        <sidebar/>
        <div class="w-full h-screen flex flex-col">
            <navbar/>
            <slot/>
        </div>
    </div>
</template>

<style scoped>

</style>