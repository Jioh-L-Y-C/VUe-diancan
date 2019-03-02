<template>
  <div>
      <h3>添加新的菜品</h3>
      <p>
        <span>菜名：</span><Input ref="add1" v-model="newFood.name"/>
      </p>
      <p>
        <span>描述：</span><Input  ref="add2" v-model="newFood.description" type="textarea"/>
      </p>
      <p>
        <span>份量：</span><Input  ref="add3" v-model="newFood.size"/>
      </p>
      <p>
        <span>价格：</span><Input  ref="add4" v-model="newFood.price"/>
      </p>
      <Button @click="addMenuItem" type="primary">添加</Button>
  </div>
</template>
<script>
import axios from "axios";
export default {
    data(){
      return{
        newFood:{}
      }
    },
    methods:{
        addMenuItem(){
            // console.log(this.newFood)
            // 数据存储到野狗云中，然后再存储到Vuex本地
            axios.post("/menu.json", this.newFood).then(res=>{
                this.$store.commit("pushToMenuItems", this.newFood)
            })
			tihs
        }
    }
}
</script>
<style scoped>
  .formBox{text-align: center;}
  p{line-height: 70px;}
  p span{display: inline-block;width:50px;}
  .ivu-input-wrapper{width:200px;}
</style>