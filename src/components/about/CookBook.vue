<template>
    <div style="padding:20px">
        <Card>
            <p slot="title">点餐</p>
            <p class="flet">雷洛</p>
            <p class="flet">
				<span>白山猪手</span>
				已点<input type="checkbox" v-model="ok" />
				</p>
        </Card>
    </div>
</template>

<script>
    export default {
			data(){
				return{
					ok:true
				}
			}
    }
</script>

<style scoped>

</style>