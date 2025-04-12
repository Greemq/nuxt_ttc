<script setup>
import {useI18n} from 'vue-i18n';

const {t} = useI18n();
const inputs1 = computed(() => [
    {
        name: 'firstName',
        label: t('profile.firstName'),
        placeholder: t('profile.firstName'),
    },
    {
        name: 'lastName',
        label: t('profile.lastName'),
        placeholder: t('profile.lastName'),
    },
    {
        name: 'phoneNumber',
        label: t('profile.phoneNumber'),
        placeholder: t('profile.phoneNumber'),
    },
    {
        name: 'email',
        label: t('profile.email'),
        placeholder: t('profile.email'),
    },
    {
        name: 'company',
        label: t('profile.company'),
        placeholder: t('profile.company'),
    },
    {
        name: 'job',
        label: t('profile.job'),
        placeholder: t('profile.job'),
    },
]);
const inputs2 = computed(() => [
    {
        name: 'bin',
        label: t('profile.bin'),
        placeholder: t('profile.bin'),
    },
    {
        name: 'checking_account',
        label: t('profile.checking_account'),
        placeholder: t('profile.checking_account'),
    },
    {
        name: 'bik',
        label: t('profile.bik'),
        placeholder: t('profile.bik'),
    },
    {
        name: 'registered_address',
        label: t('profile.registered_address'),
        placeholder: t('profile.registered_address'),
    },


]);
</script>

<template>
    <div class="profile_account">
        <div class="profile_account_header">
            <div class="profile_account_header__label">
                Фото
            </div>
            <div class="profile_account_header__avatar">
                <span>A</span>
                <ui-button class="py-1 px-2"  type="secondary" label="Изменить" @click="$refs.centerModal.open()"/>
            </div>
        </div>
        <div class="profile_account_info">
            <div class="profile_account_info__label first-letter:uppercase">Общая информация</div>
            <template v-for="input in inputs1">
                <ui-input :label="input.label" :placeholder="input.placeholder"/>
            </template>
            <div class="flex">
                <ui-button disabled label="Изменить" type="primary"/>
            </div>
        </div>
        <div class="profile_account_info">
            <div class="profile_account_info__label first-letter:uppercase">{{ t('profile.account_details') }}</div>
            <template v-for="input in inputs2">
                <ui-input :label="input.label" :placeholder="input.placeholder"/>
            </template>
            <div class="flex">
                <ui-button disabled label="Изменить" type="primary"/>
            </div>
        </div>
    </div>
    <center-modal ref="centerModal" title="Изменение пароля">
        <ui-input label="Текущий пароль" type="password" label2="Забыли пароль?" placeholder="Введите текущий пароль"/>
        <ui-input label="Новый пароль" type="password" placeholder="Введите новый пароль"/>
        <ui-input label="Подтвердите новый пароль" type="password" placeholder="Подтвердите новый пароль"/>
        <template #buttons>
            <ui-button type="tretiary" label="Отмена"/>
            <ui-button type="primary" disabled label="Изменить"/>

        </template>
    </center-modal>
</template>

<style scoped>
.profile_account {
    @apply bg-white rounded-3xl p-6 flex flex-col gap-6 grow dark:bg-dark-white;
    &_header{
        @apply flex flex-col gap-2;
        &__label{
            @apply font-bold text-base dark:text-dark-dark;
        }
        &__avatar{
            @apply flex gap-4 items-center;
            span{
                @apply flex items-center justify-center w-14 h-14 rounded-full bg-primary-light text-primary text-center text-2xl dark:bg-dark-bg;
            }
        }

    }
    &_info {
        @apply grid grid-cols-2 gap-4 border border-gray-light rounded-2xl p-4 dark:border-dark-gray-light;

        &__label {
            @apply col-span-2 font-bold text-base dark:text-dark-dark;
        }
    }
}

</style>