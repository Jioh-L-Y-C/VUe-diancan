<template>
    <div class="box">
        <h1>管理页面-添加菜谱</h1>
        <Row>
            <!-- 添加菜谱组件 -->
            <Col span="15">
                <NewFood></NewFood>
            </Col>

            <!-- 展示添加过的菜单列表 -->
            <Col span="9">
                <Card>
                    <p slot="title">菜单列表</p>
                    <ul>
                        <li>
                            <span>菜名</span><span>价格</span><span>份量</span>           
                        </li>
                        <li v-for="item in getMenuItems" :key="item.id">
                            <span>{{item.name}}</span>
                            <span>￥{{item.price}}</span>
                            <span>{{item.size}}</span>
                            <Button type="primary" @click="deleteData(item)" icon="md-remove-circle" size="small" ghost>
                            </Button>    
                        </li>
                    </ul>
                </Card>
            </Col>
        </Row>
    </div>
</template>
<script>
    import axios from "axios"
    import NewFood from "./NewFood.vue"
    export default {
        created(){
            // 进入管理页面立马请求查询野狗云的数据，进行渲染和存储到Vuex
            axios.get("/menu.json").then(res=>{
                let menuArr = []
                for(let key in res.data){
                    // 存储key为id，后面删除要用到id
                    res.data[key].id = key
                    menuArr.push(res.data[key])
                }

                // 将请求到的数据，存储到Vuex本地的state
                this.$store.commit("setMenuItems", menuArr);
            })
        },
        computed:{
            getMenuItems(){
                // 获取Vuex本地的数据
                // return this.$store.state.menuItems
                return this.$store.getters.getMenuItems
            },
        },
        methods:{
           deleteData(item){
               // 根据id删除野狗云的数据，然后再删除本地state中的数据影响视图更新
               axios.delete(`/menu/${item.id}.json`).then(data=>{
                   this.$store.commit("removeMenuItems", item)
               })
           }
        },
        components:{
           NewFood
        }
    }
</script>
<style scoped>
  .box{padding:20px;}
  .box ul li{list-style:none;height:40px;} 
  .box ul li span{float: left;width: 100px;text-align: center;} 
  .box ul li Button{float: right;} 
</style>