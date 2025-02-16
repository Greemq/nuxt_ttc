<script lang="ts" setup>

</script>

<template>
    <aside class="text-white" style="width: 295px;box-shadow: 8px 0 10px 0 rgba(113, 113, 214, 0.10);">
        <div class="text-center flex justify-center mt-8">
            <img src="/assets/images/logo.svg" style="width: 108px;">
        </div>
        <div class="flex flex-col p-5" style="gap:5px">
            <div class="my-nav-button nav_active flex flex-row justify-center gap-2">
                <svg fill="none" height="25" viewBox="0 0 24 25" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16 21.5V19.5C16 18.4391 15.5786 17.4217 14.8284 16.6716C14.0783 15.9214 13.0609 15.5 12 15.5H6C4.93913 15.5 3.92172 15.9214 3.17157 16.6716C2.42143 17.4217 2 18.4391 2 19.5V21.5"
                        stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    <path
                        d="M9 11.5C11.2091 11.5 13 9.70914 13 7.5C13 5.29086 11.2091 3.5 9 3.5C6.79086 3.5 5 5.29086 5 7.5C5 9.70914 6.79086 11.5 9 11.5Z"
                        stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    <path
                        d="M22 21.5009V19.5009C21.9993 18.6146 21.7044 17.7536 21.1614 17.0532C20.6184 16.3527 19.8581 15.8524 19 15.6309"
                        stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    <path
                        d="M16 3.63086C16.8604 3.85116 17.623 4.35156 18.1676 5.05317C18.7122 5.75478 19.0078 6.61769 19.0078 7.50586C19.0078 8.39403 18.7122 9.25694 18.1676 9.95855C17.623 10.6602 16.8604 11.1606 16 11.3809"
                        stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>


                Ассистенты
            </div>
            <div class="py-2 my-nav-button flex flex-row justify-center gap-2">
                <svg fill="none" height="25" viewBox="0 0 24 25" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 7.5V21.5" stroke="#3E3E3E" stroke-linecap="round" stroke-linejoin="round"
                          stroke-opacity="0.7" stroke-width="1.5"/>
                    <path
                        d="M3 18.5C2.73478 18.5 2.48043 18.3946 2.29289 18.2071C2.10536 18.0196 2 17.7652 2 17.5V4.5C2 4.23478 2.10536 3.98043 2.29289 3.79289C2.48043 3.60536 2.73478 3.5 3 3.5H8C9.06087 3.5 10.0783 3.92143 10.8284 4.67157C11.5786 5.42172 12 6.43913 12 7.5C12 6.43913 12.4214 5.42172 13.1716 4.67157C13.9217 3.92143 14.9391 3.5 16 3.5H21C21.2652 3.5 21.5196 3.60536 21.7071 3.79289C21.8946 3.98043 22 4.23478 22 4.5V17.5C22 17.7652 21.8946 18.0196 21.7071 18.2071C21.5196 18.3946 21.2652 18.5 21 18.5H15C14.2044 18.5 13.4413 18.8161 12.8787 19.3787C12.3161 19.9413 12 20.7044 12 21.5C12 20.7044 11.6839 19.9413 11.1213 19.3787C10.5587 18.8161 9.79565 18.5 9 18.5H3Z"
                        stroke="#3E3E3E" stroke-linecap="round" stroke-linejoin="round" stroke-opacity="0.7"
                        stroke-width="1.5"/>
                </svg>

                Центр знаний
            </div>
        </div>
    </aside>
</template>

<style scoped>
.my-nav-button {
    border-radius: 14px;
    cursor: pointer;
    color: #777777;
    padding-top: 17px;
    padding-bottom: 16px;
    font-size: 18px;
    font-style: normal;

    line-height: normal;
    width: 255px;
}

.my-nav-button:hover {
    background-color: #f6f8fa;
    color: black !important;
    font-weight: 700;
}

.nav_active {
    background-color: #f6f8fa;
    font-weight: 700;
    color: black !important;
}

</style>