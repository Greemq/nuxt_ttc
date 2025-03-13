<script setup>
import {useHead, useI18n} from '#imports';

const {locale} = useI18n();

useHead({
    htmlAttrs: {
        lang: locale
    }
});
useSeoMeta({
    title: 'ttc',
    ogTitle: 'ttc',
    description: 'ttc ai',
    ogDescription: 'ttc ai proj',
    ogImage: '/images/logo_1.svg'
});
</script>
<template>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>