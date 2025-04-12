<template>
    <div class="dropdown" @click.stop>
        <div
            v-if="isVisible"
            class="dropdown_list" @mouseleave="close">
            <div aria-orientation="vertical" class="dropdown_list_elems" role="menu">
                <!--                <button-->
                <!--                    v-for="(option, index) in options"-->
                <!--                    :key="index"-->
                <!--                    class="dropdown_list__button"-->
                <!--                    @click="selectOption(option[optionValue])">-->
                <!--                    {{ option[optionLabel] }}-->
                <!--                </button>-->
                <slot></slot>
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
    optionLabel: {
        type: String,
        default: 'name'
    },
    optionValue: {
        type: String,
        default: 'id'
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
    // if (dropdownRef.value && !dropdownRef.value.contains(event.target) && !isHovering.value) {
        // close();
    // }
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
        @apply absolute rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 overflow-hidden dark:bg-dark-black;
        right: -10px;
        top: 0;

        &_elems {
            :deep(div) {
                @apply py-2 px-4 cursor-pointer hover:dark:bg-dark-bg dark:text-dark-dark;
            }
        }



    }
}

</style>