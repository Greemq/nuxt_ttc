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
    title: String
});

defineExpose({open, close});
</script>

<template>
    <div v-if="isVisible" class="modal">
        <div class="modal_body">
            <div v-if="title" class="modal_body__title">{{ title }}</div>
            <div class="modal_body__content">
                <slot/>
            </div>
            <div class="modal_body__buttons">
                <slot name="buttons">
                </slot>
            </div>
        </div>
        <div class="modal_overlay" @click="close"></div>
    </div>
</template>

<style scoped>
.modal {
    @apply flex fixed top-0 left-0 w-full h-full justify-center items-center z-50;

    &_body {
        max-width: 400px;
        height: auto;
        @apply w-full bg-white rounded-2xl py-6 pl-6 pr-2;

        &__title {
            @apply font-bold text-xl pb-6 pr-4
        }

        &__content {
            @apply w-full flex flex-col gap-4 overflow-y-scroll pr-4;
            max-height: 600px;
        }
        &__buttons{
            @apply pr-4 pt-6
        }
    }

    &_overlay {
        @apply bg-dark w-full h-full opacity-50 absolute;
        z-index: -1;
    }
}
</style>