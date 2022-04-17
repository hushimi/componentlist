<template>
    <div class="w-4/5 mx-auto pt-3">
		<div class="block">
			<div class="block_label">
				<p>Loading icon</p>
				<a href="https://github.com/hushimi/componentlist/blob/master/src/components/blocks/Loading.vue"
					target="_blank" rel="noopener noreferer">
					Code
				</a>
			</div>
			<Loading></Loading>
		</div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Loading from '@/components/blocks/Loading'

export default defineComponent({
	components: {
		Loading
	},

	setup() {
	},
})
</script>

<style lang="scss" scoped>
</style>