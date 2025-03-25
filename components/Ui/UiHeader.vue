<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goToProfile = (tab) => {
  router.replace({ path: '/profile', query: { tab: tab } });
};
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
                <img src="/images/icons/Down.svg" />
                <ui-dropdown ref="profileDropdown" class="w-0" style="left:-30px;top:30px">
                    <div class="w-48 py-2 px-4 hover:bg-gray-light cursor-pointer" @click="goToProfile(1)">Профиль</div>
                    <div class="py-2 px-4 hover:bg-gray-light cursor-pointer" @click="goToProfile(2)">Сотрудники</div>
                    <div class="py-2 px-4 hover:bg-gray-light cursor-pointer" @click="goToProfile(3)">Оплата</div>
                    <div class="py-2 px-4 hover:bg-gray-light cursor-pointer flex justify-between">
                        <span>Темная тема</span>
                        <ui-toggle/>
                    </div>
                    <div class="py-2 px-4 hover:bg-gray-light cursor-pointer text-gray-dark">Выйти</div>
                </ui-dropdown>
            </div>

            <div class="nav_right__icons">
                <div>
                    <img alt="" src="/images/icons/Message.svg">
                </div>
                <div>
                    <img src="/images/icons/Notifications.svg">
                </div>
            </div>
            <div class="nav_right__locale cursor-pointer" @click="$refs.langDropdown.open()">
                <div>Ru</div>

                <img src="/images/icons/Down.svg" >
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
    @apply flex w-full justify-between px-5 py-3 flex-row-reverse border-b border-b-gray-light;

    &_right {
        @apply self-end flex gap-8 flex-row-reverse justify-center items-center;

        &__profile {
            @apply flex gap-4;

            &_1 {
                @apply flex gap-2;
            }

            &_avatar {
                @apply w-10 h-10 rounded-full text-primary flex items-center justify-center;
                background-color: #E9FBDC;
                font-size: 20px;
            }

            &_name {
                @apply py-2;
                font-size: 16px;
                line-height: 24px;
                font-weight: 500;
            }
        }

        &__icons {
            @apply flex gap-6;

            div {
                @apply w-10 h-10 flex justify-center items-center rounded-full bg-bg;
            }
        }

        &__locale {
            @apply flex items-center justify-center gap-2;
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
        }
    }
}
</style>