<script setup>
const {type = 'primary', disabled = false, label, icon = false} = defineProps({
    type: {type: String, default: 'primary'},
    disabled: {type: Boolean, default: false},
    label: {type: String, required: true},
    icon: {type: Boolean, default: false}
});
const emit = defineEmits(['click']);
const handleClick = () => {
    if (!disabled)
        emit('click');
};
</script>

<template>
    <div
        :class="{'primary':type=='primary','secondary':type=='secondary','tretiary':type=='tretiary','disabled':disabled}"
        class="btn"
        @click="handleClick()">
        <svg v-if="icon" class="fill-current stroke-current" fill="currentColor" height="14" viewBox="0 0 14 14"
             width="14" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.00098 7H7.00098M7.00098 7H13.001M7.00098 7V1M7.00098 7V13" stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="1.5"/>
        </svg>

        {{ label }}
    </div>
</template>

<style scoped>

</style>