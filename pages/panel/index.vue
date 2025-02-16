<script setup>
import AssistantCard from "~/components/AssistantCard/AssistantCard.vue";

definePageMeta({
    layout: 'panel',
});
const step = ref(3);
</script>

<template>
    <div class="px-50 flex flex-col h-screen" style="background-color: #f8fafe;">
        <div class="mt-10 mb-5" style="padding-left: 50px;font-weight: 700;font-size: 24px">Ассистенты</div>

        <div class="pb-5 flex flex-wrap pt-10 bg-white w-full justify-center mx-30"
             style="border-radius:10px;border: 1px solid #3E3E3E33;padding-bottom: 185px;margin-bottom: 20px;width: calc(100% - 60px)">
            <div class="grid lg:grid-cols-3 md:grid-cols-2 px-4" style="gap: 30px">
                <assistant-card/>
                <assistant-card/>
                <assistant-card/>
                <assistant-card/>
                <div class="flex flex-col relative cursor-pointer w-1/3 "
                     style="border-radius: 14px; border: 1px solid #3E3E3E33;background: #F3F3F3;min-height: 186px"
                     @click="$refs.assistantModal.open()">
                    <div class="flex flex-col justify-center items-center h-full" style="gap:16px">
                        <div class="flex justify-center items-center"
                             style="border-radius: 8px;width: 40px;height: 40px;background: #3E3E3EB2;">
                            <img src="/assets/images/new_assistant_ico.svg"/>

                        </div>
                        <div class="font-normal" style="color: #808181;font-size: 18px">Создать ассистента</div>
                    </div>
                </div>
            </div>
            <modal ref="assistantModal">
                <div class="flex justify-center items-center flex-col">
                    <!--                    <div role="status">-->
                    <!--                        <svg aria-hidden="true"-->
                    <!--                             class="inline w-20 h-20 text-gray-200 animate-spin"-->
                    <!--                             fill="none" viewBox="0 0 100 101" xmlns="http://www.w3.org/2000/svg">-->
                    <!--                            <path-->
                    <!--                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"-->
                    <!--                                fill="currentColor"/>-->
                    <!--                            <path-->
                    <!--                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"-->
                    <!--                                fill="#50B748"/>-->
                    <!--                        </svg>-->
                    <!--                        <span class="sr-only">Loading...</span>-->
                    <!--                    </div>-->
                    <div :class="{'step-1':step==1,'step-2':step==2,'step-3':step==3,'step-4':step==4}"
                         class="progress-circle step-1">
                        <svg class="progress-ring" viewBox="0 0 100 100">
                            <circle class="progress-ring-bg" cx="50" cy="50" r="45"/>
                            <circle class="progress-ring-fill" cx="50" cy="50" r="45"/>
                        </svg>

                    </div>
                    <template v-if="step==1">
                        <div class="step_title mt-10">Почти готово! Уточним детали</div>
                        <ui-select style="margin-top: 30px;!important"/>
                        <ui-select/>
                        <ui-text-area/>
                        <ui-text-area/>
                        <div class="flex justify-center gap-5 " style="margin-top: 35px">
                            <button class="btn">Отмена</button>
                            <button class="btn btn_success" @click="step=2">Продолжить</button>
                        </div>
                    </template>
                    <div v-if="step==2" class="w-full">
                        <div class="step_title mt-10">Как ассистент должен развивать диалог?</div>
                        <div class="step_description mt-10">Посмотрите пример ниже. Это не четкий скрипт, а примерный
                            план идеального диалога, которого ИИ-ассистент будет стараться придерживаться
                        </div>
                        <div class="flex flex-col w-full " style="margin-top: 30px;gap:10px">
                            <div class="flex w-full step_group_input" style="gap:10px">
                                <div class="step_icon cursor-pointer">1</div>
                                <div class="step_input flex justify-center items-center ">
                                    <input class="!focus:outline-none focus:ring-0 border-0 w-full" type="text">
                                    <button
                                        class="h-full cursor-pointer">
                                        <svg fill="none" height="24" viewBox="0 0 24 24"
                                             width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.7681 7.34779L15.7369 4.37907C15.9797 4.13635 16.3089 4 16.6522 4C16.9955 4 17.3248 4.13635 17.5676 4.37907L19.6209 6.43245C19.8636 6.67524 20 7.00449 20 7.34779C20 7.6911 19.8636 8.02035 19.6209 8.26314L16.6522 11.2319M12.7681 7.34779L5.37934 14.7366C5.13653 14.9793 5.00007 15.3086 5 15.6519V17.7053C5 18.0487 5.1364 18.378 5.37921 18.6208C5.62201 18.8636 5.95132 19 6.29469 19H8.34807C8.69141 18.9999 9.02067 18.8635 9.26341 18.6207L16.6522 11.2319M12.7681 7.34779L16.6522 11.2319"
                                                stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                    <button class="h-full cursor-pointer">
                                        <svg fill="none" height="24" viewBox="0 0 24 24"
                                             width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 7.69238H20" stroke="black" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                            <path
                                                d="M6.875 7.69238H18.125V18.7693C18.125 19.0957 17.9932 19.4088 17.7589 19.6396C17.5245 19.8704 17.2065 20.0001 16.875 20.0001H8.125C7.79348 20.0001 7.47554 19.8704 7.24111 19.6396C7.0067 19.4088 6.875 19.0957 6.875 18.7693V7.69238Z"
                                                stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path
                                                d="M9.375 7.69231V7.07692C9.375 6.26087 9.70424 5.47824 10.2903 4.90121C10.8763 4.32417 11.6712 4 12.5 4C13.3288 4 14.1237 4.32417 14.7097 4.90121C15.2958 5.47824 15.625 6.26087 15.625 7.07692V7.69231"
                                                stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M10.625 11.3857V16.3107" stroke="black" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                            <path d="M14.375 11.3857V16.3107" stroke="black" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="flex w-full step_group_input" style="gap:10px">
                                <div class="step_icon cursor-pointer">2</div>
                                <div class="step_input flex justify-center items-center ">
                                    <input class="!focus:outline-none focus:ring-0 border-0 w-full" type="text">
                                    <button
                                        class="h-full cursor-pointer">
                                        <svg fill="none" height="24" viewBox="0 0 24 24"
                                             width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.7681 7.34779L15.7369 4.37907C15.9797 4.13635 16.3089 4 16.6522 4C16.9955 4 17.3248 4.13635 17.5676 4.37907L19.6209 6.43245C19.8636 6.67524 20 7.00449 20 7.34779C20 7.6911 19.8636 8.02035 19.6209 8.26314L16.6522 11.2319M12.7681 7.34779L5.37934 14.7366C5.13653 14.9793 5.00007 15.3086 5 15.6519V17.7053C5 18.0487 5.1364 18.378 5.37921 18.6208C5.62201 18.8636 5.95132 19 6.29469 19H8.34807C8.69141 18.9999 9.02067 18.8635 9.26341 18.6207L16.6522 11.2319M12.7681 7.34779L16.6522 11.2319"
                                                stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                    <button class="h-full cursor-pointer">
                                        <svg fill="none" height="24" viewBox="0 0 24 24"
                                             width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 7.69238H20" stroke="black" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                            <path
                                                d="M6.875 7.69238H18.125V18.7693C18.125 19.0957 17.9932 19.4088 17.7589 19.6396C17.5245 19.8704 17.2065 20.0001 16.875 20.0001H8.125C7.79348 20.0001 7.47554 19.8704 7.24111 19.6396C7.0067 19.4088 6.875 19.0957 6.875 18.7693V7.69238Z"
                                                stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path
                                                d="M9.375 7.69231V7.07692C9.375 6.26087 9.70424 5.47824 10.2903 4.90121C10.8763 4.32417 11.6712 4 12.5 4C13.3288 4 14.1237 4.32417 14.7097 4.90121C15.2958 5.47824 15.625 6.26087 15.625 7.07692V7.69231"
                                                stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M10.625 11.3857V16.3107" stroke="black" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                            <path d="M14.375 11.3857V16.3107" stroke="black" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="flex w-full step_group_input" style="gap:10px">
                                <div class="step_icon cursor-pointer">3</div>
                                <div class="step_input flex justify-center items-center ">
                                    <input class="!focus:outline-none focus:ring-0 border-0 w-full" type="text">
                                    <button
                                        class="h-full cursor-pointer">
                                        <svg fill="none" height="24" viewBox="0 0 24 24"
                                             width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.7681 7.34779L15.7369 4.37907C15.9797 4.13635 16.3089 4 16.6522 4C16.9955 4 17.3248 4.13635 17.5676 4.37907L19.6209 6.43245C19.8636 6.67524 20 7.00449 20 7.34779C20 7.6911 19.8636 8.02035 19.6209 8.26314L16.6522 11.2319M12.7681 7.34779L5.37934 14.7366C5.13653 14.9793 5.00007 15.3086 5 15.6519V17.7053C5 18.0487 5.1364 18.378 5.37921 18.6208C5.62201 18.8636 5.95132 19 6.29469 19H8.34807C8.69141 18.9999 9.02067 18.8635 9.26341 18.6207L16.6522 11.2319M12.7681 7.34779L16.6522 11.2319"
                                                stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                    <button class="h-full cursor-pointer">
                                        <svg fill="none" height="24" viewBox="0 0 24 24"
                                             width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 7.69238H20" stroke="black" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                            <path
                                                d="M6.875 7.69238H18.125V18.7693C18.125 19.0957 17.9932 19.4088 17.7589 19.6396C17.5245 19.8704 17.2065 20.0001 16.875 20.0001H8.125C7.79348 20.0001 7.47554 19.8704 7.24111 19.6396C7.0067 19.4088 6.875 19.0957 6.875 18.7693V7.69238Z"
                                                stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path
                                                d="M9.375 7.69231V7.07692C9.375 6.26087 9.70424 5.47824 10.2903 4.90121C10.8763 4.32417 11.6712 4 12.5 4C13.3288 4 14.1237 4.32417 14.7097 4.90121C15.2958 5.47824 15.625 6.26087 15.625 7.07692V7.69231"
                                                stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M10.625 11.3857V16.3107" stroke="black" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                            <path d="M14.375 11.3857V16.3107" stroke="black" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>


                        </div>
                        <div class="flex justify-center items-center cursor-pointer"
                             style="padding: 11px 20px;gap:12px;margin-top: 10px;border-radius: 8px;border: 1px solid rgba(62, 62, 62, 0.20);color: #50B748;font-size: 16px;font-style: normal;font-weight: 400;line-height: normal;">
                            <span style="font-size: 18px">+</span>
                            <div style="font-size: 16px">Добавить этап</div>
                        </div>
                        <div class="flex justify-center gap-5 " style="margin-top: 67px">
                            <button class="btn" @click="step=1">Назад</button>
                            <button class="btn btn_success" @click="step=3">Продолжить</button>
                        </div>
                    </div>
                    <div v-if="step==3" class="w-full">
                        <div class="step_title mt-10">Как ассистент должен развивать диалог?</div>
                        <div class="step_description mt-10">Добавьте документы, которые содержат информацию о вашем
                            бизнесе: цены, виды услуг, товары, контакты и тд. Вы можете пропустить этот шаг и загрузить
                            файлы позже.
                        </div>

                        <div class="flex items-center justify-center w-full " style="padding:  0 90px;margin-top: 30px">
                            <label class="flex flex-col items-center justify-center w-full cursor-pointer"
                                   for="dropzone-file"
                                   style="padding:22px 10px;border-radius: 14px;border: 1px dashed rgba(62, 62, 62, 0.40);">
                                <div class="flex flex-col items-center justify-center" style="gap: 10px">
                                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20 13.2305H15.6923C15.3659 13.2305 15.0528 13.3601 14.822 13.5909C14.5912 13.8218 14.4615 14.1348 14.4615 14.4612C14.4615 15.1141 14.2022 15.7401 13.7406 16.2018C13.2789 16.6635 12.6528 16.9228 12 16.9228C11.3472 16.9228 10.7211 16.6635 10.2594 16.2018C9.7978 15.7401 9.53846 15.1141 9.53846 14.4612C9.53846 14.1348 9.40879 13.8218 9.17798 13.5909C8.94716 13.3601 8.63412 13.2305 8.30769 13.2305H4V18.7689C4 19.0953 4.12967 19.4084 4.36048 19.6392C4.5913 19.87 4.90434 19.9997 5.23077 19.9997H18.7692C19.0956 19.9997 19.4087 19.87 19.6395 19.6392C19.8703 19.4084 20 19.0953 20 18.7689V13.2305Z"
                                            stroke="#757678" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.92285 7.07692L11.9998 4L15.0767 7.07692" stroke="#757678"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 11.3846V4" stroke="#757678" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                    </svg>
                                    <p style="color: #757678;font-size: 16px;font-style: normal;font-weight: 400;line-height: normal;">
                                        Перетащите файлы ﻿или нажмите чтобы выбрать</p>
                                </div>
                                <input id="dropzone-file" class="hidden" type="file"/>
                            </label>
                        </div>
                        <div class="flex justify-center gap-5 " style="margin-top: 40px">
                            <button class="btn" @click="step=2">Назад</button>
                            <button class="btn btn_success">Создать</button>
                        </div>

                    </div>
                </div>
            </modal>

        </div>
    </div>
</template>

<style scoped>
.step_title {
    color: #000;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.step_description {
    color: #3E3E3E;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.step_group_input {
    .step_icon {
        width: 48px;
        height: 54px;
        border-radius: 8px;
        border: 1px solid rgba(62, 62, 62, 0.20);
        background: #F8F9FA;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .step_input {
        width: 100%;
        padding: 16px 20px;
        height: 54px;
        gap: 20px;

        border-radius: 8px;
        border: 1px solid rgba(62, 62, 62, 0.20);

        input {
            color: #000;
            font-size: 16px;
            padding: 0;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }
}

.progress-circle {
    position: relative;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.progress-ring {
    transform: rotate(-90deg);
}

.progress-ring-bg,
.progress-ring-fill {
    fill: none;
    stroke-width: 4;
    cx: 50;
    cy: 50;
    r: 45;
    stroke-linecap: round;
}

.progress-ring-bg {
    stroke-width: 4;
}

.progress-ring-fill {
    stroke-width: 6;
}

.progress-ring-bg {
    stroke: #e0e0e0;
}

.progress-ring-fill {
    stroke: #50B748;
    stroke-dasharray: 282.6;
    transition: stroke-dashoffset 0.8s ease-in-out;
}

.step-1 .progress-ring-fill {
    stroke-dashoffset: calc(282.6 * (1 - 0.25));
}

/* 25% */
.step-2 .progress-ring-fill {
    stroke-dashoffset: calc(282.6 * (1 - 0.50));
}

/* 50% */
.step-3 .progress-ring-fill {
    stroke-dashoffset: calc(282.6 * (1 - 0.75));
}

/* 75% */
.step-4 .progress-ring-fill {
    stroke-dashoffset: 0;
}

/* 100% */

.progress-text {
    position: absolute;
    font-size: 18px;
    font-weight: bold;
    color: #333;
}

@keyframes progress-steps {
    0% {
        stroke-dashoffset: calc(282.6 * (1 - 0.25));
    }
    /* 25% */
    33% {
        stroke-dashoffset: calc(282.6 * (1 - 0.50));
    }
    /* 50% */
    66% {
        stroke-dashoffset: calc(282.6 * (1 - 0.75));
    }
    /* 75% */
    100% {
        stroke-dashoffset: 0;
    }
    /* 100% */
}

.animated .progress-ring-fill {
    animation: progress-steps 4s linear infinite;
}

</style>