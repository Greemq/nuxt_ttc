<script setup>
import AssistantStep2 from "@/components/Assistants/AssistantStep2.vue";
import AssistantStep1 from "@/components/Assistants/AssistantStep1.vue";
import AssistantStep3 from "@/components/Assistants/AssistantStep3.vue";
import AssistantStep4 from "@/components/Assistants/AssistantStep4.vue";

definePageMeta({layout: 'base-layout', sidebarHidden: true});

const route = useRoute();
const step = ref(1);
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
const messages = ref([
    {
        type:1,
        title:'title',
        time:'00:00'
    },
    {
        type:2,
        title:'title2',
        time:'00:01'
    },
    {
        type:1,
        title:'titl3',
        time:'00:02'
    },
    {
        type:2,
        title:'title4',
        time:'00:03'
    },
    {
        type:1,
        title:'title5',
        time:'00:04'
    },
    {
        type:2,
        title:'title6',
        time:'00:05'
    },


])
</script>

<template>
    <div class="flex justify-center pt-10">
        <div class="flex-1 max-w-[calc((100%-700px)/2)]"></div>
        <assistants-assistant-form class="w-full max-w-[700px]" label="Создание ассистента" @prevStep="handleSteps(-1)">
            <AssistantStep1 v-if="step==1" v-model="formStep1"/>
            <AssistantStep2 v-else-if="step==2" v-model="formStep2"/>
            <AssistantStep3 v-else-if="step==3" v-model="formStep3"/>
            <AssistantStep4 :messages v-else-if="step==4" v-model="formStep4" title="Протестируйте вашего ассистента"/>
            <template #buttons>
                <ui-button label="продолжить" type="primary" @click="handleSteps(1)"/>
                <ui-button class="!text-gray-dark dark:!text-gray" label="назад" type="tertiary" @click="handleSteps(-1)"/>
            </template>
        </assistants-assistant-form>
        <div class="flex-1 max-w-[calc((100%-700px)/2)]">
            <assistants-assistant-steps :step="step" :steps="steps"/>
        </div>
    </div>
</template>

<style scoped>

</style>