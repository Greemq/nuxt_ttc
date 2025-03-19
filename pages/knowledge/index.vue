<script setup>
import AssistantStep3 from "@/components/Assistants/AssistantStep3.vue";

definePageMeta({
    layout: "base-layout",
});
const fileTypes = ['doc', 'pdf', 'xls', 'xlsx', 'txt'];
const getRandomFileType = () => fileTypes[Math.floor(Math.random() * fileTypes.length)];
const selectedFilter = ref(1);
const formStep3 = ref([]);

const dropdownRefs = ref({});
const openDropdown = (index) => {
    if (dropdownRefs.value[index]) {
        dropdownRefs.value[index].open();
    }
};

const deleteModal = ref(null);
const handleSelect = (option) => {
    if (option == 1)
        deleteModal.value.open();
};

</script>

<template>
    <breadcrumbs label="knowledge">
        <ui-button icon label="Добавить документ" type="primary" @click="$refs.createModal.open()"/>
    </breadcrumbs>
    <div class="filters">
        <div v-for="item in 5" :class="{'active':selectedFilter==item}" class="filters_item"
             @click="selectedFilter=item">item {{ item }}
        </div>
    </div>
    <div class="docs">
        <div v-for="(item,index) in 17" class="docs_item">
            <div class="docs_item__control">
                <img alt="" src="/images/icons/Dots.svg" @click="openDropdown(index)">
                <ui-dropdown :ref="el => dropdownRefs[index] = el" ref="dropdownRefs" :options="[{id:1,name:'удалить'}]"
                             @select="handleSelect"/>
            </div>
            <div class="docs_item__icon">
                <img :src="useNuxtApp().$getFileIconPath(getRandomFileType())" alt="">
            </div>
            <div class="docs_item__description">
                <div>name</div>
                <div class="flex justify-center items-center gap-1">03.02.25 12:05
                    <div class="w-1 h-1 bg-gray rounded-full"></div>
                    9 мб
                </div>
            </div>
        </div>
    </div>
    <center-modal ref="deleteModal">

        <div class="flex flex-col gap-2">
            <div class="flex gap-3">
                <svg class="w-6 h-6 text-error" fill="none" height="24" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8 7.20001H5.19994" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                    <path
                        d="M17.4667 9.20001L17.0987 14.7193C16.9571 16.8432 16.8863 17.9052 16.1943 18.5526C15.5023 19.2 14.438 19.2 12.3093 19.2H11.6907C9.56201 19.2 8.49769 19.2 7.80569 18.5526C7.11368 17.9052 7.04288 16.8432 6.90129 14.7193L6.53333 9.20001"
                        stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                    <path d="M9.73653 5.6C10.066 4.66785 10.955 4 12 4C13.0449 4 13.9339 4.66785 14.2634 5.6"
                          stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                </svg>
                <div class="font-bold text-xl">Удаление документа</div>
            </div>
            <div class="flex gap-3">
                <div class="w-6 h-6 min-w-6">

                </div>
                <div class="text-gray-dark">Вы действительно хотите удалить документ?</div>
            </div>
        </div>
        <template #buttons>
            <ui-button label="Отмена" type="tretiary" @click="$refs.deleteModal.close()"/>
            <ui-button label="Удалить" type="primary"/>
        </template>
    </center-modal>

    <right-modal ref="createModal" title="Добавление документа">
        <AssistantStep3 v-model="formStep3"/>
        <template #buttons>
            <ui-button label="Добавить"/>
        </template>
    </right-modal>
</template>

<style scoped>
.filters {
    @apply flex w-full gap-4 items-center ;

    &_item {
        @apply rounded-xl py-1 px-4 text-gray-dark bg-gray-light cursor-pointer
    }

    .active {
        @apply border-primary border text-primary bg-primary-light
    }
}

.docs {
    @apply grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 bg-white rounded-3xl p-6 gap-6;

    &_item {
        @apply flex flex-col items-center justify-center p-4 gap-2 border border-gray-light rounded-2xl relative;

        &__control {
            @apply absolute right-0 top-0 p-4;

            img {
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
                @apply text-center;
            }

            div:first-child {
                @apply font-normal text-base;
            }

            div:last-child {
                @apply font-normal text-sm text-gray;
            }

        }
    }
}
</style>