<template>
    <div class="w-4/5 mx-auto pt-3">
        <div class="component-title text-center w-full">
            <h4>Component category</h4>
        </div>
        <div class="mx-auto" style="max-width: 560px;">
            <div class="zoombox" @click="movePage('/common')">
                <p class="zoombox_title">Common</p>
            </div>
            <div class="zoombox" @click="movePage('/form')">
                <p class="zoombox_title">Form</p>
            </div>
            <div class="zoombox" @click="movePage('/tables')">
                <p class="zoombox_title">Tables</p>
            </div>
            <div class="zoombox" @click="movePage('/animation')">
                <p class="zoombox_title">Animation</p>
            </div>
        </div>

    </div>
</template>

<script>
import { defineComponent } from 'vue'
import {useRouter} from 'vue-router'

export default defineComponent({
	setup() {
		const router = useRouter()
		const movePage = (link) => {
			router.push(link)
		}

		return {
			movePage,
		}
	},
})
</script>

<style lang="scss" scoped>
.zoombox {
    display: inline-block;
    cursor: pointer;
    background: #fefeff;
    border: 0;
    border-radius: 25px;
    width: 150px;
    height: 150px;
    position: relative;
    transition: all 200ms ease-in;
    transform: scale(0.5);
    &:hover {
        box-shadow: 0px 0px 80px #545455;
        z-index: 2;
        transition: all 200ms ease-in;
        transform: scale(0.6);
    }
    &_title {
        text-align: center;
        font-size: 1.8rem;
        font-weight: bold;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #2ecb94;
    }
}

.component-title {
    border-left: 5px #35252d solid;
    border-right: 5px #35252d solid;
    padding-left: 9px;
}
</style>