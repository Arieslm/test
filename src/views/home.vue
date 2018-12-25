<template>
  <div class="home">
    <header-c></header-c>
    <div class="">
        <div class="main-flex">
            <el-input
            class="input-search"
            placeholder="请输入内容"
            v-model="searchVal"
            clearable>
          </el-input>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
    </div>
    <div class="flex-content">
        <div class="menu-list">
            <el-menu>
                <el-menu-item class="list-item" index="1">
                  <i class="el-icon-info"></i>
                  <span slot="title">全部分类</span>
                </el-menu-item>
                <el-menu-item class="list-item" index="2">
                  <i class="el-icon-info"></i>
                  <span slot="title">降成本专区</span>
                </el-menu-item>
                <el-menu-item class="list-item" index="3">
                  <i class="el-icon-info"></i>
                  <span slot="title">报价参考区</span>
                </el-menu-item>
                <el-menu-item class="list-item" index="4">
                  <i class="el-icon-info"></i>
                  <span slot="title">订单专区</span>
                </el-menu-item>
                <el-menu-item class="list-item" index="5">
                  <i class="el-icon-info"></i>
                  <span slot="title">供应商专区</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="content-middle">
            <div class="header">
                <div class="header-list">首页</div>
                <div class="header-list">现货搜索</div>
                <div class="header-list">订单</div>
                <div class="header-list list-color">物流</div>
                <div class="header-list list-color">金融</div>
            </div>
            <div class="carousel">
                <template>
                  <el-carousel :interval="3000" arrow="always" height="500px">
                    <el-carousel-item v-for="item in arrimg" :key="item">
                        <img :src="item" alt="">
                    </el-carousel-item>
                  </el-carousel>
                </template>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import headerC from '../components/header.vue';
import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
export default {
  name: 'HelloWorld',
  components: {
      headerC
  },
  data () {
    return {
      searchVal: '',
      arrimg: [img1, img2, img3]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
    min-width: 1104px;
    background: #fff;
    .main-flex {
        display: flex;
        justify-content: center;
        margin: 20px 0 40px 0;
        .input-search {
            width: 600px;
        }
    }
    .flex-content {
        display: flex;
        padding: 0 20px;
        .menu-list {
            width: 160px;
            background: #67c23a;
            .list-item {
                background: #67c23a;
                color: #fff;
            }
        }
        .content-middle {
            flex: 1;
            .header {
                display: flex;
                .header-list {
                    margin:0 10px;
                    font-size: 16px;
                }
                .list-color {
                    color: red;
                }
            }
            .carousel {
                margin:0 10px;
                height: 500px;
                .el-carousel__item h3 {
                  color: #475669;
                  font-size: 18px;
                  opacity: 0.75;
                  line-height: 300px;
                  margin: 0;
                }

                .el-carousel__item:nth-child(2n) {
                  background-color: #99a9bf;
                }

                .el-carousel__item:nth-child(2n+1) {
                  background-color: #d3dce6;
                }
            }
        }
    }
}
</style>
