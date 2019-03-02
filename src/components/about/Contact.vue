<template>
    <div style="padding:20px">
         <Card>
             <p slot="title">联系我们</p> 
            <Button @click="gotophone">联系方式</Button>
            <Button :to="{name:'personLink'}"  icon="ios-mail-outline">联系人</Button> 
        </Card>
         <router-view></router-view>
   
    </div>
</template>

<script>
    export default {
        methods:{
            gotophone(){
                this.$router.push({name:'phoneLink'})
            }
        }
    }
</script>

<style scoped>

</style>