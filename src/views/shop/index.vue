<template>
  <div class="shop">
    <h1>我的购物车</h1>
    <div class="content" v-if="flag">
      <ul>
        <li v-for="item in list" :key="item.id">
          <div class="left">
            <img :src="item.img" />
          </div>
          <div class="right">
            <h2>{{ item.title }}</h2>
            <p>{{ item.content }}</p>
            <div class="price">
              <h3>
                ￥<span>{{ item.price }}</span>
              </h3>
              <div class="gou">
                <div class="updata" v-if="item.num">
                  <span
                    class="iconfont icon-jianhao-"
                    @click="minus(item)"
                  ></span>
                  <input type="text" :value="item.num" />
                  <span
                    class="iconfont icon-jiahao"
                    @click="add(item.id)"
                  ></span>
                </div>
                <span
                  class="iconfont icon-gouwudai"
                  @click="updata(item)"
                  v-else
                ></span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="price-wrap">
        <div class="amount">
          商品总价：
          <span class="float-right">￥{{ total }}</span>
        </div>
        <div class="pay">
          <div>
            商品实付：
            <span class="float-right">￥{{ total }}</span>
          </div>
          <div>
            <span>运费（实付满49免邮）：</span>
            <span class="float-right">
              <span class="postage" v-show="needPostage">￥{{ postage }}</span>
              <span class="postage" v-show="!needPostage">免邮</span>
            </span>
          </div>
          <div>
            <span class="text-left"
              >合计：
              <span class="float-right1">￥{{ footing }}</span>
            </span>
          </div>
        </div>
        <button class="but" @click="close">结算</button>
      </div>
    </div>
    <div class="main" v-else>
      <p>购物车里空空，快去添加商品</p>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../../components/Footer";
import { getToken } from '../../utils/auth';
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "shop",
  data() {
    return {
      list: [],
      postage: 6,
      needPostage: true,
      total: "",
      footing: "",
      flag: true,
    };
  },
  created() {
    // 实例被创建之后执行代码
    this.cartGoods();
    this.amount();
    this.pay();
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
    Footer,
  },
  methods: {
    // 方法
    close(){
      if(getToken()){
         this.$store.commit("pay", this.footing);
        this.$router.push({
          path:"/buy"
        })
      }else{
        this.$router.push({
          path:"/mine"
        })
      }
    },
    minus(item) {
      const itemId=item.id
      console.log(itemId)
      if(item.num<=1){
        alert("确认删除该商品")
        this.$store.commit("deleteGoodsFromCart", itemId);
        this.cartGoods();
      }else{
         this.$store.commit("reduceGoods", itemId);
      }
      
      this.amount();
      this.pay();
    },
    add(itemId) {
      this.$store.commit("addGoods", itemId);
      this.amount();
      this.pay();
    },
    cartGoods() {
      if (this.$store.state.cartGoods.length > 0) {
        this.flag = true;
        this.list = this.$store.state.cartGoods;
      } else {
        this.flag = false;
      }

      // console.log(this.list)
    },
    //商品总价
    amount() {
      let cartlist = this.$store.state.cartGoods;
      let result = 0;
      cartlist.forEach((good) => {
        result += good.price * good.num;
      });
      this.total = result;
    },
    //合计
    pay() {
      let result = this.total;
      if (result >= 49) {
        this.needPostage = false;
      } else {
        this.needPostage = true;
      }
      if (this.needPostage) {
        result += this.postage;
      }
      this.footing = result;
    },
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
.shop {
  
  h1 {
    font-size: 18px;
    text-align: center;
    background: #cecece;
    height: 40px;
    line-height: 40px;
  }
  ul {
    overflow: auto; 
    height: 300px;
    li {
      height: 110px;
      border-bottom: 1px solid #eee;
      display: flex;
      .left {
        flex: 4;
        height: 140px;
        border-radius: 50%;
        overflow: hidden;
        img {
          margin-top: 20px;
          margin-left: 20px;
          width: 100px;
        }
      }
      .right {
        flex: 6;
        h2 {
          margin-top: 20px;
          height: 30px;
          font-size: 16px;
          line-height: 30px;
          font-weight: 900;
        }
        p {
          height: 30px;
          font-size: 14px;
          line-height: 30px;
        }
        .price {
          display: flex;
          h3 {
            span {
              font-size: 20px;
              color: palevioletred;
              font-weight: 900;
            }
          }
          .gou {
            margin-left: 110px;
            .iconfont {
              font-size: 30px;
              color: palevioletred;
            }
            .updata {
              display: flex;
              span {
                margin: 0;
              }
              input {
                width: 20px;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
  .price-wrap {
    margin-top: 10px;
    background-color: #fff;
    padding: 15px 10px;
    text-align: left;
    line-height: 40px;
    > div {
      border-bottom: 1px solid #eee;
    }
    .float-right {
      margin-left: 150px;
      color: palevioletred;
    }
    .float-right1 {
      margin-left: 150px;
      font-size: 20px;
      color: palevioletred;
    }
    .but {
      margin-top: 20px;
      margin-left: 230px;
      background: palevioletred;
      width: 100px;
    }
  }
}
</style>