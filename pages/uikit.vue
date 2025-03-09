<script setup lang="ts">

const step = ref(4);
const steps = ref([
    {step: 1, name: 'Общая информация'},
    {step: 2, name: 'Скрипт разговора'},
    {step: 3, name: 'Добавление обучающих документов'},
    {step: 4, name: 'Тестирование ассистента'}
]);

const handleSteps = (val) => {
    const newStep = step.value + val;
    step.value = Math.max(1, Math.min(newStep, steps.value.length));
};

const formStep1 = ref({});
const formStep2 = ref(['name1', 'name2', 'name3'
]);
const formStep3 = ref([])
const formStep4 = ref([])
</script>

<template>
<div class="flex justify-center items-center w-full  gap-4 flex-col">
    <div class="flex gap-2">
        <ui-button label="primary" type="primary"/>
        <ui-button label="primary" type="primary" disabled/>
        <ui-button label="secondary" type="secondary"/>
        <ui-button label="secondary" type="secondary" disabled/>
        <ui-button label="tretiary" type="tretiary"/>
        <ui-button label="tretiary" type="tretiary" disabled/>
    </div>

    <div class="flex gap-2">
        <ui-input label="label" placeholder="placeholder"/>
        <ui-input label="label" placeholder="placeholder" disabled/>
        <ui-input label="label" placeholder="placeholder" type="password"/>
        <ui-input label="label" placeholder="placeholder" type="password" label2="forget?"/>
    </div>
    <div class="flex gap-2">
        <ui-text-area label="label"/>
        <ui-text-area label="label" disabled/>
    </div>
    <div class="flex gap-2">
        <ui-select :options="[{id:1,name:'name1'},{id:2,name:'name2'},{id:3,name:'name3'}]" label="label"/>
    </div>
    <div class="flex gap-2">
        <ui-file-upload/>
    </div>
    <div class="flex gap-2">
        <ui-button @click="$refs.modal.open()" label="show modal"/>
        <ui-button @click="$refs.createModal.open()" label="show modal"/>
        <center-modal ref="modal">
            <ui-select :options="[{id:1,name:'name1'},{id:2,name:'name2'},{id:3,name:'name3'}]" label="label"/>
            <ui-input label="label" placeholder="placeholder"/>
            <ui-input label="label" placeholder="placeholder"/>
            <ui-text-area label="label" placeholder="placeholder"/>
            <template #buttons>
                <ui-button label="label"/>

            </template>
        </center-modal>
        <right-modal ref="createModal" title="label">
            <div class="flex h-full">
                <div class="w-2/3 flex flex-col gap-4">
                    <assistants-assistant-step1 v-model="formStep1" v-if="step==1"/>
                    <assistants-assistant-step2 v-model="formStep2" v-else-if="step==2"/>
                    <assistants-assistant-step3 v-model="formStep3" v-else-if="step==3"/>
                    <AssistantsAssistantStep4 v-else-if="step==4" v-model="formStep4"/>
                </div>
                <div class="w-1/3">
                    <assistants-assistant-steps :steps="steps" :step="step"/>
                </div>
            </div>
            <template #buttons>
                <ui-button label="продолжить" type="primary" @click="handleSteps(1)"/>
                <ui-button class="!text-gray-dark" label="назад" type="tertiary" @click="handleSteps(-1)"/>
            </template>
        </right-modal>
    </div>
</div>
</template>

<style scoped>

</style>