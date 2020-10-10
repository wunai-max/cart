<template>
  <div class="site">
    <van-nav-bar
      title="我的收货地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "site",
  data() {
    return {
      chosenAddressId: "1",
      list: [],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号",
        },
      ],
    };
  },
  created() {
    // 实例被创建之后执行代码
    this.address();
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
  },
  methods: {
    // 方法
    address(){
       this.list=this.$store.state.address 
    },
    onClickLeft() {
     history.back();
    },
    onAdd() {
     this.$router.push({
         path:"/compile"
     })
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
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
</style>