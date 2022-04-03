<template>
    <div class="relative w-full mx-auto" style="height: 90px;">
        <div class="loading">
            <div class="loading_icon"></div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
	},
})
</script>

<style lang="scss" scoped>
    .loading {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        width: 100%;
        padding: 5px;
        border-radius: 25px;
        background: rgba($color: #73f7f7, $alpha: 0.3);
        &_icon {
            margin: 0 auto;
            width: 50px;
            height: 50px;
            border: 5px solid rgb(26, 108, 97);
            border-radius: 50%;
            border-top-color: transparent;
            animation: spin 1s ease-in-out infinite;
        }
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
</style>