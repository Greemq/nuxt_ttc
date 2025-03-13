<script setup>
import {computed} from "vue";
import UiTabs from "@/components/Ui/UiTabs.vue";

const props = defineProps({
    modelValue: {type: Array, required: true},
    label: {type: String, default: null}
});
const emit = defineEmits(["update:modelValue"]);

const deleteFile = (index) => {
    const updatedFiles = [...props.modelValue];
    updatedFiles.splice(index, 1);
    emit("update:modelValue", updatedFiles);
};

const filesInfo = computed(() =>
    props.modelValue.map((file) => ({
        type: useNuxtApp().$getFileType(file),
        info: useNuxtApp().$getFileInfo(file)
    }))
);

const updateFiles = (newFiles) => {
    emit("update:modelValue", newFiles);
};
const tabsList = ref([
    {
        id: 1,
        name: 'Загрузить документ'
    },
    {
        id: 2,
        name: 'Добавить ссылку на google документ'
    },

]);
const activeTab = ref(1);
const googleDoc = ref(null);
const googleXlsx = ref(null);
</script>


<template>
    <div class="flex flex-col gap-6">
        <div v-if="label" class="font-medium">
            {{
                label
            }}
        </div>

        <ui-tabs v-model="activeTab" :tabs="tabsList"/>
        <template v-if="activeTab==1">
            <ui-file-upload :model-value="props.modelValue" multiple @update:model-value="updateFiles"/>

            <div class="flex flex-col">
                <div v-for="(file, index) in filesInfo" :key="index" class="file_info">
                    <img
                        v-if="file.type == 'doc'"
                        alt=""
                        class="file_info__icon"
                        src="/assets/images/icons/doc.svg"
                    />
                    <img
                        v-else-if="file.type == 'xlsx'"
                        alt=""
                        class="file_info__icon"
                        src="/assets/images/icons/xlsx.svg"
                    />
                    <img
                        v-else-if="file.type == 'xls'"
                        alt=""
                        class="file_info__icon"
                        src="/assets/images/icons/xls.svg"
                    />
                    <img
                        v-else-if="file.type == 'txt'"
                        alt=""
                        class="file_info__icon"
                        src="/assets/images/icons/txt.svg"
                    />
                    <img
                        v-else-if="file.type == 'pdf'"
                        alt=""
                        class="file_info__icon"
                        src="/assets/images/icons/pdf.svg"
                    />

                    <div class="file_info__container">
                        <div class="file_info__name">{{ file.info.name }}</div>
                        <div class="file_info__size">{{ file.info.size }}</div>
                    </div>

                    <div class="file_info__delete" @click="deleteFile(index)">
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.7373 5.6C10.0668 4.66785 10.9558 4 12.0007 4C13.0457 4 13.9347 4.66785 14.2642 5.6"
                                stroke="#ACACAC"
                                stroke-linecap="round"
                                stroke-width="1.5"
                            />
                            <path d="M18.8008 7.20001H5.20068" stroke="#ACACAC" stroke-linecap="round"
                                  stroke-width="1.5"/>
                            <path
                                d="M17.4675 9.20001L17.0996 14.7193C16.958 16.8432 16.8872 17.9052 16.1952 18.5526C15.5032 19.2 14.4388 19.2 12.3102 19.2H11.6915C9.56286 19.2 8.49854 19.2 7.80653 18.5526C7.11453 17.9052 7.04373 16.8432 6.90213 14.7193L6.53418 9.20001"
                                stroke="#ACACAC"
                                stroke-linecap="round"
                                stroke-width="1.5"
                            />
                            <path d="M10.001 11.2L10.401 15.2" stroke="#ACACAC" stroke-linecap="round"
                                  stroke-width="1.5"/>
                            <path d="M14.0011 11.2L13.6011 15.2" stroke="#ACACAC" stroke-linecap="round"
                                  stroke-width="1.5"/>
                        </svg>
                    </div>
                </div>
            </div>
        </template>
        <template v-else-if="activeTab==2">
            <ui-notification
                label="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est maiores, mollitia numquam quo repellat rerum? Accusantium animi harum illo in, labore laborum molestiae, perferendis quae, reiciendis ullam voluptate voluptatum."
                type="info"/>
            <div class="online_docs">
                <div class="online_docs__item">
                    <div class="online_docs__item__content">
                        <img alt="" src="assets/images/icons/Google%20doc.svg">
                        <ui-input v-model="googleDoc" label="link to google"/>
                        <ui-button :disabled="!googleDoc" label="Добавить" type="primary"/>
                    </div>
                    <ui-notification label="Ccылка успешно добавлена" type="success"/>
                </div>
                <div class="online_docs__item">
                    <div class="online_docs__item__content">
                        <img alt="" src="assets/images/icons/Google%20sheet.svg">
                        <ui-input v-model="googleXlsx" label="link to google"/>
                        <ui-button :disabled="!googleXlsx" label="Добавить" type="primary"/>
                    </div>
                    <ui-notification label="Ccылка успешно добавлена" type="success"/>
                </div>

            </div>
        </template>
    </div>
</template>

<style scoped>

.file_info {
    @apply flex py-2 w-full border-b border-gray-light items-center max-w-full;

    &__icon {
        @apply w-10 h-10
    }

    &__container {
        @apply flex flex-col justify-center pl-2 flex-grow min-w-0;

    }

    &__delete {
        @apply w-6 h-6 cursor-pointer;
    }

    &__name {
        @apply font-normal text-sm truncate w-full;;
    }

    &__size {
        @apply font-normal text-xs text-gray;
    }
}

.file_info:last-child {
    @apply border-0
}

.online_docs {
    @apply flex flex-col gap-4;

    &__item {
        @apply border border-gray-light flex flex-col gap-4 p-4 rounded-2xl;

        &__content {
            @apply flex gap-2  items-end;

            img {
                @apply w-10 h-10;
            }
        }

    }
}
</style>