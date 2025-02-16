<script lang="ts" setup>
const email=ref('');
</script>

<template>
    <div class="w-full h-screen">
        <div class="flex justify-center h-full items-center">
            <div class="flex flex-col justify-center items-center">
                <div class="font-medium text-3xl mb-10">Регистрация</div>
                <div class="flex items-center space-x-0 gap-0">
                    <input v-model="email" class="focus:outline-none border-1 border-black focus:ring-0" type="text">
                    <button class="px-4 py-2 text-white border-1 cursor-pointer"
                            style="background-color: black;border-color: black"
                            @click="$router.push('panel')">Зарегистрироваться
                    </button>

                </div>
                <div class="flex items-center gap-8 pt-20">
                    <div>Lorem ipsum dolor sit amet.</div>
                    <div>Lorem ipsum dolor sit amet.</div>
                    <div>Lorem ipsum dolor sit amet.</div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>

</style>