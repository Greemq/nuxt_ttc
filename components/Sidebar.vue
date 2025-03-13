<script setup>
import {ref} from "vue";
import { useLocalePath } from '#imports'

const route = useRoute()
const router= useRouter()
const localePath = useLocalePath()
const toggle = ref(false);
const toggleSidebar = () => {
    toggle.value = !toggle.value;
};
const routes = ref([
    {
        label:'',
        name:'',
        svg:''
    },

])

const isActive = (path) => route.path === localePath(path);
</script>

<template>
    <aside :class="{'sidebar_toggle':toggle}" class="sidebar">
        <div class="sidebar_container">
            <div class="sidebar_container__logo">
                <img alt="" class="toggle_button" src="/assets/images/icons/Hide%20menu.svg" @click="toggleSidebar()">
                <img :class="{ 'hidden': toggle }" alt="" class="ttc_logo" src="/assets/images/logo_1.svg">
            </div>
            <div class="sidebar_container__menu">
                <div :class="{'sidebar_container__menu__item_active':isActive('/assistants')}" class="sidebar_container__menu__item" @click="router.push('/assistants')">
                    <img class="sidebar_container__menu_icon" src="assets/images/icons/Home.svg">
                    <div class="sidebar_container__menu_name toggle_name">Ассистенты</div>
                </div>
                <div :class="{'sidebar_container__menu__item_active':isActive('/knowledge')}" class="sidebar_container__menu__item" @click="router.push('/knowledge')">
                    <img class="sidebar_container__menu_icon" src="assets/images/icons/Book.svg">
                    <div class="sidebar_container__menu_name toggle_name">центр знаний</div>
                </div>
            </div>
        </div>
    </aside>
</template>

<style scoped>

.sidebar {
    @apply bg-white transition-all duration-300 overflow-hidden max-w-[236px] w-full border-r-gray-light border-r shrink-0;

    &_container {
        @apply flex flex-col gap-4 h-full px-4 ;

        &__logo {
            @apply flex justify-between items-center min-h-[60px] flex-row-reverse;
            padding: 14.5px 0;
            .toggle_button{
                @apply transition-transform duration-300 cursor-pointer;
            }

            .ttc_logo {
                cursor: pointer;
                transition: opacity 1s ease, visibility 1s ease;
                opacity: 1;
            }
        }

        &__menu {
            @apply flex-grow gap-1 flex-col flex;

            &__item {
                @apply text-gray-dark flex px-2 py-3 gap-2 rounded-2xl cursor-pointer hover:bg-bg hover:text-dark text-base font-medium;

                &_icon {
                    @apply w-6 h-6
                }

                &_name {
                    transition: opacity 1s ease;
                    opacity: 1;
                }

                &_active {
                    @apply bg-bg text-dark
                }
            }
        }

    }

    &_toggle {
        @apply max-w-[72px];
        .toggle_button {
            transform: scaleX(-1);
        }
        .ttc_logo {
            opacity: 0;
            visibility: hidden;
            transition: visibility 0s 1s;
        }

        .toggle_name {
            opacity: 0;
            visibility: hidden;
            transition: visibility 0s 1s;
        }

        .sidebar_container__logo {
            @apply justify-center
        }

        &.sidebar_toggle .ttc_logo {
            display: none;
        }

        &.sidebar_toggle .toggle_name {
            display: none;
        }


    }


}
</style>