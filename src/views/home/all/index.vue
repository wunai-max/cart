<template>
  <div class='all'>
    <ul>
        <li v-for="item in list" :key="item.id">
            <div class="left">
                <img src="../../../../static/imgs/goods/水果.png">
            </div>
            <div class="right">
              <h2>{{item.title}}</h2>
              <p>{{item.content}}</p>
               <h3>
                ￥<span>{{item.price}}</span>
                <span class="iconfont icon-gouwudai"></span>
               </h3>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios"
export default {
  props: { // 父辈向子辈传参
  },
  name: 'all',
  data () {
    return {
      list:[],
      imgurl:""
    }
  },
  created () { // 实例被创建之后执行代码
    this.getdata();
    },
  computed: { // 计算属性

    },
  components: { // 组件的引用

    },
  methods: { // 方法
    getdata(){
    axios.get("/api/seller").then(res=>{
        console.log(res);
        const list=res.data.data;
        
        
      })
    }
    },
  mounted () { // 页面进入时加载内容

    },
  watch: { // 监测变化

    }
}
</script>
<style scoped lang='scss'>
.all{
  ul{
    li{
      height: 140px;
      border-bottom:1px solid #eee;
      display: flex;
      .left{
        flex: 4;
        height: 140px;
        img{
          margin-top:20px ;
          margin-left:20px;
          width: 100px;
        }
      }
      .right{
        flex: 6;
        h2{
          margin-top:20px ;
          height: 30px;
          font-size: 16px;
          line-height: 30px;
          font-weight: 900;
        }
        p{
          height: 30px;
          font-size: 14px;
          line-height: 30px;
        }
        h3{
          span{
             font-size: 20px;
             color: palevioletred;
             font-weight: 900;
          }
          .iconfont{
            margin-left:140px ;
            font-size: 30px;
            color: palevioletred;
          }
        }
      }
    }
  }
}
</style>