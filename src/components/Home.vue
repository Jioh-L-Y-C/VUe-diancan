<template>
    <div id="home">
        <div class="bg">
            <h1>欢迎来到本餐厅</h1>
            <h2>又贵又不好吃</h2>
            <Button type="success" size="large" long icon="md-cart" @click="GOTOMENU"> 点击选餐</Button>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            GOTOMENU(){
                //点击选餐跳转
                this.$router.push({name:'menuLink'})
            }
        }
    }  
</script>

<style scoped>
   #home{
       text-align: center;
        background: url('~@/assets/bg.jpg');
        height: 85vh;
        padding: 10% 30%;
   }
   .bg{
       background-color: skyblue;
       margin: 10%;
       padding: 30px 10px;
       border-radius: 10px;
       color:#fff;
      
   }
   h1,h2{
       line-height: 50px;
   }
</style>