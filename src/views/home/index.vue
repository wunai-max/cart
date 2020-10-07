<template>
  <div class='home'>
      <div class="head">
          <h1>一小时达</h1>
          <ul>
              <router-link tag="li" to="/home/all">全部</router-link>
              <router-link tag="li" to="/home/fruits">水果</router-link>
              <router-link tag="li" to="/home/vegetables">蔬菜</router-link>
              <router-link tag="li" to="/home/meat">肉蛋</router-link>
              <router-link tag="li" to="/home/quick">速冻</router-link>
          </ul>
      </div>
      <router-view></router-view>
      <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../../components/Footer"
export default {
  props: { // 父辈向子辈传参
  },
  name: 'home',
  data () {
    return {

    }
  },
  created () { // 实例被创建之后执行代码

    },
  computed: { // 计算属性

    },
  components: { // 组件的引用
    Footer
    },
  methods: { // 方法

    },
  mounted () { // 页面进入时加载内容

    },
  watch: { // 监测变化

    }
}
</script>
<style scoped lang='scss'>
.head{
    h1{
        text-align: center;
        height: 40px;
        font-size: 16px;
        line-height: 40px;
        font-weight: 900;
    }
    ul{
        display: flex;
        border: 1px solid #ccc;
        height: 40px;
        background: #eee;
        box-shadow: #eee 2px 3px; 
        li{
            flex: 2;
            text-align: center;
            height: 40px;
            font-size: 14px;
            line-height: 40px;
        }
   .active{
       background: #fff;
       color: palevioletred;
    }
    }
}
</style>