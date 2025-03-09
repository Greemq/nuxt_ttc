<script setup>

</script>

<template>
    <div class="nav">
        <div class="nav_right">
            <div class="nav_right__profile">
                <div class="nav_right__profile_1">
                    <div class="nav_right__profile_avatar">
                        <span>A</span>
                    </div>
                    <div class="nav_right__profile_name">
                        nameda asd
                    </div>
                </div>
                <img src="assets/images/icons/Down.svg"/>
            </div>
            <div class="nav_right__icons">
                <div>
                    <img src="assets/images/icons/Message.svg" alt="">
                </div>
                <div>
                    <img src="assets/images/icons/Notifications.svg">
                </div>
            </div>
            <div class="nav_right__locale">
                <div>Ru</div>
                <img src="assets/images/icons/Down.svg">
            </div>
        </div>
<!--        <div class="nav_left">-->
<!--            left-->
<!--        </div>-->
    </div>
</template>

<style scoped>
.nav {
    @apply flex w-full justify-between px-5 py-3 flex-row-reverse border-b border-b-gray-light;

    &_right {
        @apply self-end flex gap-8 flex-row-reverse justify-center items-center;

        &__profile {
            @apply flex gap-4 py-2;

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
        &__icons{
            @apply flex gap-6;
            div {
                @apply w-10 h-10 flex justify-center items-center rounded-full bg-bg;
            }
        }
        &__locale{
            @apply flex items-center justify-center gap-2;
            font-size: 16px;
            font-weight: 500;
            line-height: 24px;
        }
    }
}
</style>