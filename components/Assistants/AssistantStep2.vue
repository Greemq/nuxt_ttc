<script lang="ts" setup>
const {modelValue} = defineProps({
    modelValue: {type: Array}
});
const swap = (index1, index2) => {
    if (
        index1 >= 0 && index1 < modelValue.length &&
        index2 >= 0 && index2 < modelValue.length &&
        index1 !== index2
    )
        [modelValue[index1], modelValue[index2]] = [modelValue[index2], modelValue[index1]];
};
const deleteItem = (index) => {
    modelValue.splice(index, 1);
};
</script>

<template>
    <div class="font-medium text-base">
        Как ассистент должен развивать диалог?
    </div>
    <ui-notification
        label="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis consequuntur delectus deserunt dolor doloribus eligendi, et ipsum laudantium molestiae obcaecati officia quaerat quia ratione reiciendis, reprehenderit voluptatem? Minima, quo."/>

    <div class="order_form">
        <div v-for="(item,index) in modelValue" class="order_form__item">
            <div class="order_form__item__move">
                <div :class="{'disabled':index==modelValue.length-1}" class="order_form__item__move_p"
                     @click="swap(index,index+1)">
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.6 9.60001L12 14.4L6.4 9.60001" stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="1.5"/>
                    </svg>

                </div>
                <div :class="{'disabled':index==0}" class="order_form__item__move_n"
                     @click="swap(index,index-1)">
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.6 14.4L12 9.59998L6.4 14.4" stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="1.5"/>
                    </svg>

                </div>
            </div>
            <div class="order_form__item__text">
                <ui-text-area v-model="modelValue[index]" class="max-h-16 min-h-16" resize-disabled/>
            </div>
            <div class="order_form__item__delete" @click="deleteItem(index)">
                <img src="/images/icons/Delete.svg">
            </div>
        </div>

    </div>
    <ui-button class="justify-start" label="Добавить" type="tretiary" @click="modelValue.push('')"/>

</template>

<style scoped>

.order_form {
    @apply flex flex-col gap-4 justify-start;

    &__item {
        @apply border border-gray-light rounded-2xl py-2 px-4 justify-center flex items-center gap-4;

        &__move {
            @apply flex justify-center items-center gap-2;

            &_p, &_n {
                @apply p-1 border border-gray-light rounded w-6 h-6 cursor-pointer;

                svg {
                    @apply w-4 h-4;
                }
            }

            .disabled {
                @apply cursor-not-allowed text-gray;
            }
        }

        &__text {
            @apply grow;
        }

        &__delete {
            @apply cursor-pointer;
        }
    }
}
</style>