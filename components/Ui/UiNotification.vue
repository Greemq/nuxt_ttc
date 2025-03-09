<script setup>
defineProps({
    label: {
        default: null,
        type: String,
        required: true
    },
    type: {
        default: 'info',
        type: String
    }
});

</script>

<template>
    <div
        :class="{'notification_info':type=='info','notification_error':type=='error','notification_success':type=='success'}"
        class="notification">
        <div class="notification_icon">
            <svg v-if="type=='info'" fill="none" height="24" viewBox="0 0 24 24" width="24"
                 xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 16V11.2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                <circle cx="0.8" cy="0.8" fill="currentColor" r="0.8" transform="matrix(1 0 0 -1 11.2 9.60001)"/>
            </svg>
            <svg v-else-if="type=='error'" fill="none" height="24" viewBox="0 0 24 24" width="24"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M6.64937 11.0092C8.98406 6.86972 10.1514 4.79999 12 4.79999C13.8486 4.79999 15.0159 6.86972 17.3506 11.0092L17.6416 11.525C19.5817 14.9649 20.5517 16.6848 19.675 17.9424C18.7983 19.2 16.6292 19.2 12.2909 19.2H11.7091C7.37085 19.2 5.20174 19.2 4.32501 17.9424C3.44827 16.6848 4.41833 14.9649 6.35844 11.525L6.64937 11.0092Z"
                    stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 8.79999V12.8" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"/>
                <circle cx="12" cy="15.2" fill="currentColor" r="0.8"/>
            </svg>
            <svg v-else-if="type=='success'" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 14L8.5 17.5L19 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="1.5"/>
            </svg>
        </div>
        <div class="notification_text">
            {{ label }}
        </div>
    </div>
</template>

<style scoped>
.notification {
    @apply w-full flex rounded-lg px-4 py-3 cursor-default select-none;

    &_error {
        @apply text-error;
        background-color: #FDE8D9;
    }

    &_info {
        @apply text-info;
        background-color: #E6F0FF;
    }

    &_success {
        @apply text-success;
        background-color: #E2FFF5;
    }

    gap: 10px;

    &_icon {
        @apply w-5 h-5 ;
    }

    &_text {

    }
}
</style>