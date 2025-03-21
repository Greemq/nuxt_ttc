<script setup>

</script>

<template>
<div class="main_dialog_time">
    <div class="main_dialog_time__title">Сэкономлено времени</div>
    <ui-select :options="[{id:1,name:'name1'}]"/>
    <div class="main_dialog_time__time">895 мин</div>
    <div class="main_dialog_time__list">
        <div class="main_dialog_time__list__item">
            <span>Whatsapp</span>
            <div>186 мин</div>
        </div>
        <div class="main_dialog_time__list__item">
            <span>Whatsapp</span>
            <div>186 мин</div>
        </div>
        <div class="main_dialog_time__list__item">
            <span>Whatsapp</span>
            <div>186 мин</div>
        </div>
        <div class="main_dialog_time__list__item">
            <span>Whatsapp</span>
            <div>186 мин</div>
        </div><div class="main_dialog_time__list__item">
            <span>Whatsapp</span>
            <div>186 мин</div>
        </div>



    </div>
</div>
</template>

<style scoped>
.main_dialog_time{
    @apply w-full flex flex-col gap-4 h-full p-6;
    &__title{
        @apply font-bold text-base
    }
    &__time{
        @apply text-5xl font-normal align-middle
    }
    &__list{
        @apply flex flex-col;

        &__item{
            @apply py-4 flex justify-between border-t border-gray-light items-center;
            &:first-child {
                @apply border-0;
            }
            span{
                @apply text-gray-dark;
            }
            div{
                @apply text-[#8948B7];
            }
        }
    }
}
</style>