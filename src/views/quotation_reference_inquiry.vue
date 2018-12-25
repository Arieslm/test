<template>
  <div class="home">
      <header-c :title="'报价参考区-询价表'"></header-c>
  </div>
</template>

<script>
import headerC from '../components/quotation_reference_header.vue';
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
}
</style>
