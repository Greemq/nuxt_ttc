<script setup>

defineProps({
    error: {
        default: false,

    },
    placeholder: {},
    label: {},
    disabled: {
        default: false
    },
    modelValue: String
});
defineEmits(['update:modelValue']);
</script>

<template>
    <div class="w-full mt-5">
        <label class="text_area_label " for="message">Your message</label>
        <textarea id="message" :disabled="disabled"
                  :placeholder="placeholder"
                  :value="modelValue"
                  class="text_area w-full resize-none"
                  rows="2"
                  @input="$emit('update:modelValue',$event.target.value)"></textarea>
    </div>

</template>

<style scoped>
.text_area {
    padding: 16px 20px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid rgba(62, 62, 62, 0.20);
    margin-top: 14px;

}

.text_area_label {
    color: rgba(0, 0, 0, 0.50);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;

}
</style>