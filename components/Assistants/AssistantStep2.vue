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
    <div class="font-medium text-base dark:text-dark-dark">
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
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8 7.20001H5.19994" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                    <path
                        d="M17.4667 9.20001L17.0987 14.7193C16.9571 16.8432 16.8863 17.9052 16.1943 18.5526C15.5023 19.2 14.438 19.2 12.3093 19.2H11.6907C9.56201 19.2 8.49769 19.2 7.80569 18.5526C7.11368 17.9052 7.04288 16.8432 6.90129 14.7193L6.53333 9.20001"
                        stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                    <path d="M9.73653 5.6C10.066 4.66785 10.955 4 12 4C13.0449 4 13.9339 4.66785 14.2634 5.6"
                          stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                </svg>

            </div>
        </div>

    </div>
    <ui-button class="justify-start" label="Добавить" type="tretiary" @click="modelValue.push('')"/>

</template>

<style scoped>

.order_form {
    @apply flex flex-col gap-4 justify-start;

    &__item {
        @apply border border-gray-light rounded-2xl py-2 px-4 justify-center flex items-center gap-4 dark:border-dark-gray-light;

        &__move {
            @apply flex justify-center items-center gap-2;

            &_p, &_n {
                @apply p-1 border border-gray-light rounded w-6 h-6 cursor-pointer dark:text-dark-dark dark:border-dark-gray-light;

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
            @apply cursor-pointer dark:text-dark-dark;
        }
    }
}
</style>