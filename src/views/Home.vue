<template>
    <div class="w-4/5 mx-auto pt-3">
		<div class="block">
			<div class="block_label">
				<p>カテゴリタイトル</p>
				<a href="https://github.com/hushimi/componentlist/blob/master/src/components/blocks/Category.vue"
					target="_blank" rel="noopener noreferer">
					Category.vue
				</a>
			</div>
			<Category></Category>
		</div>

		<div class="block">
			<div class="block_label">
				<p>Textbox & label</p>
				<a href="https://github.com/hushimi/componentlist/blob/master/src/components/blocks/Textbox.vue"
					target="_blank" rel="noopener noreferer">
					Textbox.vue
				</a>
			</div>
			<TextBox></TextBox>
		</div>

		<div class="block">
			<div class="block_label">
				<p>Loading icon</p>
				<a href="https://github.com/hushimi/componentlist/blob/master/src/components/blocks/Loading.vue"
					target="_blank" rel="noopener noreferer">
					Loading.vue
				</a>
			</div>
			<Loading></Loading>
		</div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Category from '@/components/blocks/Category'
import TextBox from '@/components/blocks/Textbox'
import Loading from '@/components/blocks/Loading'

export default defineComponent({
	components: {
		Category,
		TextBox,
		Loading
	},

	setup() {
	},
})
</script>

<style lang="scss" scoped>
</style>