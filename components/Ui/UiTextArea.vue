<script setup>

defineProps({
    modelValue: {
        type: [String, Number],
        required: true
    },
    label: {
        type: String,
    },
    placeholder: {
        type: String,
        default: ""
    },
    error: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    resizeDisabled: {
        type: Boolean,
        default: false
    }

});
const emit = defineEmits(["update:modelValue"]);
const updateValue = (event) => {
    emit("update:modelValue", event.target.value);
};
</script>

<template>
    <div :class="{'error':error,'disabled':disabled}" class="input-textarea">
        <label v-if="label">{{ label }}</label>
        <textarea
            :class="{'resize-none':resizeDisabled}"
            :disabled="disabled"
            :placeholder="placeholder"
            :value="modelValue"
            @input="updateValue"/>
    </div>

</template>

<style scoped>
</style>