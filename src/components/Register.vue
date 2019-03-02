
<template>
    <div id="register">
          <h1>注册页面啊</h1>
        <div class="box">
         <form @submit.prevent="onSubmit">
             <p>
             <span>账号:</span><Input  v-model="email" prefix="ios-contact" placeholder="请输入你的账号" style="width: 400px" />
            </p>
            <p>
            <span>请输入密码:</span><Input v-model="password" type="password" placeholder="请输入你的密码" style="width:400px"/>
            <span>再次输入密码:</span><Input v-model="confirmPassword" placeholder="再次输入密码" style="width:400px"/>
            </p>
            <Button type="success" html-type="submit" style="width:200px">注册</Button>
         </form>
        </div>
    </div>
</template>
<script>
    import axios  from "axios"
    export default {
        data(){
            return {
                email:'',
                password:'',
                confirmPassword:''
            }
        },
        methods:{
            onSubmit(){
               
                if(this.email==''||this.password==''||this.confirmPassword==''){
                    this.$Message.error('请输入账号和密码') 
                    return;
                }
                //验证两次密码是否一致
                if(this.password===this.confirmPassword){
                    //如果一致就存到数据库中去
                    //数据以对象传过去
                    const FormData={
                        id : Date.now(),
                        email : this.email,
                        password : this.password,
                        confirmPassword : this.confirmPassword
                    }
                    //发起异步请求
                    axios.post("/users.json",FormData).then((data)=>{
                         this.$Message.success('注册成功,即将跳转到登录页面');
                         var self=this
                         setTimeout(function () {
                             self.$router.push({name:"loginLink"})
                         }, 2000);
                    })

                    //发请求该用户是否存在
                    // axios.get("/users.json").then((data)=>{
                    //     console.log()
                    // })

                }else{
                    this.$Message.error('两次密码输入不一致,请重新输入') 
                }
            }
        }
    }
</script>


<style scoped>
    #register{
        text-align: center;
    }
    p{
        margin: 10px 0;
        line-height: 40px;
    }
    .box{
        padding: 10px ;
        background-color: black;
        width: 440px;
        margin: 30px auto;
        border-radius: 10px;
          
    }
    span{
        margin:0 10px;
        font-size: 16px;
        color:#fff;
    }
</style>

