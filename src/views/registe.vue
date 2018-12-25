<template>
  <div class="home">
      <header-c></header-c>
      <div class="title">
          <p>欢迎注册</p>
      </div>
      <div class="flex-content">
          <div class="flex-left">
              <div class="demo-input-suffix">
                  <div class="">
                      <span>姓名</span><el-input class="input-val" v-model="input1"></el-input>
                  </div>
                  <div class="">
                      <span>设置密码</span><el-input class="input-val" v-model="input2"></el-input>
                  </div>
                  <div class="">
                       <span>确认密码</span><el-input class="input-val" v-model="input3"></el-input>
                  </div>
                  <div class="">
                       <span>公司全称</span><el-input class="input-val" v-model="input4"></el-input>
                  </div>
                  <div class="">
                       <span>公司地址</span><el-input class="input-val" v-model="input5"></el-input>
                  </div>
                  <div class="">
                       <span>微信</span><el-input class="input-val" v-model="input6"></el-input>
                  </div>
                  <div class="">
                       <span>QQ</span><el-input class="input-val" v-model="input7"></el-input>
                  </div>
                  <div class="">
                       <span>手机号</span><el-input class="input-val" v-model="input8"></el-input>
                  </div>
                  <div class="">
                       <span>验证码</span><el-input class="input-val" v-model="input9"></el-input>
                  </div>
                  <div class="tiaokuan">
                       <el-checkbox v-model="checked">阅读并同意《XXXX协议》</el-checkbox>
                  </div>
                  <div class="commit">
                       <el-button type="success">立即注册</el-button>
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
      input9: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: '',
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
