<script setup>
const infoHidden = ref(false);
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
        <td>Lorem ipsum dolor sit amet.</td>
        <td>comp1</td>
        <td>
            <div class="flex items-center gap-4 ">
                <div class="bg-primary-light text-primary text-base px-8 text-center" style="border-radius: 100px">
                    Активен
                </div>
                <div>
                    <svg class="cursor-pointer" fill="none" height="24" viewBox="0 0 24 24" width="24"
                         xmlns="http://www.w3.org/2000/svg">
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
                        <div class="w-10/12 text-dark">+7 777 777 77 77</div>
                    </div>
                    <div class="flex py-2 text-base">
                        <div class="w-2/12 text-gray-dark">Должность</div>
                        <div class="w-10/12 text-dark">Мендежер по продажам</div>
                    </div>
                    <div class="flex py-2 text-base">
                        <div class="w-2/12 text-gray-dark">Доступ к разделам</div>
                        <div class="w-10/12 text-dark">Главная, ассистенты, диалоги, центр знаний, тест драйв</div>
                    </div>
                </div>
            </td>
        </tr>
    </transition>

    <tr class="h-2">
        <td class="h-2"></td>
    </tr>
</template>

<style scoped>
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