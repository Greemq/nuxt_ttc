<script setup>
import AssistantStep3 from "@/components/Assistants/AssistantStep3.vue";

definePageMeta({
    layout: "base-layout",
});
const fileTypes = ['doc', 'pdf', 'xls', 'xlsx', 'txt'];
const getRandomFileType = () => fileTypes[Math.floor(Math.random() * fileTypes.length)];
const selectedFilter = ref(1)
const formStep3 = ref([])

const dropdownRefs = ref({});
const openDropdown = (index) => {
    if (dropdownRefs.value[index]) {
        dropdownRefs.value[index].open();
    }
};
</script>

<template>
    <breadcrumbs label="knowledge">
        <ui-button icon label="Добавить документ" type="primary" @click="$refs.createModal.open()"/>
    </breadcrumbs>
    <div class="filters">
        <div class="filters_item" :class="{'active':selectedFilter==item}" @click="selectedFilter=item" v-for="item in 5">item {{ item }}</div>
    </div>
    <div class="docs">
        <div v-for="(item,index) in 17" class="docs_item">
            <div class="docs_item__control">
                <img src="assets/images/icons/Dots.svg" alt="" @click="openDropdown(index)">
                <ui-dropdown :options="['удалить']" ref="dropdownRefs" :ref="el => dropdownRefs[index] = el"/>
            </div>
            <div class="docs_item__icon">
                <img :src="useNuxtApp().$getFileIconPath(getRandomFileType())" alt="">
            </div>
            <div class="docs_item__description">
                <div>name</div>
                <div class="flex justify-center items-center gap-1">03.02.25  12:05
                    <div class="w-1 h-1 bg-gray rounded-full"></div>
                    9 мб
                </div>
            </div>
        </div>
    </div>
    <right-modal ref="createModal" title="Добавление документа">
        <AssistantStep3 v-model="formStep3"/>
        <template #buttons>
            <ui-button label="Добавить"/>
        </template>
    </right-modal>
</template>

<style scoped>
.filters{
    @apply flex w-full gap-4 items-center ;

    &_item{
        @apply rounded-xl py-1 px-4 text-gray-dark bg-gray-light cursor-pointer
    }
    .active{
        @apply border-primary border text-primary bg-primary-light
    }
}
.docs {
    @apply grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 bg-white rounded-3xl p-6 gap-6;

    &_item {
        @apply flex flex-col items-center justify-center p-4 gap-2 border border-gray-light rounded-2xl relative;

        &__control {
            @apply absolute right-0 top-0 p-4;
            img{
                @apply w-6 h-6 cursor-pointer;
            }
        }

        &__icon {
            @apply w-12 h-12;

            img {
                @apply w-full
            }
        }

        &__description {
            @appy flex flex-col gap-1 items-center justify-center text-center w-full;

            div {
                @apply text-center
            }

            div:first-child {
                @apply font-normal text-base
            }

            div:last-child {
                @apply font-normal text-sm text-gray
            }

        }
    }
}
</style>