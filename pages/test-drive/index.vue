<script setup>
import AssistantStep4 from "~/components/Assistants/AssistantStep4.vue";

definePageMeta({
    layout: "base-layout",
});
const messages = ref([
    {
        type:1,
        title:'title',
        time:'00:00'
    },
    {
        type:2,
        title:'title2',
        time:'00:01'
    },
    {
        type:1,
        title:'titl3',
        time:'00:02'
    },
    {
        type:2,
        title:'title4',
        time:'00:03'
    },
    {
        type:1,
        title:'title5',
        time:'00:04'
    },
    {
        type:2,
        title:'title6',
        time:'00:05'
    },


])
</script>

<template>
    <Breadcrumbs label="Тест драйв"/>
    <AssistantStep4 :messages="messages"/>
</template>

<style scoped>

</style>