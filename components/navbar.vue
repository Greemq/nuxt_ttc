<script lang="ts" setup>

</script>

<template>
    <nav class="bg-white border-gray-200 py-6" style="padding-left: 57px;padding-right: 57px">
        <div class="flex flex-wrap justify-between items-center mx-auto">
            <div class="flex flex-col">
                <div class="text-2xl font-extrabold"> Lorem ipsum.
                </div>
                <div class="text-lg">Lorem ipsum dolor sit.</div>
            </div>
            <div class="flex" style="gap:30px">
                <div class="flex items-center" style="gap:27px">
                    <div class="flex items-center" style="gap:10px">
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="#3E3E3E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                            <path
                                d="M12 2C9.43223 4.69615 8 8.27674 8 12C8 15.7233 9.43223 19.3038 12 22C14.5678 19.3038 16 15.7233 16 12C16 8.27674 14.5678 4.69615 12 2Z"
                                stroke="#3E3E3E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                            <path d="M2 12H22" stroke="#3E3E3E" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="1.5"/>
                        </svg>
                        <div class="lang">Рус</div>
                    </div>
                    <div class="cursor-pointer">
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.9 20C9.80858 20.9791 12.0041 21.2443 14.0909 20.7478C16.1777 20.2514 18.0186 19.0259 19.2818 17.2922C20.545 15.5586 21.1474 13.4308 20.9806 11.2922C20.8137 9.15366 19.8886 7.14502 18.3718 5.62824C16.855 4.11146 14.8464 3.1863 12.7078 3.01946C10.5693 2.85263 8.44147 3.45509 6.70782 4.71829C4.97417 5.98149 3.74869 7.82236 3.25222 9.90916C2.75575 11.996 3.02094 14.1915 4 16.1L2 22L7.9 20Z"
                                stroke="#3E3E3E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                            <path
                                d="M9.08984 9.00057C9.32495 8.33224 9.789 7.76868 10.3998 7.4097C11.0106 7.05073 11.7287 6.91951 12.427 7.03928C13.1253 7.15906 13.7587 7.52209 14.2149 8.0641C14.6712 8.6061 14.9209 9.29209 14.9198 10.0006C14.9198 12.0006 11.9198 13.0006 11.9198 13.0006"
                                stroke="#3E3E3E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                            <path d="M12 17H12.01" stroke="#3E3E3E" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="1.5"/>
                        </svg>
                    </div>
                    <div class="cursor-pointer">
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 3C10.8065 4.19347 10.136 5.81217 10.136 7.5C10.136 9.18783 10.8065 10.8065 12 12C13.1935 13.1935 14.8122 13.864 16.5 13.864C18.1878 13.864 19.8065 13.1935 21 12C21 13.78 20.4722 15.5201 19.4832 17.0001C18.4943 18.4802 17.0887 19.6337 15.4442 20.3149C13.7996 20.9961 11.99 21.1743 10.2442 20.8271C8.49836 20.4798 6.89472 19.6226 5.63604 18.364C4.37737 17.1053 3.5202 15.5016 3.17294 13.7558C2.82567 12.01 3.0039 10.2004 3.68509 8.55585C4.36628 6.91131 5.51983 5.50571 6.99987 4.51677C8.47991 3.52784 10.22 3 12 3Z"
                                stroke="#3E3E3E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
                        </svg>
                    </div>
                </div>
                <div class="nav_profile">
                    <div>PP</div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.nav_profile {
    width: 51px;
    height: 51px;
    background-color: #50B748;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.nav_profile {
    font-size: 20px;
    font-weight: 700;
    color: white;
    line-height: 21px;
    letter-spacing: -0.2px;
}

.lang {
    color: #3E3E3E;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
}
</style>