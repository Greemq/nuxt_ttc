<script setup>
import {useHead, useI18n} from '#imports';

const {locale} = useI18n();

useHead({
    htmlAttrs: {
        lang: locale
    }
});
</script>
<template>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>