<template>
<div class="header-pages">
    <el-container>
      <el-header class="header-test">
          <div class="header-left">
              <i class="el-icon-news"></i>
              <p><router-link to="/home">官网首页</router-link></p>
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
    </el-container>
    <div class="search-title">
        <div class="main-flex">
            <div class="logo-title">
                <i class="el-icon-news"></i>
                <div class="title">
                    {{title}}
                </div>
            </div>
            <el-input
            class="input-search"
            placeholder="请输入内容"
            v-model="searchVal"
            clearable>
          </el-input>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'headerPages',
  props: ['title'],
  data () {
    return {
        searchVal:'',
        // title: '报价平台-测试'
    }
  }
}
</script>

<style scoped lang="scss">
.header-pages {
    border-bottom: 2px solid #409EFF;
    .header-test {
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
    .search-title {
        padding: 0 20px;
    }
    .main-flex {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 10px 0 20px 0;
        .logo-title {
            flex: 1;
            display: flex;
            align-items: center;
            .el-icon-news {
                font-size: 40px;
            }
            .title {
                margin-left: 20px;
                font-size: 20px;
            }
        }
        .input-search {
            width: 600px;
        }
    }
}
</style>
