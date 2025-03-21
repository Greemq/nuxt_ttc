<script setup>

</script>

<template>
    <div class="main_dialog">
        <div class="main_dialog__title">Последние диалоги в real-time</div>
        <div class="main_dialog__container">
            <div class="main_dialog__container__item">
                <img src="/images/icons/WhatsApp.svg">
                <div class="main_dialog__container__item__texts">
                    <div class="texts__header">+7 777 777 77 77
                        <span>10:00</span></div>
                    <div class="texts__bottom">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse
                        eveniet expedita explicabo impedit libero praesentium provident repellat tempora voluptas?
                    </div>
                </div>
            </div>
            <div class="main_dialog__container__item">
                <img src="/images/icons/Telegram.svg">
                <div class="main_dialog__container__item__texts">
                    <div class="texts__header">+7 777 777 77 77
                        <span>10:00</span></div>
                    <div class="texts__bottom">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse
                        eveniet expedita explicabo impedit libero praesentium provident repellat tempora voluptas?
                    </div>
                </div>
            </div>
            <div class="main_dialog__container__item">
                <img src="/images/icons/Instagram.svg">
                <div class="main_dialog__container__item__texts">
                    <div class="texts__header">+7 777 777 77 77
                        <span>10:00</span></div>
                    <div class="texts__bottom">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse
                        eveniet expedita explicabo impedit libero praesentium provident repellat tempora voluptas?
                    </div>
                </div>
            </div>
            <div class="main_dialog__container__item">
                <img src="/images/icons/WhatsApp.svg">
                <div class="main_dialog__container__item__texts">
                    <div class="texts__header">+7 777 777 77 77
                        <span>10:00</span></div>
                    <div class="texts__bottom">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse
                        eveniet expedita explicabo impedit libero praesentium provident repellat tempora voluptas?
                    </div>
                </div>
            </div>
            <div class="main_dialog__container__item">
                <img src="/images/icons/Instagram.svg">
                <div class="main_dialog__container__item__texts">
                    <div class="texts__header">+7 777 777 77 77
                        <span>10:00</span></div>
                    <div class="texts__bottom">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse
                        eveniet expedita explicabo impedit libero praesentium provident repellat tempora voluptas?
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main_dialog {
    @apply flex flex-col gap-4;

    &__title {
        @apply text-base font-bold;

    }

    &__container {
        @apply flex flex-col;

        &__item {
            @apply flex gap-4 items-center border-t border-gray-light py-4;

            &:first-child {
                @apply border-0;
            }

            img {
                @apply w-8 h-8;
            }

            &__texts {
                @apply flex flex-col w-full;

                .texts__header {
                    @apply font-medium text-base text-dark flex justify-between items-center;

                    span {
                        @apply text-gray text-xs font-normal;
                    }
                }

                .texts__bottom {
                    @apply text-gray-dark text-base truncate max-w-[280px];
                }
            }

        }
    }
}
</style>