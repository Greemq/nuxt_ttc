<script setup>

import ProfileEmployeeCard from "~/components/profile/ProfileEmployeeCard.vue";
</script>

<template>
    <div class="flex">
        <ui-button icon label="Пригласить"/>
    </div>


    <div class="profile_employee">
        <table class="table-fixed">
            <tr>
                <th class="w-12"></th>
                <th class="w-auto">name1</th>
                <th class="w-auto">comp1</th>
                <th class="px-1 w-[10%]">action</th>
            </tr>
            <ProfileEmployeeCard/>
            <ProfileEmployeeCard/>
            <ProfileEmployeeCard/>

        </table>
    </div>
</template>

<style scoped>
.profile_employee {
    @apply bg-white rounded-3xl p-6 flex flex-col gap-6;

    table {
        @apply w-full table-auto border-separate;
        /*
        border-collapse: separate;

         */
        border-spacing: 0;

        tr {
            th {
                @apply text-left p-4;
            }

        }
    }


}
</style>