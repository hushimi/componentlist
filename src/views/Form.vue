<template>
    <div class="w-4/5 mx-auto pt-3">

		<div class="block">
			<div class="block_label">
				<p>Textbox & label</p>
				<a href="https://github.com/hushimi/componentlist/blob/master/src/components/blocks/Textbox.vue"
					target="_blank" rel="noopener noreferer">
					Code
				</a>
			</div>
			<TextBox></TextBox>
		</div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import TextBox from '@/components/blocks/Textbox'

export default defineComponent({
	components: {
		TextBox,
	},

	setup() {
	},
})
</script>

<style lang="scss" scoped>
</style>