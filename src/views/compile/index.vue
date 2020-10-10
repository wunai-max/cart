<template>
  <div class="compile">
     <van-nav-bar
      title="新增收货地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-edit
    :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import areaList from "../../assets/area"
import { Toast } from "vant";
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "compile",
  data() {
    return {
      searchResult: [],
        areaList,
    };
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
     onClickLeft() {
     history.back();
    },
    onSave(values) {
      let newAdd={
        id:"3",
        name:values.name,
        tel:values.tel,
        address:values.province+values.city+values.county+values.addressDetail
      }
     this.$store.commit("addNewAddress", newAdd);
     this.$router.push({
       path:"/site"
     })
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
          },
        ];
      } else {
        this.searchResult = [];
      }
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