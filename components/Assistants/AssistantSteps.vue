<script setup>
defineProps({
    step: {default: 1, type: Number},
    steps: {default: [], type: Array}
});

</script>

<template>
    <div class="assistant-steps">
        <div class="assistant-steps_body">
            <div v-for="item in steps" :class="{'passed':item.step<step,'active':item.step==step}"
                 class="assistant-steps__item">
                <div class="assistant-steps__item__icon">{{ item.step }}</div>
                <div class="assistant-steps__item__text">{{ item.name }}</div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.assistant-steps {
    @apply w-full pl-6 ;

    &_body {
        @apply bg-white w-full h-auto rounded-3xl max-w-[255px] flex flex-col p-6 gap-4;
    }

    &__item {
        @apply flex items-center gap-3 text-gray;

        &__icon {
            @apply min-w-10 min-h-10 w-10 h-10 bg-gray-light border border-gray-light text-gray rounded-full flex items-center justify-center;
        }

        &__text {
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
        }

        &.active {
            .assistant-steps__item__icon {
                @apply bg-white border border-primary text-primary
            }

            .assistant-steps__item__text {
                @apply text-dark
            }
        }

        &.passed {
            .assistant-steps__item__icon {
                @apply bg-primary border border-primary text-white
            }

            .assistant-steps__item__text {
                @apply text-dark
            }
        }

    }

}
</style>