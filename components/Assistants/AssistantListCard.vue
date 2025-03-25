<script setup>
import {ref} from 'vue';

const isVisible = ref(false);
defineProps({
    name: {type: String}
});

function getRandomText() {
    const words = [
        "Lorem", "ipsum", "dolor", "sit", "amet",
        "consectetur", "adipiscing", "elit", "sed", "do",
        "eiusmod", "tempor", "incididunt", "ut", "labore",
        "et", "dolore", "magna", "aliqua", "ut", "enim",
        "ad", "minim", "veniam", "quis", "nostrud", "exercitation",
        "ullamco", "laboris", "nisi", "ut", "aliquip", "ex",
        "ea", "commodo", "consequat", "duis", "aute", "irure",
        "dolor", "in", "reprehenderit", "in", "voluptate", "velit",
        "esse", "cillum", "dolore", "eu", "fugiat", "nul"
    ];


    const numberOfWords = Math.floor(Math.random() * (10 - 2 + 1)) + 2;

    const randomWords = [];
    for (let i = 0; i < numberOfWords; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        randomWords.push(words[randomIndex]);
    }

    return randomWords.join(' ');
}
</script>

<template>
    <div class="assistant_card">
        <div class="assistant_cols">
            <div class="assistant_cols_1">
                <svg
                    :class="{'rotate-180': isVisible}"
                    class="transition-transform duration-300"
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    @click="isVisible = !isVisible"
                >
                    <path
                        d="M17.6 9.60001L12 14.4L6.4 9.60001"
                        stroke="#1A1B1B"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                    />
                </svg>
            </div>
            <div class="assistant_cols_2">{{ name }}</div>
            <div class="assistant_cols_3">Организация</div>
            <div class="assistant_cols_4">Роль</div>
            <div class="assistant_cols_5">
                <ui-toggle label="Активен"/>
            </div>
            <div class="assistant_cols_6">
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"
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
                <ui-dropdown ref="dropdown">
                    <div class="py-2 px-4 hover:bg-gray-light cursor-pointer">Редактировать</div>
                    <div class="py-2 px-4 hover:bg-gray-light cursor-pointer">
                        Удалить
                    </div>
                </ui-dropdown>

            </div>
        </div>
        <div
            :class="{'opened':isVisible}"
            class="assistant_card__info transition-max-height"
        >
            <div class="assistant_card__info_body">
                <div class="info_body__label">label here</div>
                <div class="info_body_items">
                    <div v-for="item in 7" class="info_body_items__item">
                        <img src="/images/icons/Instagram.svg">
                        <span> {{ getRandomText() }}</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.assistant_card {
    @apply flex flex-col text-base border border-gray-light rounded-2xl;

    &__info {
        @apply overflow-hidden transition-all duration-300 ease-in-out;
        max-height: 0;
        opacity: 0;

        &_body {
            @apply p-4 flex gap-4 flex-col;

            .info_body__label {
                @apply text-dark;
            }

            .info_body_items {
                @apply flex flex-wrap gap-4;

                &__item {
                    @apply border border-gray-light p-2 gap-1 flex items-center;
                    max-height: 48px;
                    border-radius: 100px;

                    img {
                        @apply w-8 h-8
                    }

                    span {
                        @apply text-base font-normal
                    }
                }
            }

        }
    }

    .opened {
        @apply border-t border-gray-light;
        max-height: none;
        opacity: 1;
        border-top: 1px solid #e0e0e0;
    }
}

.assistant_cols {
    @apply flex py-3 ;

    &_title {
        @apply text-gray-dark;
    }

    &_1, &_2, &_3, &_4, &_5, &_6 {
        @apply h-14
    }

    &_1, &_6 {
        @apply w-[56px];

        svg {
            @apply cursor-pointer;
        }
    }

    &_2 {
        @apply w-[20%];
    }

    &_3 {
        @apply w-[24%];
    }

    &_4 {
        @apply w-[42%];
    }

    &_5 {
        @apply w-[13%];
    }

    &_1, &_2, &_3, &_4, &_5, &_6 {
        @apply p-4;
    }
}
</style>