<script setup>
import Breadcrumbs from "@/components/breadcrumbs.vue";
import AssistantListCard from "@/components/Assistants/AssistantListCard.vue";

definePageMeta({
    layout: "base-layout",
});


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
const formStep3 = ref([]);
const formStep4 = ref([]);
const messages = ref([
    {
        type: 1,
        title: 'title',
        time: '00:00'
    },
    {
        type: 2,
        title: 'title2',
        time: '00:01'
    },
    {
        type: 1,
        title: 'titl3',
        time: '00:02'
    },
    {
        type: 2,
        title: 'title4',
        time: '00:03'
    },
    {
        type: 1,
        title: 'title5',
        time: '00:04'
    },
    {
        type: 2,
        title: 'title6',
        time: '00:05'
    },


]);
const {$toast} = useNuxtApp();

onMounted(() => {
    $toast.success("успешное уведомление");
    $toast.error("уведомление ошибки");
});
</script>

<template>
    <Breadcrumbs label="label">
        <ui-button icon label="создать ассистента" type="primary" @click="$refs.createModal.open()"/>
    </Breadcrumbs>


    <div class="assistants">
        <div class="assistants__item assistants__item_title">
            <div class="assistants__item_1"></div>
            <div class="assistants__item_2">Наименование</div>
            <div class="assistants__item_3">Организация</div>
            <div class="assistants__item_4">Роль</div>
            <div class="assistants__item_5">Статус</div>
            <div class="assistants__item_6"></div>
        </div>
        <div class="flex gap-4 flex-col">
            <AssistantListCard v-for="item in 10" :name="item"/>
        </div>
    </div>
    <right-modal ref="createModal" size="w-1/2" title="label">
        <div class="flex h-full">
            <div class="w-2/3 flex flex-col gap-4">
                <assistants-assistant-step1 v-if="step==1" v-model="formStep1"/>
                <assistants-assistant-step2 v-else-if="step==2" v-model="formStep2"/>
                <assistants-assistant-step3 v-else-if="step==3" v-model="formStep3"/>
                <AssistantsAssistantStep4 v-else-if="step==4" v-model="formStep4" :messages="messages"
                                          title="Протестируйте вашего ассистента"/>
            </div>
            <div class="w-1/3">
                <assistants-assistant-steps :step="step" :steps="steps"/>
            </div>
        </div>
        <template #buttons>
            <ui-button label="продолжить" type="primary" @click="handleSteps(1)"/>
            <ui-button class="!text-gray-dark" label="назад" type="tertiary" @click="handleSteps(-1)"/>
        </template>
    </right-modal>
</template>

<style scoped>
.assistants {
    @apply flex flex-col rounded-3xl bg-white p-6 dark:bg-dark-white;

    &__item {
        @apply flex text-base;

        &_title {
            @apply text-gray-dark dark:text-gray-dark
        }

        &_1, &_6 {
            @apply w-[56px];
        }

        &_2 {
            @apply w-[20%]
        }

        &_3 {
            @apply w-[24%];
        }

        &_4 {
            @apply w-[42%];
        }

        &_5 {
            @apply w-[13%]
        }

        &_1, &_2, &_3, &_4, &_5, &_6 {
            @apply p-4;
        }

    }
}
</style>
