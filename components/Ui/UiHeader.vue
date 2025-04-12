<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();
const goToProfile = (tab) => {
    router.replace({path: '/profile', query: {tab: tab}});
};
const isDark = ref(false);

onMounted(() => {
    const theme = localStorage.getItem('theme');
    isDark.value = theme === 'dark';
    updateHtmlClass();
});

watch(isDark, () => {
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
    updateHtmlClass();
});

function updateHtmlClass() {
    document.documentElement.classList.toggle('dark', isDark.value);
}
</script>

<template>
    <header class="nav">
        <div class="nav_right">
            <div class="nav_right__profile cursor-pointer" @click="$refs.profileDropdown.open()">
                <div class="nav_right__profile_1">
                    <div class="nav_right__profile_avatar">
                        <span>A</span>
                    </div>
                    <div class="nav_right__profile_name">
                        nameda asd
                    </div>
                </div>
                <div class="flex items-center text-black dark:text-white">
                    <svg class="w-6 h-6" fill="none" height="24" viewBox="0 0 24 24" width="24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.6 9.60001L12 14.4L6.4 9.60001" stroke="currentColor" stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="1.5"/>
                    </svg>
                </div>
                <ui-dropdown ref="profileDropdown" class="w-0" style="left:-30px;top:30px">
                    <div class="w-48 py-2 px-4 hover:bg-gray-light cursor-pointer" @click="goToProfile(1)">Профиль</div>
                    <div class="py-2 px-4 hover:bg-gray-light cursor-pointer" @click="goToProfile(2)">Сотрудники</div>
                    <div class="py-2 px-4 hover:bg-gray-light cursor-pointer" @click="goToProfile(3)">Оплата</div>
                    <div class="flex justify-between">
                        <span>Темная тема</span>
                        <ui-toggle v-model="isDark"/>
                    </div>
                    <div class="py-2 px-4 hover:bg-gray-light cursor-pointer text-gray-dark">Выйти</div>
                </ui-dropdown>
            </div>

            <div class="nav_right__icons">
                <div>
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.2797 4.30049 14.4893 4.83477 15.562C4.97675 15.847 5.02401 16.1729 4.94169 16.4805L4.46521 18.2613C4.25836 19.0344 4.96561 19.7416 5.73868 19.5348L7.51951 19.0583C7.82715 18.976 8.15297 19.0233 8.43802 19.1652C9.51069 19.6995 10.7203 20 12 20Z"
                            stroke="currentColor" stroke-width="1.5"/>
                        <path d="M8.8 10.8H15.2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                        <path d="M8.8 13.6H13.2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                    </svg>

                </div>
                <div>
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.6 10.1633V9.6C17.6 6.50721 15.0928 4 12 4C8.90721 4 6.4 6.50721 6.4 9.6V10.1633C6.4 10.8393 6.19991 11.5001 5.82493 12.0626L4.90605 13.4409C4.06674 14.6999 4.70748 16.4111 6.16725 16.8092C9.98602 17.8507 14.014 17.8507 17.8328 16.8092C19.2925 16.4111 19.9333 14.6999 19.094 13.4409L18.1751 12.0626C17.8001 11.5001 17.6 10.8393 17.6 10.1633Z"
                            stroke="currentColor" stroke-width="1.5"/>
                        <path d="M8.4 17.6C8.92402 18.9982 10.338 20 12 20C13.662 20 15.076 18.9982 15.6 17.6"
                              stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                    </svg>

                </div>
            </div>
            <div class="nav_right__locale cursor-pointer" @click="$refs.langDropdown.open()">
                <div>Ru</div>
                <div class="w-6 h-6">
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.6 9.60001L12 14.4L6.4 9.60001" stroke="currentColor" stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="1.5"/>
                    </svg>
                </div>

                <ui-dropdown ref="langDropdown" style="left:-20px;top:20px">
                    <div class="py-2 px-4 hover:bg-gray-light cursor-pointer">ru</div>
                    <div class="py-2 px-4 hover:bg-gray-light cursor-pointer">kk</div>
                </ui-dropdown>


            </div>
        </div>
        <!--        <div class="nav_left">-->
        <!--            left-->
        <!--        </div>-->
    </header>
</template>

<style scoped>
.nav {
    @apply flex w-full justify-between px-5 py-3 flex-row-reverse border-b border-b-gray-light dark:bg-dark-white dark:border-b-dark-gray-light;

    &_right {
        @apply self-end flex gap-8 flex-row-reverse justify-center items-center;

        &__profile {
            @apply flex gap-4;

            &_1 {
                @apply flex gap-2;
            }

            &_avatar {
                @apply w-10 h-10 rounded-full text-primary flex items-center justify-center dark:bg-dark-bg;
                background-color: #E9FBDC;
                font-size: 20px;
            }

            &_name {
                @apply py-2 dark:text-white;
                font-size: 16px;
                line-height: 24px;
                font-weight: 500;
            }
        }

        &__icons {
            @apply flex gap-6;

            div {
                @apply w-10 h-10 flex justify-center items-center rounded-full bg-bg dark:bg-dark-bg dark:text-white;
            }
        }

        &__locale {
            @apply flex items-center justify-center gap-2 dark:text-white;
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
        }
    }
}
</style>