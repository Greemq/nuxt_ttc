<script setup>
const {label} = defineProps({
    label: {type: String},
});
const radio = ref(null);
const emit = defineEmits(["nextStep", 'prevStep']);
const nextStep = () => {
    emit('nextStep');
};
const prevStep = () => {
    emit('prevStep');
};
</script>

<template>
    <div class="assistant_form">
        <div class="assistant_form__title" v-if="label">
            {{ label }}
        </div>
        <div class="assistant_form__body">
            <slot></slot>
        </div>
        <div class="assistant_form__buttons">
            <slot name="buttons"></slot>
        </div>
    </div>
</template>

<style scoped>
.assistant_form {
    @apply w-full bg-white rounded-3xl gap-6  max-w-[680px] p-8 flex flex-col;

    &__title {
        font-size: 28px;
        font-weight: 500;
        line-height: 36px;
    }

    &__body {
        @apply flex flex-col gap-4
    }

    &__buttons {
        @apply flex flex-row-reverse gap-4;
    }
}
</style>