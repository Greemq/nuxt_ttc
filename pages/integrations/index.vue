<script setup>

definePageMeta({
    layout: "base-layout",
});
</script>

<template>
    <div class="integrations">
        <div class="integrations_item">
            <div class="integrations_item__label">Мессенджеры</div>
            <div class="integrations_item__cards">
                <div class="integrations_item__cards__card">
                    <div class="integrations_item__cards__card_1">
                        <img alt="" src="/images/icons/Telegram.svg">
                        <div class="card_1_texts">
                            <div class="card_1_texts_1">Telegram</div>
                            <div class="card_1_texts_2">Интегрируйте ассистента с Telegram</div>
                        </div>
                    </div>
                    <div class="integrations_item__cards__card_divider"></div>
                    <div class="integrations_item__cards__card_buttons">
                        <div class="left_button" @click="$refs.rightModal.open()">Подключен</div>
                        <div class="right_button">
                            <span>Перейти</span>
                            <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.6 6.4L14.4 12L9.6 17.6" stroke="currentColor" stroke-linecap="round"
                                      stroke-linejoin="round" stroke-width="1.5"/>
                            </svg>

                        </div>
                    </div>

                </div>
                <div class="integrations_item__cards__card">
                    <div class="integrations_item__cards__card_1">
                        <img alt="" src="/images/icons/Instagram.svg">
                        <div class="card_1_texts">
                            <div class="card_1_texts_1">Instagram</div>
                            <div class="card_1_texts_2">Интегрируйте ассистента с Instagram</div>
                        </div>
                    </div>
                    <div class="integrations_item__cards__card_divider"></div>
                    <div class="integrations_item__cards__card_buttons">
                        <div class="left_button" @click="$refs.rightModal.open()">Подключен</div>
                        <div class="right_button">
                            <span>Перейти</span>
                            <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.6 6.4L14.4 12L9.6 17.6" stroke="currentColor" stroke-linecap="round"
                                      stroke-linejoin="round" stroke-width="1.5"/>
                            </svg>

                        </div>
                    </div>

                </div>
                <div class="integrations_item__cards__card">
                    <div class="integrations_item__cards__card_1">
                        <img alt="" src="/images/icons/WhatsApp.svg">
                        <div class="card_1_texts">
                            <div class="card_1_texts_1">WhatsApp</div>
                            <div class="card_1_texts_2">Интегрируйте ассистента с WhatsApp</div>
                        </div>
                    </div>
                    <div class="integrations_item__cards__card_divider"></div>
                    <div class="integrations_item__cards__card_buttons">
                        <div class="left_button" @click="$refs.rightModal.open()">Подключен</div>
                        <div class="right_button">
                            <span>Перейти</span>
                            <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.6 6.4L14.4 12L9.6 17.6" stroke="currentColor" stroke-linecap="round"
                                      stroke-linejoin="round" stroke-width="1.5"/>
                            </svg>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="integrations_item">
            <div class="integrations_item__label">CRM-системы</div>
            <div class="integrations_item__cards">
                <div class="integrations_item__cards__card">
                    <div class="integrations_item__cards__card_1">
                        <img alt="" src="/images/icons/WhatsApp.svg">
                        <div class="card_1_texts">
                            <div class="card_1_texts_1">Wazzup</div>
                            <div class="card_1_texts_2">Интегрируйте ассистента с Wazzup</div>
                        </div>
                    </div>
                    <div class="integrations_item__cards__card_divider"></div>
                    <div class="integrations_item__cards__card_buttons">
                        <div class="left_button left_button_stopped" @click="$refs.rightModal.open()">Приостановлен</div>
                        <div class="right_button">
                            <span>Перейти</span>
                            <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.6 6.4L14.4 12L9.6 17.6" stroke="currentColor" stroke-linecap="round"
                                      stroke-linejoin="round" stroke-width="1.5"/>
                            </svg>

                        </div>
                    </div>

                </div>
                <div class="integrations_item__cards__card">
                    <div class="integrations_item__cards__card_1">
                        <img alt="" src="/images/icons/Instagram.svg">
                        <div class="card_1_texts">
                            <div class="card_1_texts_1">amoCRM</div>
                            <div class="card_1_texts_2">Интегрируйте ассистента с amoCRM</div>
                        </div>
                    </div>
                    <div class="integrations_item__cards__card_divider"></div>
                    <div class="integrations_item__cards__card_buttons">
                        <div class="progress_button">В процессе разработки</div>
                    </div>

                </div>
                <div class="integrations_item__cards__card">
                    <div class="integrations_item__cards__card_1">
                        <img alt="" src="/images/icons/WhatsApp.svg">
                        <div class="card_1_texts">
                            <div class="card_1_texts_1">WhatsApp</div>
                            <div class="card_1_texts_2">Интегрируйте ассистента с WhatsApp</div>
                        </div>
                    </div>
                    <div class="integrations_item__cards__card_divider"></div>
                    <div class="integrations_item__cards__card_buttons">
                        <div class="left_button" @click="$refs.rightModal.open()">Подключен</div>
                        <div class="right_button">
                            <span>Перейти</span>
                            <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.6 6.4L14.4 12L9.6 17.6" stroke="currentColor" stroke-linecap="round"
                                      stroke-linejoin="round" stroke-width="1.5"/>
                            </svg>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <right-modal ref="rightModal">
        <template #title>
            <div class="modal_title">
                <img src="/images/icons/Telegram.svg">
                <div class="modal_title__texts">
                    <div class="modal_title__texts_1">Telegram</div>
                    <div class="modal_title__texts_2">Интегрируйте ассистента с Telegram</div>
                </div>
            </div>
        </template>
        <div class="flex flex-col gap-6">
            <div class="text-base leading-6">Для подключения ассистента к Telegram боту, вам необходимо получить API токен для вашего бота в
                телеграме
            </div>
            <div class="flex flex-col gap-2">
                <div class="font-bold text-base">Как получить API токен в telegram?</div>

                <ol class="space-y-1 list-decimal list-inside pl-6 text-base leading-6">
                    <li class=" -indent-5">Откройте Telegram и найдите BotFather</li>
                    <li class=" -indent-5">Отправьте команду /newbot и следуйте инструкциям для создания нового бота</li>
                    <li class=" -indent-5">После создания бота, BotFather даст вам уникальный API токен</li>
                    <li class=" -indent-5">Сохраните этот токен в безопасном месте - он нужен для управления вашим ботом</li>
                    <li class=" -indent-5">Вставьте скопированный API токен</li>
                </ol>

            </div>
            <ui-input label="Api токен" placeholder="Введите API токен"/>
        </div>
        <template #buttons>
            <ui-button disabled label="Подключить" type="primary"/>
        </template>
    </right-modal>
</template>

<style scoped>
.modal_title {
    @apply flex gap-4;

    img {
        @apply w-12 h-12;
    }

    &__texts {
        @apply flex flex-col gap-1 justify-center;

        &_1 {
            @apply text-base font-bold;
        }

        &_2 {
            @apply text-sm font-normal text-gray-dark;
        }
    }
}

.integrations {
    @apply flex flex-col gap-6;

    &_item {
        @apply bg-white rounded-3xl p-6 gap-4 flex flex-col;

        &__label {
            @apply text-xl font-bold;
        }

        &__cards {
            @apply grid grid-cols-3 gap-6;

            &__card {
                @apply rounded-2xl border border-gray-light p-4 flex flex-col gap-4;

                &_1 {
                    @apply flex gap-4;

                    img {
                        @apply w-12 h-12
                    }

                    .card_1_texts {
                        @apply flex flex-col gap-1 justify-center;

                        &_1 {
                            @apply text-base font-bold;
                        }

                        &_2 {
                            @apply text-sm text-gray-dark;
                        }

                    }

                }

                &_divider {
                    @apply h-0 border border-gray-light w-full
                }

                &_buttons {
                    @apply flex w-full justify-between;

                    .left_button {
                        @apply rounded-[100px] p-2 text-primary bg-primary-light cursor-pointer text-sm;
                        &_stopped{
                            @apply bg-[#FFFCBA] text-dark
                        }
                    }


                    .right_button {
                        @apply flex gap-2 text-primary justify-center py-[6px] cursor-pointer text-base ml-auto;

                        svg {
                            @apply text-primary
                        }
                    }
                    .progress_button{
                        @apply rounded-[100px] p-2 text-info bg-[#E6EDFF] cursor-pointer text-sm ml-auto;
                    }
                }
            }
        }
    }
}
</style>