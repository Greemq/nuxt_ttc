<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  label: { type: String, default: '' }
})

const emit = defineEmits(['update:modelValue'])

const isChecked = ref(props.modelValue)

const handleCheckboxChange = () => {
  isChecked.value = !isChecked.value
  emit('update:modelValue', isChecked.value)
}

watch(() => props.modelValue, (val) => {
  isChecked.value = val
})
</script>

<template>
    <label class="toggle">
        <div v-if="label" class="toggle_text">{{ label }}</div>
        <div class="toggle_body">

            <input class="sr-only" type="checkbox" @change="handleCheckboxChange"/>
            <div :class="{' !bg-primary':isChecked}" class="toggle_body__bg"></div>
            <div
                :class="{ 'translate-x-full': isChecked }"
                class="toggle_body__dot "
            ></div>
        </div>
    </label>
</template>

<style scoped>
.toggle {
    @apply flex cursor-pointer select-none items-center gap-3;

    &_text {
        @apply text-dark dark:text-white
    }

    &_body {
        @apply relative flex justify-center items-center;

        &__bg {
            @apply block h-4 rounded-full bg-gray;
            width: 28px;
        }

        &__dot {
            @apply absolute left-0.5 !h-3 !w-3 rounded-full bg-white transition;
        }
    }
}
</style>
