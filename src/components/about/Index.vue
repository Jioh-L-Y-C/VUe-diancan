<template>
    <div id="box">
        <h1>关于我们首页</h1>
        <br/>
      <Row>
          <Col span="5">
              <Menu theme="light">
                <MenuItem name="1" :to="{name:'historyLink'}">历史订单</MenuItem>
                <MenuItem name="2" :to="{name:'contactLink'}">联系我们</MenuItem>
                <MenuItem name="3" :to="{name:'cookbookLink'}">点餐菜单</MenuItem>
                <MenuItem name="4" :to="{name:'deliveryLink'}">送餐信息</MenuItem>
            </Menu>
           </Col>
           <Col span="15">
           <router-view></router-view>
           </Col>
      </Row>
    </div>
</template>

<script>

    export default {
        created(){
    console.log(this.$router)
}
        
    }
</script>

<style scoped>

</style>