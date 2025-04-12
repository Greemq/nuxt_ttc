<script setup>
const {optionLabel, optionValue, options, label, modelValue, disabled, error} = defineProps({
    optionLabel: {type: String, default: 'name'},
    optionValue: {type: String, default: 'id'},
    options: {type: Array},
    label: {type: String, default: null},
    modelValue: {type: String},
    disabled: {type: Boolean, default: false},
    error: {type: Boolean, default: false}
});
const emit = defineEmits(['update:modelValue']);

const updateValue = (value) => {
    emit('update:modelValue', value);
};
</script>

<template>
    <div :class="{'disabled':disabled}" class="radio-form">
        <label v-if="label" for="">{{ label }}</label>
        <div v-for="(option,index) in options" :key="'option_'+index+'_'+option[optionLabel]" class="radio-form__radio">
            <input :checked="modelValue === option[optionValue]"
                   :value="option[optionValue]"
                   type="radio"
                   @change="updateValue(option[optionValue])">
            <div :class="{'radio-form__radio__icon__active':option[optionValue]==modelValue}"
                 class="radio-form__radio__icon"
                 @click="updateValue(option[optionValue])">
                <div></div>
            </div>
            <div class="radio-form__radio__text">{{ option[optionLabel] }}</div>
        </div>

    </div>
</template>

<style scoped>
.radio-form {
    @apply flex flex-col gap-4 ;

    label {
        @apply dark:text-dark-dark
    }

    &__radio {
        @apply flex items-center gap-3;

        &__text {
            @apply dark:text-dark-dark;
        }

        input {
            @apply hidden;
        }

        &__icon {
            @apply w-5 h-5 rounded-full border-gray border-2 cursor-pointer shadow-md flex items-center justify-center;

            &__active {
                @apply border border-gray-light;

                div {
                    @apply w-full h-full border-primary rounded-full;
                    border-width: 3px;
                }
            }

        }
    }


}

.disabled {
    .radio-form__radio__icon {

        @apply border-gray-light;

        div {
            @apply w-full h-full border-gray rounded-full;
            border-width: 3px;
        }
    }
}


</style>