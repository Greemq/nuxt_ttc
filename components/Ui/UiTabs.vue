<script setup>
defineProps({
    tabs: {type: Array, default: []},
    modelValue: {type: Number},
});
const emit = defineEmits(["update:modelValue"]);
const updateModelValue = (val) => {
    emit("update:modelValue", val);
};
</script>

<template>
    <div class="tabs">
        <div v-for="tab in tabs" :class="{'active':modelValue==tab.id}" class="tabs__item"
             @click="updateModelValue(tab.id)">
            <div>{{ tab.name }}</div>
            <div class="tabs__item__line" :class="{'active_line':modelValue==tab.id}"></div>
        </div>
    </div>
</template>

<style scoped>
.tabs {
    @apply flex gap-4 ;

    .active {
        @apply text-dark dark:text-dark-dark;
    }

    .active_line {
        @apply bg-primary rounded-sm;
    }

    &__item {
        @apply text-gray cursor-pointer flex flex-col gap-2 pt-2 text-base justify-center;
        &__line{
            @apply h-1
        }
    }
}
</style>