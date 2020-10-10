import { remove } from 'js-cookie';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    address:[
      {
        id: "1",
        name: "张三",
        tel: "13000000000",
        address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
        isDefault: true,
      },
      {
        id: "2",
        name: "李四",
        tel: "1310000000",
        address: "浙江省杭州市拱墅区莫干山路 50 号",
      },
    ],
    cartGoods: [], // 添加到购物车中的商品
    cartCounter: 0, // 购物车物品总数
    pay:0
  },
  mutations: {
    addGoodsToCart (state, item) {//添加购物车
      item.num++;
      state.cartGoods.push(item);
      state.cartCounter++;
    },
    deleteGoodsFromCart(state, itemId) {
      state.cartCounter--;
      state.cartGoods.some((val, index, Goods) => {
        if (val.id === itemId) {
          val.num--;
          Goods.splice(index, 1);
          return true;
        }
      })
    },
    addGoods(state, itemId){//加加
      state.cartCounter++;
      state.cartGoods.some(val => {
        if (val.id === itemId) {
          val.num++
          return true;
        }
      })
    },
    reduceGoods(state, itemId){//减减
      state.cartCounter--;
      state.cartGoods.some(val => {
        if (val.id === itemId) {
          val.num--;
          return true;
        }
      })
    },
    addNewAddress(state, newAdd){
      state.address.push(newAdd);
    },
    pay(state,footing){
      state.pay=footing
    },
    remove(state,newArr){
      state.cartGoods=newArr
    },
    removeCounter(state,count){
      state.cartCounter=count
    }
  },
  actions: {
  },
  modules: {
  }
})
