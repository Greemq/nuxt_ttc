<script setup>
import { ref, defineProps, watch } from "vue";

const inputFile = ref(null);
const selectedFiles = ref([]);
const { multiple } = defineProps({
  multiple: { type: Boolean, default: false }
});

// Определяем emits
const emit = defineEmits(["update:modelValue"]);

const emitFiles = () => {
  emit("update:modelValue", selectedFiles.value);
};

const handleDrop = (e) => {
  e.preventDefault();
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    // Преобразуем в массив и обновляем selectedFiles
    selectedFiles.value = Array.from(files);
    emitFiles();
  }
};

const handleChange = (e) => {
  const files = e.target.files;
  if (files.length > 0) {
    selectedFiles.value = Array.from(files);
    emitFiles();
  }
};

// Наблюдаем за изменениями в selectedFiles и обновляем v-model
watch(selectedFiles, (newFiles) => {
  emit("update:modelValue", newFiles);
});
</script>

<template>
  <div class="file-form" @drop="handleDrop" @dragover.prevent>
    <input
      ref="inputFile"
      class="hidden"
      type="file"
      :multiple="multiple"
      @change="handleChange"
    />
    <div><span @click="inputFile?.click()">Загрузите</span> документ или перетащите его сюда</div>
    <div>Форматы: pdf, txt, doc, docx, xlsx, xls</div>
    <div>Максимальный размер: 10 мб</div>
  </div>
</template>

<style scoped>
.file-form {
  @apply border rounded-lg border-primary border-dashed p-4 text-gray flex flex-col gap-2 justify-center;
}
::v-deep(div:first-of-type) {
  @apply text-gray-dark font-medium;
}
span {
  @apply text-primary underline cursor-pointer decoration-solid;
}
</style>