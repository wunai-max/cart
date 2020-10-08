<template>
  <div class="all">
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
                  @click="minus(item.id)"
                ></span>
                <input type="text" :value="item.num" />
                <span class="iconfont icon-jiahao" @click="add(item.id)"></span>
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
      <p>到底了</p>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "all",
  data() {
    return {
      list: [],
    };
  },
  created() {
    // 实例被创建之后执行代码
    this.getdata();
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
  },
  methods: {
    // 方法
    getdata() {
      axios.get("/api/seller").then((res) => {
        //  console.log(res);
        const list = res.data.data;
        console.log(list);
        list.forEach((item) => {
          item.num = 0;
        });
        this.list = list;
      });
    },
    updata(item) {
     this.$store.commit("addGoodsToCart", item);
    },
    minus(itemId) {
      this.$store.commit("reduceGoods", itemId);
    },
    add(itemId) {
      this.$store.commit("addGoods", itemId);
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
.all {
  position: relative;
  overflow: hidden;
  padding-bottom: 60px;
  ul {
    margin-top: 80px;
    height: 520px;

    overflow: auto;
    li {
      height: 140px;
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
}
</style>