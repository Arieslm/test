<template>
  <div class="home">
      <el-container>
        <el-header class="header-test" height="400px">
            <div class="">
                官网首页
            </div>
            <div class="">
                22222
            </div>
        </el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header-test {


    }
</style>
