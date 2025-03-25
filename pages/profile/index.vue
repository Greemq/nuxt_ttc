<script setup>
import ProfileEmployees from "~/components/profile/ProfileEmployees.vue";
import ProfileSubscription from "~/components/profile/ProfileSubscription.vue";

definePageMeta({
    layout: "base-layout",
});
const tab = ref(1);
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
    <ui-tabs :tabs="tabs" v-model="tab"/>
    <ProfileAccount v-if="tab==1"/>
    <profile-employees v-else-if="tab==2"/>
    <ProfileSubscription v-else-if="tab==3"/>
</template>

<style scoped>

</style>