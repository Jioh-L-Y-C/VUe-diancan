<template>
    <div id="home">
          <h1>登录页面啊</h1>
        <div class="box">
         <form > 
         <p>
             <span>账号:</span><Input type="email" v-model="email" prefix="ios-contact" placeholder="请输入你的账号" style="width: 400px" />
        </p>
        <p>
            <span>密码:</span><Input  type="password" v-model="password" placeholder="请输入你的密码" style="width:400px"/>
        </p>
        <Button type="success" style="width:200px" @click="LOGIN">登录</Button>
         </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
            data(){
                return {
                    email:'',
                    password:''
                }
            },
//              beforeRouteEnter: (to, from, next) => {
//        alert("Hello " + this.name);
//        next();
//        next(vm =>{
//            console.log(vm)
//        })
// },
            methods:{
                LOGIN(){
                    //输入框不能为空
                   if(this.email==''||this.password==''){
                       this.$Message.error("账户密码不能为空！");
                   }
                   //然后发去请求从野狗云上拿回数据,遍历数据存起来
                   axios.get("/users.json").then((res)=>{
                        var user=[];
                       for(let k in res.data){
                            user.push(res.data[k])
                       }

                 //拿到数据后和用户输入的账号和密码是否一样得到所有账号密码，进行过滤筛选
                //    ，如填写的邮箱和密码跟数据库的一致则返回结果数组
                let result = user.filter((item)=>{
                        return item.email === this.email && item.password === this.password
                    })

                    //然后判断如果长度大于0就是有
                    if(result.length>0&&result!=null){
                        //跳转到首页去
                        this.$router.push({name:'homeLink'});
                        //并把用户的账号传过去
                        this.$store.dispatch("SETcurren",result[0].email)
                       
                        // this.$store.mutations("Changeislogin",{isLogin})

                    }else{
                        this.$Message.error("账户密码不正确！")
                        //否则把用户明清掉
                        this.$store.dispatch("SETcurren",null)
                    }
                   })
                 
                }
            }
    }
</script>

<style scoped>
    #home{
        width: 100vw;
      background-color: black;  
        text-align: center; 
        height: 100vh;
        position: absolute;
        top:0;
        left: 0;
        /* z-index: 10000000; */
    }
    p{
        margin: 30px 0;
        line-height: 30px;
    }
    .box{
        padding: 10px ;
        background-color: rgba(255,255,255,0.5);
        width: 440px;
        margin: 50px auto;
        border-radius: 10px;
      
          
    }
   p span{
        margin:0 10px;
        font-size: 16px;
        color:black;
        display: inline-block;
    }
    h1{
        color: aliceblue;
        padding: 20px;
    }
</style>