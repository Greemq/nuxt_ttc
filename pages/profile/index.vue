<script setup>
import ProfileEmployees from "~/components/profile/ProfileEmployees.vue";
import ProfileSubscription from "~/components/profile/ProfileSubscription.vue";

definePageMeta({
    layout: "base-layout",
});
const route = useRoute();
onMounted(() => {
    if (route.query.tab) {
        tab.value = route.query.tab;
    }
});

const tab = ref(1);
watch(() => route.query.tab, (newTab) => {
  tab.value = newTab || '1';
});
const tabs = ref([
    {
        id: 1,
        name: 'Профиль'
    },
    {
        id: 2,
        name: 'Сотрудники'
    },
    {
        id: 3,
        name: 'Подписки'
    },


]);
</script>

<template>
    <breadcrumbs label="Аккаунт"/>
    <ui-tabs v-model="tab" :tabs="tabs"/>
    <ProfileAccount v-if="tab==1"/>
    <profile-employees v-else-if="tab==2"/>
    <ProfileSubscription v-else-if="tab==3"/>
</template>

<style scoped>

</style>