<template>
  <div class="home">
      <headerPages title="供应商专区"></headerPages>
      <div class="flex-content">
          <div class="menu-list">
              <div class="jieshao">
                  <p><span>公司简介</span></p>
                  <p class="content">公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介
                      公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介公司简介
                  </p>
              </div>
              <div class="jieshao">
                  <p><span>公司产品</span></p>
                  <p class="content">公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品
                      公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品公司产品
                  </p>
              </div>
              <div class="jieshao">
                  <p><span>公司资质</span></p>
                  <p class="content">公司资质公司资质公司资质公司资质公司资质公司资质公司资质公司资质公司资质公司资质公司资质公司资质公司资质公司资质
                      公司资质公司资质公司资质公司资质公司资质公司资质公司资质公司资质公司资质公司资质公司资质公司资质公司资质公司资质
                  </p>
              </div>
              <div class="jieshao">
                  <p><span>平台考察</span></p>
                  <p class="content">平台考察平台考察平台考察平台考察平台考察平台考察平台考察平台考察平台考察平台考察平台考察平台考察平台考察平台考察
                      平台考察平台考察平台考察平台考察平台考察平台考察平台考察平台考察平台考察平台考察平台考察平台考察平台考察平台考察
                  </p>
              </div>
          </div>
          <div class="content-middle">
              <div class="header">
                  <div class="header-list">首页</div>
                  <div class="header-list">产品</div>
                  <div class="header-list">公司档案</div>
                  <div class="header-list">联系我们</div>
                  <div class="header-list list-color">留言板</div>
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
import headerPages from '../components/header_pages.vue';
import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
export default {
  components: {
      headerPages
  },
  data () {
    return {
      searchVal: '',
      arrimg: [img1, img2, img3]
    }
  },
  methods: {

 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
.home {
    .flex-content {
        display: flex;
        padding: 0 20px;
        .menu-list {
            width: 460px;
            .jieshao {
                width: 100%;
                // height: 150px;
                border: 2px solid #67c23a;
                margin: 10px 0;
                .content {
                    text-indent: 2em;
                }
                span {
                    background: #67c23a;
                    color: #fff;
                    padding: 0 5px;
                }
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
