<script setup>
const props = defineProps({
    modelValue: {type: Array, required: true},
    item: {type: Object, required: true},
    label: {type: String,},
    error: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    optionValue: {type: String, default: "id"},
    optionLabel: {type: String, default: "name"},
    customColor: {type: String, default: null}
});
const emit = defineEmits(['update:modelValue']);
const toggleCheckbox = () => {
    if (props.disabled) return;

    const newValue = [...props.modelValue];
    const index = newValue.findIndex(el => el === props.item[props.optionValue]);

    if (index > -1) {
        newValue.splice(index, 1);
    } else {
        newValue.push(props.item[props.optionValue]);
    }
    emit("update:modelValue", newValue);
};

const checkboxClasses  = computed(() => {
    let color = props.customColor;
    // if (!modelValue.includes(props.item[props.optionValue])) {
    //     return "";
    // }
    if (!color) {
        return 'border-gray focus:border-primary hover:border-primary !bg-primary';
    }
    return [
        `border-[${color}]`,
        `hover:border-[${color}]`,
        `focus:border-[${color}]`,
        `!bg-[${color}]`
    ].join(' ');
});
const checkboxStyles = computed(() => {
    if (!props.modelValue.includes(props.item[props.optionValue])) {
        return {
            // borderColor:'#ACACAC',
            // backgroundColor:
        };
    }

    return {
        borderColor: props.customColor || "var(--tw-border-opacity, #50B748)",
        backgroundColor: props.customColor || "#50B748",
    };
});
</script>

<template>
    <div :class="{'error':error,'disabled':disabled}" class="checkbox-form">
        <input :id="'checkbox_form_item'+item[optionValue]" :checked="modelValue.includes(item[optionValue])"
               type="checkbox"
               @change="toggleCheckbox">
        <label :for="'checkbox_form_item'+item[optionValue]" class="checkbox-form__item">
            <div class="checkbox-icon " :style="checkboxStyles">
                <span v-if="modelValue.includes(item[optionValue])"
                      class="absolute flex items-center justify-center">
                    <svg fill="none" height="10" viewBox="0 0 13 10" width="13" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.9794 0.31882C11.1868 0.112066 11.4627 -0.0022356 11.749 3.31386e-05C12.0353 0.00230188 12.3096 0.120964 12.514 0.33098C12.7183 0.540997 12.8368 0.825941 12.8443 1.12569C12.8519 1.42543 12.748 1.71653 12.5545 1.93756L6.68101 9.63046C6.58001 9.74438 6.45812 9.83581 6.32261 9.89927C6.1871 9.96273 6.04077 9.99692 5.89235 9.9998C5.74394 10.0027 5.5965 9.97418 5.45884 9.91602C5.32118 9.85786 5.19614 9.77122 5.09119 9.66129L1.19612 5.58205C1.08765 5.4762 1.00065 5.34855 0.940304 5.20672C0.879961 5.06489 0.847514 4.91178 0.844898 4.75653C0.842283 4.60128 0.869553 4.44707 0.92508 4.30309C0.980608 4.15912 1.06326 4.02834 1.16809 3.91854C1.27293 3.80875 1.39781 3.72219 1.53528 3.66404C1.67276 3.60588 1.82001 3.57732 1.96825 3.58006C2.11649 3.5828 2.26268 3.61678 2.39811 3.67998C2.53354 3.74318 2.65543 3.83429 2.7565 3.94789L5.83899 7.17459L10.9514 0.352737C10.9607 0.340868 10.9705 0.329544 10.9809 0.31882H10.9794Z"
                            fill="white"/>
                    </svg>
                </span>
            </div>
            <span>{{ item[optionLabel] }}</span>
        </label>
    </div>
</template>

<style scoped>
.checkbox-form {
    input {
        @apply hidden;
    }

    &__item {
        @apply flex items-center gap-3 text-dark font-normal text-base dark:text-dark-dark;

        .checkbox-icon {
            @apply border-gray focus:border-primary hover:border-primary relative rounded min-w-5 min-h-5 w-5 h-5 border focus:ring-0 focus:outline-0 text-white bg-white cursor-pointer flex justify-center items-center dark:bg-dark-bg;

        }
    }
}
</style>