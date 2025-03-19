<script setup>
import {ref} from 'vue';

const isVisible = ref(false);

const open = () => {
    isVisible.value = true;
};

const close = () => {
    isVisible.value = false;
};

defineProps({
    title: String,
    size: {type: String, default: 'w-1/3'}
});

defineExpose({open, close});
</script>

<template>
    <div v-if="isVisible" class="modal right">
        <div :class="size" class="p-6 h-full">
            <div class="modal_body">
                <div class="modal_body__title">
                    <span v-if="title">{{ title }}</span>
                    <slot name="title"></slot>
                    <img src="/images/icons/Close.svg" @click="close">
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
        @apply flex flex-col h-full bg-white rounded-2xl w-full;


        &__title {
            @apply flex justify-between py-3 px-4 border-b border-gray-light items-center flex-shrink-0;
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
            @apply py-3 px-4 border-t border-gray-light flex flex-row-reverse items-end flex-shrink-0;
        }

    }

    &_overlay {
        @apply bg-dark w-full h-full opacity-50 absolute;
        z-index: -1;
    }
}

.right {

}
</style>