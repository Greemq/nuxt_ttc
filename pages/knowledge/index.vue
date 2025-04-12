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
                <!--                <img alt="" src="/images/icons/Dots.svg" @click="openDropdown(index)">-->
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"
                     @click="openDropdown(index)">
                    <path
                        d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z"
                        fill="currentColor"/>
                    <path
                        d="M12 7.5C12.8284 7.5 13.5 6.82843 13.5 6C13.5 5.17157 12.8284 4.5 12 4.5C11.1716 4.5 10.5 5.17157 10.5 6C10.5 6.82843 11.1716 7.5 12 7.5Z"
                        fill="currentColor"/>
                    <path
                        d="M12 19.5C12.8284 19.5 13.5 18.8284 13.5 18C13.5 17.1716 12.8284 16.5 12 16.5C11.1716 16.5 10.5 17.1716 10.5 18C10.5 18.8284 11.1716 19.5 12 19.5Z"
                        fill="currentColor"/>
                </svg>

                <ui-dropdown ref="dropdownRefs">
                    <div class="py-2 px-4 hover:bg-gray-light cursor-pointer" @click="handleSelect(1)">
                        Удалить
                    </div>
                </ui-dropdown>
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
                <svg class="w-6 h-6 text-error dark:text-[#B61452]" fill="none" height="24" viewBox="0 0 24 24"
                     width="24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8 7.20001H5.19994" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                    <path
                        d="M17.4667 9.20001L17.0987 14.7193C16.9571 16.8432 16.8863 17.9052 16.1943 18.5526C15.5023 19.2 14.438 19.2 12.3093 19.2H11.6907C9.56201 19.2 8.49769 19.2 7.80569 18.5526C7.11368 17.9052 7.04288 16.8432 6.90129 14.7193L6.53333 9.20001"
                        stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                    <path d="M9.73653 5.6C10.066 4.66785 10.955 4 12 4C13.0449 4 13.9339 4.66785 14.2634 5.6"
                          stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                </svg>
                <div class="font-bold text-xl dark:text-dark-dark">Удаление документа</div>
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
        @apply rounded-xl py-1 px-4 text-gray-dark bg-gray-light cursor-pointer dark:bg-dark-white
    }

    .active {
        @apply border-primary border text-primary bg-primary-light dark:bg-dark-bg;
    }
}

.docs {
    @apply grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 bg-white rounded-3xl p-6 gap-6 dark:bg-dark-white;

    &_item {
        @apply flex flex-col items-center justify-center p-4 gap-2 border border-gray-light rounded-2xl relative dark:border-dark-gray-light;

        &__control {
            @apply absolute right-0 top-0 p-4;

            svg {
                @apply w-6 h-6 cursor-pointer dark:text-dark-dark;
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
                @apply text-center dark:text-dark-dark;
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