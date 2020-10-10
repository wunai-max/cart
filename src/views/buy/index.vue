<template>
  <div class="buy">
       <van-nav-bar
      title="填写订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <ul>
        <li v-for="item in list" :key="item.id">
            <img :src="item.img" alt="">
            <p>{{item.num}}</p>
        </li>
    </ul>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="option1" />
    </van-dropdown-menu>
     <h3>合计：￥{{pay}}</h3>
    <van-button round type="info" class="zhi" @click="remove">支付</van-button>
  </div>
</template>

<script>
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "buy",
  data() {
    return {
      list:[],
      value: 1,
      option1: [],
      pay:0
    };
  },
  created() {
    // 实例被创建之后执行代码
    this.getcart()
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
  },
  methods: {
    // 方法
    getcart(){
     this.list = this.$store.state.cartGoods;
     this.pay=this.$store.state.pay;
     const address=this.$store.state.address;
       let str={}
        address.forEach(item=>{
          str=
          {
            text:item.name+item.tel+item.address,
            value:item.id
          }
          this.option1.push(str) 
        })
      let con=this.option1
     this.option1=con;
    },
    onClickLeft(){
        history.back()
    },
    remove(){
      let newArr=[];
      let count=0;
      this.$store.commit("remove", newArr);
      this.$store.commit("removeCounter", count);
      alert("支付成功")
      this.$router.push({
          path:"/shop"
      })
    }
  },
  mounted() {
    // 页面进入时加载内容
  },
  watch: {
    // 监测变化
  },
};
</script>
<style scoped lang='scss'>
.buy{
    ul{
        li{
            border:1px solid palevioletred ;
            margin-bottom:10px ;
            height: 50px;
            p{
                height: 50px;
                line-height: 50px;
            }
            img{
                width: 50px;
            }
            display: flex;
            justify-content: space-around;
        }
    }
    .zhi{
        margin-left: 270px;
    }
}
</style>