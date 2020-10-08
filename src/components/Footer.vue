<template>
  <div class="Footer">
    <ul>
    
      <van-goods-action>
        <router-link tag="li" to="/home"><span class="iconfont icon-shouye"></span>首页</router-link>
       <van-goods-action-icon icon="cart-o" text="购物车" :badge="this.$store.state.cartCounter" to="/shop" color="palevioletred"/>
        <router-link tag="li" to="/mine"><span class="iconfont icon-wodedangxuan"></span>我的</router-link>
       </van-goods-action>
     
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "Footer",
  data() {
    return {};
  },
  created() {
    // 实例被创建之后执行代码
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
  },
  methods: {
    // 方法
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
.Footer {
  background: #fff;
  border-top: 1px solid #cecece;
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 100%;
  ul {
    display: flex;
    justify-content: space-between;
    li {
    span{
        font-size:22px;
    }
      padding-top:10px ;
      display: flex;
      flex-direction: column;
      flex: 3;
      height: 50px;
      text-align: center;
      font-size: 12px;
      color: #999999;
    }
    .active{
      color: palevioletred;
    }
  }
  .van-goods-action-icon{
    color: palevioletred;
  }
}
</style>