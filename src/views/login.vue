<template>
  <div class="home">
      <header-c></header-c>
      <div class="title">
          <p>登录</p>
      </div>
      <div class="flex-content">
          <div class="flex-left">
              <div class="demo-input-suffix">

                  <div class="">
                       <span>用户名</span><el-input class="input-val" v-model="input1"></el-input>
                  </div>
                  <div class="">
                       <span>输入密码</span><el-input class="input-val" v-model="input2"></el-input>
                  </div>
                  <div class="commit">
                       <el-button type="success">立即登录</el-button>
                  </div>
              </div>
          </div>
          <div class="flex-right">
              <p>客服联系热线</p>
              <p>1234567890</p>
           </div>
      </div>
  </div>
</template>

<script>
import headerC from '../components/header.vue';
export default {
  name: 'HelloWorld',
  components: {
      headerC
  },
  data () {
    return {
      input: '',
      input1: '',
      input2: '',
      checked: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
.home {
    .title {
        font-size: 20px;
        border-bottom: 4px solid #ccc;
        p {
            margin-left: 300px;
        }
    }
    .flex-content {
        display: flex;
        .flex-right {
            flex: 1;
            margin-top: 40px;
            p {
                padding-left: 100px;
            }
        }
        .flex-left {
            flex:1;
        }
    }
    .demo-input-suffix {
        font-size: 16px;
        margin-top: 20px;
        margin-left: 300px;
        span {
            display: inline-block;
            width: 100px;
            text-align: center;
            margin: 5px;
            height: 38px;
            line-height: 38px;
            border-radius: 4px;
            background: #67c23a;
        }
        .input-val {
            width: 300px;
        }
        .tiaokuan {
            margin-left: 120px;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .commit {
            margin-left: 160px;
        }
    }
}
</style>
