<script setup>

onMounted(() => {
    console.log(route.name);
});
const route = useRoute();
const sidebarHidden = computed(() => route.meta.sidebarHidden ?? false);

watchEffect(() => {
    console.log("Current route:", route.name);
    console.log("Sidebar hidden:", sidebarHidden.value);
});
const slots = useSlots();
</script>

<template>
    <div class="flex h-screen overflow-auto">
        <sidebar v-if="!sidebarHidden" />
        <div class="flex flex-col flex-grow">
            <ui-header/>
            <main class="bg-bg flex flex-col px-6 py-5 gap-6 h-full overflow-y-auto">
                <slot/>
            </main>
        </div>
    </div>
</template>

<style scoped>
</style>