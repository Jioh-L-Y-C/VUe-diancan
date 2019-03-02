<template>
    <div class="box">
        <h1>菜单-用户点餐界面</h1>
        
        <Row>
            <!-- 左边菜单 -->
            <Col span="16">
                <h2><Icon type="md-menu" />菜单列表：</h2>
                <table class="table">
                    <tr>
                        <th>菜名</th>
                        <th>份量</th>
                        <th>价格</th>
                        <th>加入购物车</th>
                    </tr>
                    <tr v-for="item in getMenuItems">
                        <td>{{item.name}}</td>
                        <td>{{item.size}}</td>
                        <td>{{item.price}}</td>
                        <td>
                            <Button @click="addToCart(item)" type="primary" size="small">+
                            </Button>
                        </td>
                    </tr>
                </table>
            </Col>

            <!-- 右边购物车 -->
            <Col span="8">
                <h2><Icon type="md-cart" />购物车：</h2>
                <div v-if="carts.length > 0">
                    <table class="table2">
                        <tr>
                            <th>菜名</th>
                            <th>份量</th>
                            <th>价格</th>
                            <th>数量</th>
                        </tr>
                        <tr v-for="item in carts">
                            <td>{{item.name}}</td>
                            <td>{{item.size}}</td>
                            <td>{{item.price * item.number}}</td>
                            <td>
                                <Button @click="minus(item)" type="primary" size="small">
                                    -
                                </Button>
                                <span>{{item.number}}</span>
                                <Button @click="add(item)" type="primary" size="small">
                                    +
                                </Button>
                            </td>
                        </tr>
                    </table>
                    <h3 class="total">总价：{{total + "RMB"}}</h3>
                    <Button type="primary">提交</Button>
               </div>
               <div v-else> {{cartsText}}</div>
            </Col>
        </Row>
    </div>
</template>
<script>
    import axios from "axios"
    export default {
        created(){
            axios.get("/menu.json").then(res=>{
                // 将请求到的数据，存储到Vuex本地的state
                // console.log(res.data)
                this.$store.commit("setMenuItems", res.data);
            })
        },
        data(){
            return {
                carts:[],
                cartsText:"购物车没有任何商品"
            }
        },
        computed:{
            getMenuItems(){
                // 获取Vuex本地的数据
                // return this.$store.state.menuItems
                return this.$store.getters.getMenuItems
            },
            total(){
                let totalCost = 0;
                for(let i in this.carts){
                   totalCost += this.carts[i].number * this.carts[i].price;
                }
                return totalCost;
            }
        },
        methods:{
            addToCart(itemObj){
                let obj = {
                    name:itemObj.name,
                    size:itemObj.size,
                    price:itemObj.price,
                    number:1  //增加一个number属性
                }

                // 判断购物车中是否有商品
                if(this.carts.length > 0){
                    // 如果有商品，则先遍历筛选购物车是否有当前要加的商品，有则在基础上++
                    let result = this.carts.filter(item=>{
                        // 根据商品的名称和价格是否一致，判断出有重复商品，然后返回此商品做后续处理
                        return item.name === obj.name && item.price === obj.price
                    })

                    // 得到商品结果后，再次验证是否不为空，然后进行++
                    if(result != null && result.length > 0){
                        result[0].number++
                    }else{
                        this.carts.push(obj) //添加新商品
                    }
                }else{
                    // 没有商品，则添加到购物车
                    this.carts.push(obj)
                }
            },
            add(item){
                item.number++
            },
            minus(item){
                item.number--
                // 购物车的当前商品小于0，即从购物车移除
                if(item.number <= 0){
                    this.removeCart(item)
                }
            },
            removeCart(item){
                this.carts.splice(this.carts.indexOf(item), 1);
            }
            
        }
    }
</script>
<style scoped>
    .box{padding:0 20px;}
    .table, .table tr, .table td, .table th{
        border-collapse: collapse;
        border: 1px solid #eee;
    }
    h1{text-align: center;}
    h2{margin:30px 0;}
    th{height: 30px;}
    td{width: 150px;height: 50px;text-align: center;}
    .total{line-height: 50px;color:green;}
</style>