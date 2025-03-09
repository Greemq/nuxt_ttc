<script setup>

onMounted(() => {
    console.log(route.name)
})
const route=useRoute()
const sidebarHidden = route.meta.sidebarHidden ?? false;
</script>

<template>
    <div class="flex h-screen">
        <sidebar v-if="!sidebarHidden"/>
        <div class="grow flex flex-col">
            <ui-header/>
            <div class="bg-bg grow">
                <slot/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>