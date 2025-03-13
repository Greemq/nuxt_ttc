<script setup>
import {ref} from 'vue';

const isChecked = ref(false);

const handleCheckboxChange = () => {
    isChecked.value = !isChecked.value;
};
defineProps({
    label: {type: String}
});
</script>

<template>
    <label class="toggle">
        <div class="toggle_text" v-if="label">{{ label }}</div>
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
    &_text{
        @apply text-dark
    }
    &_body {
        @apply relative flex justify-center items-center;

        &__bg {
            @apply block h-4 rounded-full bg-gray;
            width: 28px;
        }

        &__dot {
            @apply absolute left-0.5 h-3 w-3 rounded-full bg-white transition;
        }
    }
}
</style>
