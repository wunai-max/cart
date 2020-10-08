import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartGoods: [], // 添加到购物车中的商品
    cartCounter: 0, // 购物车物品总数
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
    
  },
  actions: {
  },
  modules: {
  }
})
