<script setup>
defineProps({
    label: {type: String,required: true}
});
</script>

<template>
    <div class="breadcrumb">
        <div class="breadcrumb__label">{{label}}</div>
        <slot></slot>
    </div>
</template>

<style scoped>
.breadcrumb{
    @apply flex w-full justify-between items-center;
    gap:10px;
    &__label{
        @apply flex-grow;
        font-size: 28px;
        font-weight: 500;
        line-height: 36px;
    }
}
</style>