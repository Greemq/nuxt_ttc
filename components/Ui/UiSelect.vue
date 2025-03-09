<template>
    <div ref="dropdownRef" :class="{'dropdown__error': error}" class="dropdown">
        <label v-if="label">{{ label }}</label>
        <button
            :class="{'dropdown_button__disabled': disabled}"
            :disabled="disabled"
            class="dropdown_button"
            @click="toggleDropdown"
        >
            {{ selectedLabel || placeholder }}
            <div class="dropdown_button__icon">
                <svg fill="none" height="8" viewBox="0 0 14 8" width="14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.601 1.59998L7.001 6.39998L1.401 1.59998" stroke="currentColor" stroke-linecap="round"
                          stroke-linejoin="round" stroke-width="1.5"/>
                </svg>
            </div>
        </button>
        <div v-if="isOpen" class="dropdown_menu" @mousedown.stop>
            <div class="dropdown_menu__list">
                <div v-if="false" class="dropdown_menu__item dropdown_menu__item_default">
                    {{ placeholder }}
                </div>
                <div v-for="(item, index) in options" :key="item[optionValue]" class="dropdown_menu__item"
                     @click="selectItem(index)">
                    {{ item[optionLabel] }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {computed, onMounted, onUnmounted, ref} from "vue";

export default {
    props: {
        modelValue: [String, Number],
        label: String,
        options: {type: Array, required: true},
        optionValue: {type: String, default: "id"},
        optionLabel: {type: String, default: "name"},
        placeholder: {type: String, default: "Выберите..."},
        error: Boolean,
        disabled: Boolean,
        defaultDisabled: {type: Boolean, default: true},
        limit: {type: Number, default: 5}
    },
    emits: ["update:modelValue"],
    setup(props, {emit}) {
        const isOpen = ref(false);
        const dropdownRef = ref(null);

        const selectedLabel = computed(() => {
            const foundOption = props.options.find(opt => opt[props.optionValue] === props.modelValue);
            return foundOption ? foundOption[props.optionLabel] : "";
        });

        const toggleDropdown = () => {
            if (!props.disabled) {
                isOpen.value = !isOpen.value;
            }
        };

        const selectItem = (index) => {
            const item = props.options[index];
            emit("update:modelValue", item[props.optionValue]);
            isOpen.value = false;
        };

        const closeDropdown = (e) => {
            if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
                isOpen.value = false;
            }
        };

        onMounted(() => document.addEventListener("click", closeDropdown));
        onUnmounted(() => document.removeEventListener("click", closeDropdown));

        return {isOpen, selectedLabel, toggleDropdown, selectItem, dropdownRef};
    }
};
</script>