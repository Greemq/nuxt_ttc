import { defineNuxtPlugin } from "#app";
import Toast, { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";
import ToastSuccess from "~/components/ToastSuccess.vue";
import ToastError from "~/components/ToastError.vue";

export default defineNuxtPlugin((nuxtApp) => {
    const options = {
        position: "bottom-right",
        timeout: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        hideProgressBar: true,
        icon: true,
        rtl: false,
        closeButton: false,
        toastClassName: "custom-toast",
        toastDefaults: {
            success: { icon: ToastSuccess },
            error: { icon: ToastError },
        },
    };

    nuxtApp.vueApp.use(Toast, options);

    const toast = useToast();
    nuxtApp.provide("toast", toast);
});
