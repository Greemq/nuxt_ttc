export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('getFileInfo', (file) => {
        if (file) {
            return {
                name: file.name,
                size: (file.size / 1024).toFixed(2) + ' KB',
                format: file.type.split('/')[1],
            };
        }
        return null;
    });

    nuxtApp.provide('getFileType', (file) => {
        if (!file || !(file instanceof File)) {
            return 'unknown';
        }

        const mimeType = file.type;

        const extensions = {
            'application/pdf': 'pdf',
            'text/plain': 'txt',
            'application/msword': 'doc',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
            'application/vnd.ms-excel': 'xls',
        };

        return extensions[mimeType] || 'unknown';
    });

    nuxtApp.provide("getFileIconPath", (fileType) => {
        return `/images/icons/${fileType}.svg`;
    });
});
