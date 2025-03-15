<script setup>
defineProps({
    modelValue: {type: Array},
    title: {type: String},
    messages: {type: Array}
});
</script>

<template>
    <div class="chat-form">
        <div v-if="title" class="chat-form__title">{{ title }}</div>
        <div class="chat-form__body">
            <div class="chat-form__body__messages">
                <div class="message" :class="{'message_assistant':message.type==1,'message_user':message.type==2}" v-for="message in messages">
                    {{message.title}}
                    <div class="time">{{message.time}}</div>
                </div>
<!--                <div class="message message_assistant">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam-->
<!--                    deserunt dolorem eos error molestiae mollitia veritatis voluptatibus? Aliquam architecto at culpa-->
<!--                    deserunt quia velit.-->
<!--                    <div class="time">8:00</div>-->
<!--                </div>-->
<!--                <div class="message message_user">Lorem ipsum dolor sit amet.-->
<!--                    <div class="time">8:01</div>-->
<!--                </div>-->
            </div>
            <div class="chat-form__body__buttons">
                <svg class="clip" fill="none" height="24" viewBox="0 0 24 24" width="24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.73401 16.6455L15.0467 10.6028C15.8046 9.87735 15.8046 8.7011 15.0467 7.97561C14.2888 7.25012 13.06 7.25012 12.3021 7.97561L6.0351 13.9744C4.59506 15.3529 4.59506 17.5877 6.0351 18.9662C7.47514 20.3446 9.8099 20.3446 11.2499 18.9662L17.6084 12.8798C19.7305 10.8484 19.7305 7.5549 17.6084 5.52353C15.4862 3.49216 12.0455 3.49216 9.92335 5.52353L4.8 10.4277"
                        stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                </svg>
                <input type="text" placeholder="Введите сообщение...">
                <div class="btn">
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_4191_4173)">
                            <path
                                d="M11.2776 17.8298L15.1614 15.8879C18.5543 14.1915 20.2508 13.3432 20.2508 12C20.2508 10.6567 18.5543 9.80852 15.1614 8.11208L11.2776 6.17014C8.53917 4.80094 7.16997 4.11634 6.3762 4.32649C5.62107 4.5264 5.03131 5.11616 4.8314 5.87129C4.62125 6.66506 5.30585 8.03426 6.67505 10.7727C6.8949 11.2123 7.00482 11.4322 7.05037 11.6623C7.09452 11.8853 7.09453 12.1147 7.05037 12.3377C7.00482 12.5678 6.89489 12.7876 6.67505 13.2273C5.30585 15.9657 4.62125 17.3349 4.8314 18.1287C5.03131 18.8838 5.62107 19.4736 6.3762 19.6735C7.16997 19.8836 8.53918 19.199 11.2776 17.8298Z"
                                stroke="currentColor" stroke-width="1.5"/>
                            <path d="M16.1499 11.9996L11.4125 11.9734" stroke="currentColor" stroke-linecap="round"
                                  stroke-width="1.5"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_4191_4173">
                                <rect fill="white" height="24" width="24"/>
                            </clipPath>
                        </defs>
                    </svg>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.chat-form {
    @apply w-full h-full flex flex-col gap-6;

    &__title {
        @apply font-bold text-base;
    }

    &__body {
        @apply rounded-2xl border border-gray-light flex-grow flex flex-col p-6 gap-6 bg-white;

        &__messages {
            @apply flex-grow flex flex-col-reverse gap-2;

            .message {
                @apply p-2 rounded-lg flex flex-col gap-1 text-sm;
                max-width: 66.6%;

                &_user {
                    @apply bg-primary text-white self-end;

                    .time {
                        @apply text-white text-end;
                    }
                }

                &_assistant {
                    @apply text-dark self-start;
                    background-color: #EFF1F7;

                    .time {
                        @apply text-gray;
                    }
                }

                .time {

                    font-weight: 400;
                    font-size: 12px;
                    line-height: 16px;
                }
            }
        }

        &__buttons {
            @apply flex gap-6 relative;

            .clip {
                @apply absolute left-3 top-2 cursor-pointer text-gray-dark w-6 h-6
            }

            input {
                @apply flex-grow px-3 py-2 pl-12 border border-gray-light rounded-lg hover:border-primary focus:border-primary focus:ring-0 focus:outline-0;
            }

            .btn {
                @apply w-10 h-10 bg-primary p-2;

                svg {
                    @apply text-white
                }
            }

        }
    }
}
</style>