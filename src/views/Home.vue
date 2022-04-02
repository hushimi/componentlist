<template>
    <div class="w-4/5 mx-auto pt-3">
		<div class="block">
			<div class="block_label">
				<p>カテゴリタイトル</p>
				<a href="#">Category.vue</a>
			</div>
			<Category></Category>
		</div>
		<div class="block">
			<div class="block_label">
				<p>カテゴリタイトル</p>
				<a href="#">Category.vue</a>
			</div>
			<Category></Category>
		</div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Category from '@/components/blocks/Category'

export default defineComponent({
	components: {
		Category
	},

	setup() {
	},
})
</script>

<style lang="scss" scoped>
</style>