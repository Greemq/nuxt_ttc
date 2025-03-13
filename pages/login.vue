<script setup>
import { ref} from 'vue';

// const { $refs } = getCurrentInstance();
const email = ref('');
const password = ref('');
const confirm_password = ref('');

// const showRecoveryPasswordModal = () => {
//     if ($refs.register_modal) {
//         $refs.register_modal.close();
//     }
//     nextTick(() => {
//         if ($refs.recovery_modal) {
//             $refs.recovery_modal.open();
//         }
//     });
// };

</script>

<template>
    <div class="flex w-full h-screen min-h-full">
        <div class="login">
            <div class="login_nav">
                <img class="login_nav__logo" src="/images/icons/logo_1.svg">
                <div class="login_nav__locale">
                    <span>Ru</span>
                    <img alt="" src="/images/icons/arrow_down.svg">
                </div>
            </div>
            <div class="login_body">
                <div class="login_body__title">
                    Добро пожаловать
                </div>
                <div class="login_body__form">
                    <div class="google_btn">
                        <img alt="" src="/images/icons/google_logo.svg">
                        <div>Продолжить через Google</div>
                    </div>
                    <div class="or_class">
                        <div class="line"></div>
                        <div>или</div>
                        <div class="line"></div>
                    </div>
                    <ui-input v-model="email" label="Email" placeholder="Введите e-mail"/>
                    <ui-button :disabled="!email" label="Войти" @click="$refs.register_modal.open()"/>
                </div>
<!--                <ui-notification label="Lorem ipsum dolor sit amet, consectetur adip" type="error"/>-->
<!--                <ui-notification label="Lorem ipsum dolor sit amet, consectetur adip" type="success"/>-->
<!--                <ui-notification label="Lorem ipsum dolor sit amet, consectetur adip" type="info"/>-->
            </div>

            <center-modal ref="register_modal" title="Введите пароль">
                <ui-input label="Пароль" label2="Забыли пароль?" placeholder="Введите пароль" type="password"
                          @labelClick="$refs.register_modal.close();$refs.recovery_modal.open()"/>
                <ui-notification label="Введен неверный email или пароль" type="error"/>
                <template #buttons>
                    <div class="flex justify-end gap-4">
                        <ui-button label="Отмена" type="tretiary" @click="$refs.register_modal.close()"/>
                        <ui-button disabled label="Готово"/>
                    </div>
                </template>
            </center-modal>
            <center-modal ref="recovery_modal" title="Восстановление пароля">
                <ui-input type="password" label="Новый пароль" placeholder="Введите новый пароль"/>
                <ui-input type="password" label="Подтвердите пароль" placeholder="Подтвердите пароль"/>
                <template #buttons>
                    <div class="flex justify-end gap-4">
                        <ui-button label="Отмена" type="tretiary" @click="$refs.recovery_modal.close()"/>
                        <ui-button :disabled="confirm_password||password" label="изменить"/>
                    </div>
                </template>
            </center-modal>
        </div>

        <div class="hidden lg:w-1/2 p-4 lg:grid grid-cols-3 gap-x-6 gap-y-4 cards">
            <div class="card w-full h-full card_black">
                <div>123</div>
                <img alt="" class="w-10 h-10" src="/images/icons/vector_1.svg">
            </div>
            <div class="card w-full h-full card_green">
                <div></div>
                <img alt="" class="w-10 h-10" src="/images/icons/vector_2.svg">
            </div>
            <div class="card w-full h-full "></div>
            <div class="card w-full h-full "></div>
            <div class="card w-full h-full card_black">
                <div></div>
                <img alt="" class="w-10 h-10" src="/images/icons/vector_3.svg">
            </div>
            <div class="card w-full h-full card_green">
                <div>Диалоги</div>
                <img alt="" class="w-10 h-10" src="/images/icons/vector_4.svg">
            </div>
            <div class="card w-full h-full card_green">
                <div></div>
                <img alt="" class="w-10 h-10" src="/images/icons/vector_5.svg">
            </div>
            <div class="card w-full h-full col-span-2"></div>
            <div class="card w-full h-full card_black">
                <div>Центр знаний</div>
                <img alt="" class="w-10 h-10" src="/images/icons/vector_6.svg">
            </div>
            <div class="card w-full h-full"></div>
            <div class="card w-full h-full card_green ">
                <div></div>
                <img alt="" class="w-10 h-10" src="/images/icons/vector_7.svg">
            </div>

        </div>
    </div>
</template>

<style scoped>
.card {
    border-radius: 24px;
    background-size: cover;
    @apply flex p-6 text-white flex-col;
    cursor: default;

    &_black {
        @apply bg-dark
    }

    &_green {
        @apply bg-primary;
    }

    div:nth-child(1) {
        @apply flex-grow;
    }

    img {
        align-self: end;
    }
}

::v-deep(.card:nth-child(3)) {
    background-image: url("/images/icons/img_1.png")
}

::v-deep(.card:nth-child(4)) {
    background-image: url("/images/icons/img_2.png")
}

::v-deep(.card:nth-child(8)) {
    background-image: url("/images/icons/img_3.png")
}

::v-deep(.card:nth-child(10)) {
    background-image: url("/images/icons/img_4.png")
}

.login {
    @apply flex flex-col items-center w-full sm:w-full lg:w-1/2 ;

    &_nav {
        @apply w-full flex justify-between items-center  px-6 pt-6;

        &__logo {
            width: 88px;
            height: 47px;
            cursor: pointer;
        }

        &__locale {
            @apply flex items-center gap-2 cursor-pointer;
            font-size: 16px;
            font-weight: 500;

            img {
                @apply w-6 h-6
            }
        }
    }

    &_body {
        margin-top: 140px;
        @apply flex flex-col justify-center items-center gap-8 w-3/4 md:w-1/2 ;

        &__title {
            font-size: 28px;
            font-weight: 500;
            line-height: 36px;
        }

        &__form {
            @apply flex flex-col w-full gap-6;

            .or_class {
                @apply flex gap-4;

                .line {
                    @apply w-full flex-grow border-t my-3.5 border-gray-light
                }
            }
        }

    }
}

.google_btn {
    @apply flex justify-center items-center gap-3 border rounded-lg border-gray-light py-2 w-full cursor-pointer;
}
</style>