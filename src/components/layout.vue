<style scoped>
    #layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-footer-center{
        text-align: center;
    }
    .layout-right{
        float: right;
    }
</style>
<template>
    <div id="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%',zIndex:'1000'}">
                <Menu mode="horizontal" theme="dark" active-name="1">
                      <div class="layoutnav">
                        <MenuItem name="1" :to="{name:'homeLink'}" >
                            <Icon type="ios-navigate"></Icon>
                            首页
                        </MenuItem>
                        <MenuItem name="2" :to="{path:'/menu'}">
                            <Icon type="ios-keypad"></Icon>
                            菜单
                        </MenuItem>
                        <MenuItem name="3" :to="{name:'adminLink'}">
                            <Icon type="ios-analytics" ></Icon>
                            管理
                        </MenuItem>
                        <MenuItem name="5" :to="{name:'aboutLink'}">
                            <Icon type="ios-paper"></Icon>
                            关于我们
                        </MenuItem>
                      </div>
                     <div class="layout-right" >
                         <MenuItem name="6" :to="{path:'/login'}" v-show="!isLogin">
                            <Icon type='md-book'></Icon>
                            登录
                        </MenuItem>
                         <MenuItem name="7">
                         {{$store.getters.currentUser}}
                        </MenuItem>
                        <MenuItem name="8" :to="{name:'registerLink'}" v-show="!isLogin">
                            <Icon type="logo-buffer"></Icon>
                            注册
                        </MenuItem>
                        <MenuItem  @click.native="OutLogin"  name="9" v-show="isLogin" >
                            <Icon type="logo-buffer"></Icon>
                            退出
                        </MenuItem>
                     </div>
                </Menu>
            </Header>
            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px',padding:'30px'}">
                <router-view></router-view>
            </Content>
            <Footer class="layout-footer-center">2011-2019 &copy; 广东美食你流口水</Footer>
        </Layout>
    </div>
</template>
<script>
    export default {
        created(){
        //   var a = confirm("哈")
        //     console.log(a)
  },
  methods:{
      OutLogin(){
        var OUt =confirm('你确定要退出吗')
          if(OUt==true){
          this.$store.dispatch('SETcurren')
          this.$router.push('/Login')
          }
      }
  },
  computed:{
      //根据state的状态
      currentUser(){
         return this.$store.getters.currentUser
         
      },
      isLogin(){
         return this.$store.getters.isLogin
      }
  }
        
    }
</script>
