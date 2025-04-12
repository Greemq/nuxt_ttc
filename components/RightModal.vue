<script setup>
import {ref} from 'vue';

const isVisible = ref(false);
const emit = defineEmits(['close']);
const open = () => {
    isVisible.value = true;
};

const close = () => {
    isVisible.value = false;
    emit('close');
};

const props = defineProps({
    title: String,
    size: {type: String, default: 'w-1/3'}
});
const sizeClasses = {
    'w-7/12': 'lg:w-7/12',
    'w-2/3': 'lg:w-2/3',
    'w-1/3': 'lg:w-1/3',
    'w-1/2': 'lg:w-1/2',
    'w-full': 'lg:w-full',
    'w-auto': 'lg:w-auto'
};

const modalSize = computed(() => sizeClasses[props.size] || 'lg:w-1/3');
defineExpose({open, close});
</script>

<template>
    <div v-if="isVisible" class="modal right">
        <div :class="modalSize" class="p-6 h-full w-full md:w-1/2">
            <div class="modal_body">
                <div class="modal_body__title">
                    <span v-if="title">{{ title }}</span>
                    <slot name="title"></slot>
<!--                    <img src="/images/icons/Close.svg">-->
                    <svg class="cursor-pointer" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"
                         @click="close">
                        <path d="M18 6.00005L6 18M5.99995 6L17.9999 18" stroke="currentColor" stroke-linecap="round"
                              stroke-width="1.5"/>
                    </svg>

                </div>
                <div class="modal_body__content">
                    <slot></slot>
                </div>
                <div class="modal_body__buttons">
                    <slot name="buttons">
                    </slot>
                </div>
            </div>
        </div>


        <div class="modal_overlay" @click="close"></div>
    </div>
</template>

<style scoped>
.modal {
    @apply flex fixed top-0 left-0 w-full h-full justify-end items-center z-50;

    &_body {
        @apply flex flex-col h-full bg-white rounded-2xl w-full dark:bg-dark-white;


        &__title {
            @apply flex justify-between py-3 px-4 border-b border-gray-light items-center flex-shrink-0 dark:text-dark-dark dark:border-dark-white;
            font-weight: 700;
            font-size: 20px;
            line-height: 28px;

            img {
                @apply cursor-pointer;
            }
        }

        &__content {
            @apply p-4 flex-grow overflow-y-scroll;
        }

        &__buttons {
            @apply py-3 px-4 border-t border-gray-light flex flex-row-reverse items-end flex-shrink-0  dark:border-dark-white;
        }

    }

    &_overlay {
        @apply bg-dark w-full h-full opacity-50 absolute dark:bg-dark-dark;
        z-index: -1;
    }
}

.right {

}
</style>