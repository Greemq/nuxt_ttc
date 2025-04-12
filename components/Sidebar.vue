<script setup>
import {ref} from "vue";
import {useLocalePath} from '#imports';

const route = useRoute();
const router = useRouter();
const localePath = useLocalePath();
const toggle = ref(false);
const toggleSidebar = () => {
    toggle.value = !toggle.value;
};
const routes = ref([
    {
        label: '',
        name: '',
        svg: ''
    },

]);

const isActive = (path) => route.path === localePath(path);
</script>

<template>
    <aside :class="{'sidebar_toggle':toggle}" class="sidebar">
        <div class="sidebar_container">
            <div class="sidebar_container__logo">
<!--                <img alt=""  src="/images/icons/Hide%20menu.svg" >-->
                <svg class="toggle_button" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" @click="toggleSidebar()">
                    <path d="M13.2 9.59998L10.8 12L13.2 14.4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="1.5"/>
                    <path
                        d="M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z"
                        stroke="currentColor" stroke-width="1.5"/>
                </svg>

                <img :class="{ 'hidden': toggle }" alt="" class="ttc_logo" src="/images/icons/logo_1.svg">
            </div>
            <div class="sidebar_container__menu">
                <NuxtLink :class="{'sidebar_container__menu__item_active':isActive('/main')}" :to="localePath('/main')"
                          class="sidebar_container__menu__item">
                    <svg class="sidebar_container__menu_icon" fill="none" height="24" viewBox="0 0 24 24" width="24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4 12.1631C4 10.3324 4 9.41702 4.41536 8.65819C4.83072 7.89937 5.58956 7.42841 7.10723 6.4865L8.70723 5.4935C10.3115 4.49783 11.1137 4 12 4C12.8863 4 13.6885 4.49783 15.2928 5.4935L16.8928 6.4865C18.4104 7.42841 19.1693 7.89937 19.5846 8.65819C20 9.41702 20 10.3324 20 12.1631V13.38C20 16.5007 20 18.061 19.0627 19.0305C18.1255 20 16.617 20 13.6 20H10.4C7.38301 20 5.87452 20 4.93726 19.0305C4 18.061 4 16.5007 4 13.38V12.1631Z"
                            stroke="currentColor" stroke-width="1.5"/>
                        <path d="M14.4 16.8H9.6" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                    </svg>

                    <div class="sidebar_container__menu_name toggle_name">Главная</div>
                </NuxtLink>
                <NuxtLink :class="{'sidebar_container__menu__item_active':isActive('/assistants')}"
                          :to="localePath('/assistants')" class="sidebar_container__menu__item">
                    <svg class="sidebar_container__menu_icon" fill="none" height="24" viewBox="0 0 24 24" width="24"
                         xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"/>
                        <path d="M9.6 15.2C10.2803 15.7043 11.1076 16 12 16C12.8923 16 13.7197 15.7043 14.4 15.2"
                              stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                        <path
                            d="M15.2 10.8C15.2 11.4627 14.8418 12 14.4 12C13.9582 12 13.6 11.4627 13.6 10.8C13.6 10.1372 13.9582 9.59998 14.4 9.59998C14.8418 9.59998 15.2 10.1372 15.2 10.8Z"
                            fill="currentColor"/>
                        <ellipse cx="9.6" cy="10.8" fill="currentColor" rx="0.8" ry="1.2"/>
                    </svg>

                    <div class="sidebar_container__menu_name toggle_name">Ассистенты</div>
                </NuxtLink>
                <NuxtLink :class="{'sidebar_container__menu__item_active':isActive('/knowledge')}"
                          :to="localePath('/knowledge')"
                          class="sidebar_container__menu__item">

                    <svg class="sidebar_container__menu_icon" fill="none" height="24" viewBox="0 0 24 24" width="24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.6 8.8C5.6 6.53726 5.6 5.40589 6.30294 4.70294C7.00589 4 8.13726 4 10.4 4H13.6C15.8627 4 16.9941 4 17.6971 4.70294C18.4 5.40589 18.4 6.53726 18.4 8.8V15.2C18.4 17.4627 18.4 18.5941 17.6971 19.2971C16.9941 20 15.8627 20 13.6 20H10.4C8.13726 20 7.00589 20 6.30294 19.2971C5.6 18.5941 5.6 17.4627 5.6 15.2V8.8Z"
                            stroke="currentColor" stroke-width="1.5"/>
                        <path
                            d="M18.3182 15.2H8.71822C7.97424 15.2 7.60225 15.2 7.29705 15.2818C6.46883 15.5037 5.82192 16.1506 5.6 16.9788"
                            stroke="currentColor" stroke-width="1.5"/>
                        <path d="M8.8 8H15.2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                        <path d="M8.8 10.8H12.8" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                        <path d="M18 17.6H8.8" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                    </svg>

                    <div class="sidebar_container__menu_name toggle_name">центр знаний</div>
                </NuxtLink>
                <NuxtLink :class="{'sidebar_container__menu__item_active':isActive('/test-drive')}"
                          :to="localePath('/test-drive')"
                          class="sidebar_container__menu__item">
                    <svg class="sidebar_container__menu_icon" fill="none" height="24" viewBox="0 0 24 24" width="24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.47562 8.73781C4.5748 7.83698 4.5748 6.37645 5.47562 5.47562C6.37645 4.5748 7.83698 4.5748 8.73781 5.47562L18.5244 15.2622C19.4252 16.163 19.4252 17.6236 18.5244 18.5244C17.6236 19.4252 16.163 19.4252 15.2622 18.5244L5.47562 8.73781Z"
                            stroke="currentColor" stroke-width="1.5"/>
                        <path d="M7.2 10.4L10.4 7.19999" stroke="currentColor" stroke-linecap="round"
                              stroke-width="1.5"/>
                        <path
                            d="M15.28 4.24575C15.4088 3.91808 15.8708 3.91808 15.9996 4.24575L16.3439 5.12198C16.3832 5.22202 16.4621 5.30121 16.5617 5.34066L17.4347 5.68624C17.7612 5.81547 17.7612 6.2792 17.4347 6.40843L16.5617 6.75401C16.4621 6.79347 16.3832 6.87266 16.3439 6.9727L15.9996 7.84892C15.8708 8.17659 15.4088 8.17659 15.28 7.84892L14.9357 6.9727C14.8964 6.87266 14.8175 6.79347 14.7178 6.75401L13.8448 6.40843C13.5184 6.2792 13.5184 5.81547 13.8448 5.68624L14.7178 5.34066C14.8175 5.30121 14.8964 5.22202 14.9357 5.12198L15.28 4.24575Z"
                            stroke="currentColor"/>
                        <path
                            d="M18.3737 9.70356C18.5025 9.37589 18.9645 9.37589 19.0933 9.70356L19.2188 10.023C19.2581 10.1231 19.337 10.2023 19.4367 10.2417L19.755 10.3677C20.0814 10.497 20.0814 10.9607 19.755 11.0899L19.4367 11.2159C19.337 11.2554 19.2581 11.3346 19.2188 11.4346L19.0933 11.7541C18.9645 12.0817 18.5025 12.0817 18.3737 11.7541L18.2482 11.4346C18.2089 11.3346 18.13 11.2554 18.0303 11.2159L17.712 11.0899C17.3856 10.9607 17.3856 10.497 17.712 10.3677L18.0303 10.2417C18.13 10.2023 18.2089 10.1231 18.2482 10.023L18.3737 9.70356Z"
                            stroke="currentColor"/>
                        <path
                            d="M6.50656 14.6457C6.63531 14.3181 7.09733 14.3181 7.22609 14.6457L7.35162 14.9652C7.39093 15.0653 7.46983 15.1444 7.5695 15.1839L7.8878 15.3099C8.21426 15.4391 8.21426 15.9029 7.8878 16.0321L7.5695 16.1581C7.46983 16.1976 7.39093 16.2767 7.35162 16.3768L7.22609 16.6963C7.09733 17.0239 6.63531 17.0239 6.50656 16.6963L6.38102 16.3768C6.34171 16.2767 6.26281 16.1976 6.16314 16.1581L5.84484 16.0321C5.51838 15.9029 5.51838 15.4391 5.84484 15.3099L6.16314 15.1839C6.26281 15.1444 6.34171 15.0653 6.38102 14.9652L6.50656 14.6457Z"
                            stroke="currentColor"/>
                    </svg>

                    <div class="sidebar_container__menu_name toggle_name">Тест драйв</div>
                </NuxtLink>
                <NuxtLink :class="{'sidebar_container__menu__item_active':isActive('/integrations')}"
                          :to="localePath('/integrations')"
                          class="sidebar_container__menu__item">
                    <svg class="sidebar_container__menu_icon" fill="none" height="24" viewBox="0 0 24 24" width="24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.4 10.4L5.6 10.4L10 5.60001" stroke="currentColor" stroke-linecap="round"
                              stroke-linejoin="round" stroke-width="1.5"/>
                        <path d="M5.6 13.6L18.4 13.6L14 18.4" stroke="currentColor" stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"/>
                    </svg>

                    <div class="sidebar_container__menu_name toggle_name">Интеграции</div>
                </NuxtLink>
            </div>

        </div>
    </aside>
</template>

<style scoped>

.sidebar {
    @apply bg-white transition-all duration-300 overflow-hidden max-w-[236px] w-full border-r-gray-light border-r shrink-0 hidden sm:block dark:bg-dark-white dark:border-r-dark-gray-light;

    &_container {
        @apply flex flex-col gap-4 h-full px-4 ;

        &__logo {
            @apply flex justify-between items-center min-h-[60px] flex-row-reverse dark:text-white;
            padding: 14.5px 0;

            .toggle_button {
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
                @apply text-gray-dark flex px-2 py-3 gap-2 rounded-2xl cursor-pointer hover:bg-bg hover:text-dark text-base font-medium dark:hover:bg-dark-gray-light dark:hover:text-white;

                &_icon {
                    @apply w-6 h-6
                }

                &_name {
                    transition: opacity 1s ease;
                    opacity: 1;
                }

                &_active {
                    @apply bg-bg text-dark dark:bg-dark-bg dark:text-white
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