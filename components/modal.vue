<script>
import {ref} from 'vue';

export default {
    name: 'Modal',
    setup() {
        const isVisible = ref(false);
        const open = () => {
            isVisible.value = true;
        };
        const close = () => {
            isVisible.value = false;
        };
        return {isVisible, open, close};
    }
};
</script>

<template>
    <div v-if="isVisible" class="modal">
        <div class="modal_body">
            <div class="modal_header">
                <div class="modal_close" @click="close">
                    <img src="/assets/images/close.svg">
                </div>
            </div>
            <div class="modal_content">
                <slot/>
            </div>
        </div>
        <div class="modal_overlay" @click="close"></div>
    </div>
</template>

<style scoped>
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(5px);

    .modal_overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        cursor: pointer;
    }

    .modal_body {
        width: 900px;
        background-color: white;
        min-height: 50%;
        border-radius: 20px;
        z-index: 9999999999;


        .modal_header {
            display: flex;
            justify-content: end;
            padding: 20px 20px 0 20px;
            text-align: end;

            .modal_close {
                height: 30px;
                width: 30px;
                background: #3E3E3E;
                border-radius: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
        }

        .modal_content {
            padding: 0 85px 40px 85px;

        }

    }

}

</style>