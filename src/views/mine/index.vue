<template>
  <div class='mine'>
      mine
      <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../../components/Footer"
export default {
  props: { // 父辈向子辈传参
  },
  name: 'mine',
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
</style>