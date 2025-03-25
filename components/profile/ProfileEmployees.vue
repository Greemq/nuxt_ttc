<script setup>

import ProfileEmployeeCard from "~/components/profile/ProfileEmployeeCard.vue";

const employeeInputs = computed(() => [
    {
        label: 'Главная',
        id: 1
    },
    {
        label: 'Ассистенты',
        id: 2
    },
    {
        label: 'Диалоги',
        id: 3
    },
    {
        label: 'Центр знаний',
        id: 4
    },
    {
        label: 'Тест драйв',
        id: 5
    },
    {
        label: 'Интеграции',
        id: 6
    },
    {
        label: 'Реквизиты',
        id: 7
    },


]);
const selectedValues = ref([]);
const tabs = ref([
    {
        id: 1,
        name: 'Пригласить по e-mail'
    },
    {
        id: 2,
        name: 'Пригласить по ссылке'
    },

]);
const activeTab = ref(1);
const getRandomStatus = () => Math.floor(Math.random() * 3) + 1;
const getRandomPhone = () => `+7 ${Math.floor(100 + Math.random() * 900)} ${Math.floor(100 + Math.random() * 900)} ${Math.floor(10 + Math.random() * 90)} ${Math.floor(10 + Math.random() * 90)}`;
const getRandomName = () => ["Иван", "Петр", "Алексей", "Мария", "Екатерина", "Дмитрий", "Анна", "Ольга", "Сергей", "Николай"][Math.floor(Math.random() * 10)];
const getRandomCompany = () => ["Google", "Apple", "Microsoft", "Amazon", "Tesla", "Facebook", "IBM", "Yandex", "VK", "Samsung"][Math.floor(Math.random() * 10)];
const getRandomJob = () => ["Менеджер", "Разработчик", "Аналитик", "Тестировщик", "Дизайнер", "Маркетолог", "Продакт-менеджер", "Администратор", "HR", "Директор"][Math.floor(Math.random() * 10)];
const getRandomAccess = () => {
    const sections = [1, 2, 3, 4, 5, 6, 7];
    const shuffled = sections.sort(() => Math.random() - 0.5);
    const count = Math.floor(Math.random() * sections.length) + 1;
    return shuffled.slice(0, count);
};

const employees = Array.from({length: 10}, (_, i) => ({
    id: i + 1,
    name: getRandomName(),
    email: getRandomCompany(),
    phone: getRandomPhone(),
    job: getRandomJob(),
    access: getRandomAccess(),
    status: getRandomStatus(),
}));

const showEditModal = (item) => {
    Object.assign(form, item);
    addEmployee?.value.open();
};

const addEmployee = ref(null);
const form = reactive({
    id: null,
    name: null,
    email: null,
    phone: null,
    job: null,
    access: [],
    status: null
});
const dropFormModal = () => {
    activeTab.value = 1;
    Object.assign(form, {
        id: null,
        name: null,
        email: null,
        phone: null,
        job: null,
        access: [],
        status: null
    });
};
</script>

<template>
    <div class="flex">
        <ui-button icon label="Пригласить" @click="$refs.addEmployee.open()"/>
    </div>
    <RightModal ref="addEmployee" title="Приглашение сотрудника" @close="dropFormModal()">
        <ui-tabs v-if="!form.id" v-model="activeTab" :tabs="tabs" class="pb-6"/>
        <div v-if="activeTab==1" class="flex flex-col gap-4">
            <ui-input v-model="form.email" label="Email" placeholder="email"/>
            <ui-input v-model="form.job" label="должность" placeholder="должность"/>
            <ui-input v-model="form.phone" label="Телефон" placeholder="+7 777 777 77 77"/>
            <div>Доступ к разделам</div>
            <ui-checkbox v-for="item in employeeInputs" v-model="form.access" :item="item" option-label="label"/>
        </div>
        <div v-else-if="activeTab==2" class="flex flex-col gap-4">
            <ui-input label="" placeholder="link.kz"/>
            <div class="flex gap-2 cursor-pointer text-primary">
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.4371 13.6C9.23233 12.3906 9.34084 10.3207 10.6795 8.97686L14.5576 5.0837C15.8962 3.73986 17.9581 3.63092 19.1629 4.84037C20.3676 6.04982 20.2591 8.11965 18.9205 9.46348L16.9814 11.4101"
                        stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                    <path
                        d="M13.5629 10.4C14.7677 11.6095 14.6591 13.6793 13.3205 15.0231L11.3814 16.9697L9.44239 18.9163C8.10375 20.2602 6.0419 20.3691 4.83712 19.1597C3.63235 17.9502 3.74087 15.8803 5.07951 14.5365L7.01858 12.5899"
                        stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                </svg>
                <span>Копировать ссылку</span>
            </div>
        </div>
        <template #buttons>
            <ui-button disabled label="Пригласить" type="primary"/>
        </template>
    </RightModal>


    <div class="profile_employee">
        <table class="table-fixed">
            <tr>
                <th class="w-12"></th>
                <th class="w-auto">Имя и Фамилия</th>
                <th class="w-auto">Почта</th>
                <th class="px-1 w-[10%]">Статус</th>
            </tr>
            <ProfileEmployeeCard v-for="item in employees" :item="item" @editEmployee="showEditModal"/>
        </table>
    </div>
</template>

<style scoped>
.profile_employee {
    @apply bg-white rounded-3xl p-6 flex flex-col gap-6;

    table {
        @apply w-full table-auto border-separate;
        /*
        border-collapse: separate;

         */
        border-spacing: 0;

        tr {
            th {
                @apply text-left p-4;
            }

        }
    }


}
</style>