<template>
	<div class="mytemplate">
		<h1>this is a title</h1>
	</div>	
</template>
<script>
export default {
	data() {
		return {
			attr: ''
		}
	},
	created() {
		console.log(this.$ref.tit)
	}
}
</script>
<style scoped rel="stylesheet/scss" lang="scss">
	
</style>