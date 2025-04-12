<script setup>
const val1 = ref(80);
</script>

<template>
    <div class="main_dialog_stats">
        <div class="main_dialog_stats_item">
            <div class="main_dialog_stats_item_head">
                <div class="main_dialog_stats_item_head__title">Количество достигнутых продаж</div>
                <ui-select :options="[{id:1,name:'name'}]"/>
            </div>
            <div class="main_dialog_stats_item_body">
                <span>24</span>
                <div class="main_dialog_stats_item_body__stats">
                    <div class="main_dialog_stats_item_body__stats__item">
                        <div class="main_dialog_stats_item_body__stats__item__icon"></div>
                        <div class="main_dialog_stats_item_body__stats__item__title">Новые</div>
                        <div class="main_dialog_stats_item_body__stats__item__value">6</div>
                    </div>
                    <div class="main_dialog_stats_item_body__stats__item">
                        <div class="main_dialog_stats_item_body__stats__item__icon !border-gray-light"></div>
                        <div class="main_dialog_stats_item_body__stats__item__title">Вернувшиеся</div>
                        <div class="main_dialog_stats_item_body__stats__item__value">6</div>
                    </div>
                </div>
            </div>
            <div class="main_dialog_stats_item_footer">
                <div :style="{width:val1+'%'}" class="main_dialog_stats_item_footer__progress"></div>
            </div>
        </div>
        <div class="main_dialog_stats_item">
            <div class="main_dialog_stats_item_head">
                <div class="main_dialog_stats_item_head__title">Количество достигнутых продаж</div>
                <ui-select :options="[{id:1,name:'name'}]"/>
            </div>
            <div class="main_dialog_stats_item_body">
                <span>24</span>
                <div class="main_dialog_stats_item_body__stats w-1/2">
                    <div class="main_dialog_stats_item_body__stats__item">
<!--                        <div class="main_dialog_stats_item_body__stats__item__icon !border-gray-light"></div>-->
                        <div class="main_dialog_stats_item_body__stats__item__title">На 5% меньше по сравнению с прошлым периодом</div>
<!--                        <div class="main_dialog_stats_item_body__stats__item__value">6</div>-->
                    </div>
                </div>
            </div>
            <div class="main_dialog_stats_item_footer">
                <div :style="{width:val1+'%'}" class="main_dialog_stats_item_footer__progress !bg-error"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main_dialog_stats {
    @apply w-full flex flex-col gap-6 h-full;

    &_item {
        @apply bg-white rounded-3xl p-6 grow flex flex-col gap-6 dark:bg-dark-white;

        &_head {
            @apply flex gap-4;

            &__title {
                @apply text-base font-bold
            }

            div {
                @apply w-1/2
            }
        }

        &_body {
            @apply flex justify-between items-end w-full;

            span {
                @apply text-5xl
            }

            &__stats {
                @apply flex justify-end gap-6;

                &__item {
                    @apply flex items-center gap-1;
                    &__icon {
                        @apply w-2 h-2 border-2 rounded border-info
                    }
                    &__title{
                        @apply text-gray-dark text-sm font-normal;
                    }
                    &__value{
                        @apply font-medium text-sm
                    }
                }

            }
        }

        &_footer {
            @apply w-full h-2 rounded-lg bg-gray-light relative;

            &__progress {
                @apply h-2 rounded-lg bg-info absolute left-0 top-0 z-10;
            }
        }
    }
}
</style>