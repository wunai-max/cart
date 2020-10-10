<template>
  <div class="mine">
    <div class="content">
      <van-form @submit="onSubmit" v-if="flag">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
      <div class="name" v-else>
        <h1>当前用户：{{name}}</h1>
        <p @click="site">我的地址</p>
        <van-button type="danger"  size="large" @click="del">退出登录</van-button>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import { getToken,setToken,removeToken } from "../../utils/auth"
import Footer from "../../components/Footer";
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "mine",
  data() {
    return {
      username: "",
      password: "",
      flag:true,
      name:""
    };
  },
  created() {
    // 实例被创建之后执行代码
    this.get();
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
     onSubmit() {
    console.log(this.username,this.password)
    setToken(this.username)
      this.get();
    },
    get(){
      if(getToken()){
        this.name=getToken()
        this.flag=false;
      }else{
        this.flag=true;
      }
    },
    del(){
      removeToken();
      this.get();
    },
    site(){
      this.$router.push({
        path:"/site"
      })
    }

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
.content{
  margin-top:200px ;
  .name{
    h1{
      font-size: 20px;
      text-align: center;
    }
    p{
      font-size:14px ;
      height: 40px;
      line-height: 40px;
      border: 1px solid #cecece;
      margin-bottom: 10px;
    }
  }
}
</style>