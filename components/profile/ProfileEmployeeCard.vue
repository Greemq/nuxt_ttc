<script setup>
const infoHidden = ref(false);
const {item} = defineProps({
    item: {type: Object, required: true}
});

const statusClass = computed(() => ({
    1: "active_button",
    2: "inactive_button",
    3: "queue_button"
}[item?.status] || ""));
const statusName = computed(() => ({
    1: "Активен",
    2: "Не активен",
    3: "В ожидании"
}[item?.status] || ""));

const accessString=computed(()=>{
    return employeeInputs.value
        .filter(x => item.access.includes(x.id))
        .map(x => x.label)
        .join(', ');
})

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
</script>

<template>
    <tr :class="{'bottom_not_rounded':infoHidden}" class="main_card">
        <td>
            <svg
                :class="{'rotate-180': infoHidden}"
                class="transition-transform duration-200 cursor-pointer"
                fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"
                @click="infoHidden=!infoHidden">
                <path d="M17.6 9.60001L12 14.4L6.4 9.60001" stroke="#1A1B1B" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="1.5"/>
            </svg>
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td class="!py-1">
            <div class="flex items-center gap-4 ">
                <div :class="statusClass" class=" text-base w-[128px] text-center py-1" style="border-radius: 100px">
                    {{ statusName }}
                </div>
                <div class="flex flex-col">
                    <svg class="cursor-pointer" fill="none" height="24" viewBox="0 0 24 24"
                         width="24" xmlns="http://www.w3.org/2000/svg"
                         @click="$refs.dropdown.open()">
                        <path
                            d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z"
                            fill="#1A1B1B"/>
                        <path
                            d="M12 7.5C12.8284 7.5 13.5 6.82843 13.5 6C13.5 5.17157 12.8284 4.5 12 4.5C11.1716 4.5 10.5 5.17157 10.5 6C10.5 6.82843 11.1716 7.5 12 7.5Z"
                            fill="#1A1B1B"/>
                        <path
                            d="M12 19.5C12.8284 19.5 13.5 18.8284 13.5 18C13.5 17.1716 12.8284 16.5 12 16.5C11.1716 16.5 10.5 17.1716 10.5 18C10.5 18.8284 11.1716 19.5 12 19.5Z"
                            fill="#1A1B1B"/>
                    </svg>
                    <ui-dropdown ref="dropdown" class="w-0 h-0">
                        <div class="py-2 px-4 hover:bg-gray-light cursor-pointer" @click="$emit('editEmployee',item)">Редактировать</div>
                        <div class="py-2 px-4 hover:bg-gray-light cursor-pointer" @click="$refs.deleteModal.open()">
                            Удалить
                        </div>
                        <div class="py-2 px-4 hover:bg-gray-light cursor-pointer flex justify-between">
                            <span>Активен</span>
                            <ui-toggle/>
                        </div>
                    </ui-dropdown>
                </div>
            </div>
        </td>
    </tr>
    <transition name="collapse">
        <tr v-if="infoHidden" :class="{'top_not_rounded':infoHidden}"
            class="external_card transition-height">
            <td colspan="4">
                <div class="w-full p-4 flex flex-col justify-center">
                    <div class="flex py-2 text-base">
                        <div class="w-2/12 text-gray-dark">Номер телефона</div>
                        <div class="w-10/12 text-dark">{{ item.phone }}</div>
                    </div>
                    <div class="flex py-2 text-base">
                        <div class="w-2/12 text-gray-dark">Должность</div>
                        <div class="w-10/12 text-dark">{{ item.job }}</div>
                    </div>
                    <div class="flex py-2 text-base">
                        <div class="w-2/12 text-gray-dark">Доступ к разделам</div>
                        <div class="w-10/12 text-dark">{{ accessString }}</div>
                    </div>
                </div>
            </td>
        </tr>
    </transition>

    <tr class="h-2">
        <td class="h-2"></td>
    </tr>
    <center-modal ref="deleteModal">
        <div class="flex flex-col gap-4">
            <div class="flex gap-3 items-center">
                <svg class="text-error" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.7373 5.6C10.0668 4.66785 10.9558 4 12.0007 4C13.0457 4 13.9347 4.66785 14.2642 5.6"
                          stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                    <path d="M18.8008 7.20001H5.20068" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                    <path
                        d="M17.4675 9.20001L17.0996 14.7193C16.958 16.8432 16.8872 17.9052 16.1952 18.5526C15.5032 19.2 14.4388 19.2 12.3102 19.2H11.6915C9.56286 19.2 8.49854 19.2 7.80653 18.5526C7.11453 17.9052 7.04373 16.8432 6.90213 14.7193L6.53418 9.20001"
                        stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                    <path d="M10.001 11.2L10.401 15.2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                    <path d="M14.0011 11.2L13.6011 15.2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                </svg>
                <span class="font-bold text-xl ">Удаление сотрудника</span>
            </div>
            <div class="pl-9 text-base text-gray-dark">Вы действительно хотите удалить сотрудника?</div>
        </div>
        <div>

        </div>
        <template #buttons>
            <ui-button type="tretiary" label="Отмена" @click="$refs.deleteModal.close()"/>
            <ui-button type="primary" label="Удалить"/>
        </template>

    </center-modal>
</template>

<style scoped>
.active_button {
    @apply bg-primary-light text-primary;
}

.inactive_button {
    @apply bg-[#FDE8D9] text-error
}

.queue_button {
    @apply bg-[#FFFCBA] text-dark
}

.collapse-enter-active,
.collapse-leave-active {
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, padding 0.3s ease-in-out;
    overflow: hidden;
}

.collapse-enter-from,
.collapse-leave-to {
    max-height: 0;
    opacity: 0;
    padding: 0;
}

.collapse-enter-to,
.collapse-leave-from {
    max-height: 400px; /* Подбери нужное значение */
    opacity: 1;
    padding: 1rem;
}

.external_card td {
    @apply border border-gray-light rounded-2xl p-4;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;
}

.external_card[style*="display: none"] td {
    max-height: 0;
    padding: 0;
}

.main_card {
    td {
        @apply border border-gray-light border-x-0 border-y p-4 ;

        &:first-child {
            @apply rounded-l-2xl border-l flex justify-center items-center;
        }

        &:last-child {
            @apply rounded-r-2xl border-r;
        }
    }
}


.external_card {
    td {
        @apply border border-gray-light rounded-2xl p-4;
    }
}

.bottom_not_rounded {
    td {
        @apply !rounded-b-none;
    }
}

.top_not_rounded {
    td {
        @apply rounded-t-none;
    }
}

</style>