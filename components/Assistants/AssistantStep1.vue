<script setup>

const inputs = ref([
    {type: 'input', label: 'Название компании', name: 'companyName'},
    {type: 'input', label: 'Имя ассистента', name: 'assistantName'},
    {
        type: 'select',
        label: 'Стиль общения',
        name: 'communicationStyle',
        options: [{id: 1, name: 'name1'}, {id: 2, name: 'name2'}]
    },
    {
        type: 'select',
        label: 'Не знаю ответа',
        name: 'dialogSteps',
        options: [{id: 1, name: 'name1'}, {id: 2, name: 'name2'}]
    },
    {type: 'input', label: 'Сайт', name: 'companySite'},
    {
        type: 'radio',
        label: 'Инструкции',
        name: 'extraInstructions',
        options: [{id: 1, name: 'name1'}, {id: 2, name: 'name2'}, {id: 3, name: 'name3'}]
    }
]);

defineProps({
    modelValue: {type: Object}
});
</script>

<template>
    <div v-for="(item, index) in inputs" :key="index">
        <ui-input v-if="item.type === 'input'" v-model="modelValue[item.name]" :label="item.label"
                  :placeholder="item.label"/>
        <ui-select v-else-if="item.type === 'select'" v-model="modelValue[item.name]" :label="item.label"
                   :options="item.options" :placeholder="item.label"/>
        <ui-radio v-else-if="item.type === 'radio'" v-model="modelValue[item.name]" :label="item.label"
                  :options="item.options"/>
    </div>
</template>

<style scoped>

</style>