<template>
  <div class="home">
      <headerPages title="降成本专区—询价表"></headerPages>
      <div class="tables">
          <template>
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="number"
                label="序号"
                width="100">
                <template slot-scope="scope">
                    <span v-if="scope.$index == tableData.length - 1" @click="clickFn(scope.$index)">{{tableData[scope.$index].number}}</span>
                    <span v-else>{{tableData[scope.$index].number}}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="项目代号"
                width="160">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableData[scope.$index].name">
                </template>
              </el-table-column>
              <el-table-column
                label="图纸"
                width="100">
                <template slot-scope="scope" class="center">
                  <span v-if="scope.$index == tableData.length - 1"></span>
                  <el-button v-else @click="cat(scope.row)" type="text" size="small">查看</el-button>
                </template>
              </el-table-column>
              <el-table-column
                prop="city"
                label="代号"
                width="100">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableData[scope.$index].city">
                </template>
              </el-table-column>
              <el-table-column
                prop="mingcheng"
                label="名称"
                width="100">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableData[scope.$index].mingcheng">
                </template>
              </el-table-column>
              <el-table-column
                prop="zip"
                label="数量"
                width="100">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableData[scope.$index].zip">
                </template>
              </el-table-column>
              <el-table-column
                prop="time"
                label="周期"
                width="100">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableData[scope.$index].time">
                </template>
              </el-table-column>
              <el-table-column
                label="操作"
                width="100">
                <template slot-scope="scope">
                    <el-button v-if="scope.$index != tableData.length-1" @click="remove(scope.$index, scope.row)" type="text" size="small">移除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
      </div>
      <div class="tables">
          <template>
            <el-table
              :data="tableDatas"
              border>
              <el-table-column
                prop="number"
                label="序号"
                width="160">
              </el-table-column>
              <el-table-column
                prop="name"
                label="功能选项"
                width="450">
              </el-table-column>
              <el-table-column
                label="选择"
                width="250">
                <template slot-scope="scope">
                    <!-- <el-button @click="handleClick(scope.$index)" type="text" size="small">查看</el-button> -->
                    <el-radio v-model="tableDatas[scope.$index].radio" label="1">是</el-radio>
                    <el-radio v-model="tableDatas[scope.$index].radio" label="2">否</el-radio>
                </template>
              </el-table-column>
            </el-table>
          </template>
      </div>
      <div class="footer">
          <el-button @click="save" type="primary" size="medium">保存</el-button>
          <el-button @click="commit" type="primary" size="medium">提交</el-button>
      </div>
  </div>
</template>

<script>
import headerPages from '../components/header_pages.vue';
export default {
  components: {
      headerPages
  },
  data () {
     return {
         tableDatas: [ {
           number: '1',
           name: '平台下单加工',
           radio: '1',
         }, {
           number: '2',
           name: '公司保密项目',
           radio: '1',
         }, {
           number: '3',
           name: '公开公司信息',
           radio: '1',
        }],
        tableData: [{
          number: '01',
          name: '',
          city: '',
          mingcheng: '',
          zip: '',
          time: ''
        },{
            number: '+',
            name: '',
            city: '',
            mingcheng: '',
            zip: '',
            time: ''
        }]
      }
  },
  methods: {
       commit(row) {
         alert('提交')
       },
       save() {
           alert('保存')
       },
       catfile(row) {
           alert(row)
       },
       remove(index, row) {
           this.tableData.splice(index, 1);
       },
       clickFn(indexs){
           let add = [{
               number: indexs + 1,
               name: '',
               city: '',
               mingcheng: '',
               zip: '',
               time: ''
           },{
               number: '+',
               name: '',
               city: '',
               mingcheng: '',
               zip: '',
               time: ''
           }]
           this.tableData.pop();
           this.tableData = [...this.tableData, ...add]
       }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
.home {
    .tables {
        width: 861px;
        margin: 10px auto;
        text-align: center;
        overflow: hidden;
    }
    .center {
        text-align: center;
    }
    .footer {
        margin-top: 20px;
        font-size: 20px;
        text-align: center;
    }
}
</style>
