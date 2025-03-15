<template>
    <div class="dropdown" @click.stop>
        <div
            v-if="isVisible"
            class="dropdown_list" @mouseleave="close">
            <div aria-orientation="vertical" class="py-1" role="menu">
                <button
                    v-for="(option, index) in options"
                    :key="index"
                    class="dropdown_list__button"
                    @click="selectOption(option[optionValue])">
                    {{ option[optionLabel] }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {defineProps, ref} from 'vue';

defineProps({
    options: {
        type: Array,
        required: true
    },
    optionLabel:{
        type:String,
        default:'name'
    },
    optionValue:{
        type:String,
        default:'id'
    }

});

const isVisible = ref(false);

const open = () => {
    isVisible.value = true;
};

const close = () => {
    isVisible.value = false;
};
defineExpose({open, close});

const emit = defineEmits(['select']);

const selectOption = (option) => {
    emit('select', option);
};
const handleClickOutside = (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target) && !isHovering.value) {
        close();
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.dropdown {
    @apply relative inline-block text-left;

    &_list {
        @apply absolute w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10;
        right: 12px;
        top: -10px;

        &__button {
            @apply w-full text-left px-4 py-2 hover:bg-gray-light;
        }
    }
}

</style>