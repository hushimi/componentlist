<template>
    <div class="w-4/5 mx-auto pt-3">
        <div class="block">
			<div class="block_label">
				<p>Responsive navbar1</p>
				<a href="https://github.com/hushimi/componentlist/blob/master/src/components/blocks/Navbar1.vue"
					target="_blank" rel="noopener noreferer">
					Code
				</a>
			</div>
			<Navbar1></Navbar1>
		</div>
		<div class="block">
			<div class="block_label">
				<p>カテゴリタイトル</p>
				<a href="https://github.com/hushimi/componentlist/blob/master/src/components/blocks/Category.vue"
					target="_blank" rel="noopener noreferer">
					Code
				</a>
			</div>
			<Category></Category>
		</div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Category from '@/components/blocks/Category'
import Navbar1 from '@/components/blocks/Navbar1'

export default defineComponent({
	components: {
		Category,
		Navbar1
	},

	setup() {
	},
})
</script>

<style lang="scss" scoped>
</style>