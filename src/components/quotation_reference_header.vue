<template>
<div class="">
    <el-container>
      <el-header class="header-test">
          <div class="header-left">
              <i class="el-icon-news"></i>
              <p>官网首页</p>
              <div class="login"><router-link to="/login">请登录</router-link></div>
              <div class="registe"><router-link to="/registe">免费注册</router-link></div>
          </div>
          <div class="header-right">
              <i class="el-icon-goods"></i>
              <div class="header-m">购物车</div>
              <div class="header-m">买家中心</div>
              <div class="header-m">卖家中心</div>
              <div class="header-m">平台中心</div>
              <div class="header-m">我的消息</div>
              <div class="header-m">客服中心</div>
              <div class="header-m">English</div>
          </div>
      </el-header>
      <div class="footer">
          <div class="footer-left">
              <i class="el-icon-picture"></i>
              <p>{{title}}</p>
          </div>
           <div class="main-flex">
               <div class="" style="display:flex">
                   <el-input
                   class="input-search"
                   placeholder="请输入内容"
                   v-model="searchVal"
                   clearable>
                 </el-input>
                 <el-button type="success" icon="el-icon-search">搜索</el-button>
               </div>
             <el-button type="success" plain>一键下单</el-button>
           </div>
      </div>
    </el-container>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: [
      "title"
  ],
  data () {
    return {
        searchVal: '',
    }
  }
}
</script>

<style scoped lang="scss">
.header-test  {
    display: flex;
    .header-left {
        flex: 1;
        display: flex;
        align-items: center;
        font-size: 18px;
        .el-icon-news, .el-icon-goods {
            margin-right: 5px;
            font-size: 20px;
        }
        .login, .registe {
            margin: 0 15px;
        }
    }
    .header-right {
        display: flex;
        align-items: center;
        font-size: 18px;
        .header-m {
            margin: 0 10px;
        }
    }


}
.footer {
    display: flex;
    font-size: 28px;
    align-items: center;
    margin: 20px 0 40px 0;
    padding: 0 20px;
    .footer-left {
        display: flex;
        flex: 2;
        .el-icon-picture {
            font-size: 40px;
        }
    }
    .main-flex {
        flex: 3;
        display: flex;
        justify-content: space-between;
        .input-search {
            width: 400px;
        }
    }
}
</style>
