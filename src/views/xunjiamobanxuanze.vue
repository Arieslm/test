<template>
  <div class="home">
      <headerPages title="报价参考区—询价单模板选择"></headerPages>
      <div class="tables">
          <template>
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="number"
                label="序号"
                width="90">
                <template slot-scope="scope">
                    <span v-if="scope.$index == tableData.length - 1" @click="clickFn(scope.$index)">{{tableData[scope.$index].number}}</span>
                    <span v-else>{{tableData[scope.$index].number}}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="代号名称"
                width="160">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableData[scope.$index].name">
                </template>
              </el-table-column>
              <el-table-column
                prop="chakan"
                label="材料费"
                width="90">
                <template slot-scope="scope" class="center">
                    <input type="text" name="" v-model="tableData[scope.$index].chakan">
                </template>
              </el-table-column>
              <el-table-column
                prop="city"
                label="加工费"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableData[scope.$index].city">
                </template>
              </el-table-column>
              <el-table-column
                prop="mingcheng"
                label="热处理"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableData[scope.$index].mingcheng">
                </template>
              </el-table-column>
              <el-table-column
                prop="zip"
                label="表面处理"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableData[scope.$index].zip">
                </template>
              </el-table-column>
              <el-table-column
                prop="moju"
                label="模具费"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableData[scope.$index].moju">
                </template>
              </el-table-column>
              <el-table-column
                prop="danjiaheji"
                label="单价合计"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableData[scope.$index].danjiaheji">
                </template>
              </el-table-column>
              <el-table-column
                prop="shuliang"
                label="数量"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableData[scope.$index].shuliang">
                </template>
              </el-table-column>
              <el-table-column
                prop="shui"
                label="税"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableData[scope.$index].shui">
                </template>
              </el-table-column>
              <el-table-column
                prop="zhouqi"
                label="周期"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableData[scope.$index].zhouqi">
                </template>
              </el-table-column>
              <el-table-column
                prop="yunfei"
                label="运费"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableData[scope.$index].yunfei">
                </template>
              </el-table-column>
              <el-table-column
                prop="heji"
                label="合计"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableData[scope.$index].heji">
                </template>
              </el-table-column>
              <el-table-column
                label="操作"
                width="90">
                <template slot-scope="scope">
                    <el-button @click="remove(scope.$index, scope.row)" type="text" size="small">移除</el-button>
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
                prop="gysxx"
                label="供应商信息"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableDatas[scope.$index].gysxx">
                </template>
              </el-table-column>
              <el-table-column
                prop="mc"
                label="名称"
                width="160">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableDatas[scope.$index].mc">
                </template>
              </el-table-column>
              <el-table-column
                prop="dz"
                label="地址"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableDatas[scope.$index].dz">
                </template>
              </el-table-column>
              <el-table-column
                prop="zcxx"
                label="注册信息"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableDatas[scope.$index].zcxx">
                </template>
              </el-table-column>
              <el-table-column
                prop="fr"
                label="法人"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableDatas[scope.$index].fr">
                </template>
              </el-table-column>
              <el-table-column
                prop="lxr"
                label="联系人"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableDatas[scope.$index].lxr">
                </template>
              </el-table-column>
              <el-table-column
                prop="lxfs"
                label="联系方式"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableDatas[scope.$index].lxfs">
                </template>
              </el-table-column>
              <el-table-column
                prop="sbnl"
                label="设备能力"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableDatas[scope.$index].sbnl">
                </template>
              </el-table-column>
              <el-table-column
                prop="xy"
                label="信誉"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableDatas[scope.$index].xy">
                </template>
              </el-table-column>
              <el-table-column
                prop="ptpj"
                label="平台评价"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableDatas[scope.$index].ptpj">
                </template>
              </el-table-column>
              <el-table-column
                prop="cpzs"
                label="差评指数"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableDatas[scope.$index].cpzs">
                </template>
              </el-table-column>
              <el-table-column
                prop="bzj"
                label="保证金"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableDatas[scope.$index].bzj">
                </template>
              </el-table-column>
              <el-table-column
                prop="kjsfkfs"
                label="可接受付款方式"
                width="90">
                <template slot-scope="scope">
                    <input type="text" name="" v-model="tableDatas[scope.$index].kjsfkfs">
                </template>
              </el-table-column>
              <el-table-column
                label="操作"
                width="90">
                <template slot-scope="scope">
                    <el-button @click="remove2(scope.$index, scope.row)" type="text" size="small">移除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
      </div>
      <div class="footer">
          <el-button @click="save" type="primary" size="medium">保存</el-button>
          <el-button @click="yulan" type="primary" size="medium">预览</el-button>
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
         tableDatas: [{
             gysxx: '',
             mc: '',
             dz: '',
             zcxx: '',
             fr: '',
             lxr: '',
             lxfs: '',
             sbnl: '',
             xy:'',
             ptpj:'',
             cpzs:'',
             bzj: '',
             kjsfkfs: ''
        }],
        tableData: [{
          number: '01',
          name: '项目代号000001',
          city: '',
          mingcheng: '',
          zip: '',
          time: '',
          moju: '',
          danjiaheji: '',
          shuliang: '',
          shui: '',
          zhouqi: '',
          yunfei: '',
          heji: '',
          chakan: '',
        },{
            number: '+',
            name: '',
            city: '',
            mingcheng: '',
            zip: '',
            time: '',
            moju: '',
            danjiaheji: '',
            shuliang: '',
            shui: '',
            zhouqi: '',
            yunfei: '',
            heji: '',
            chakan: '',
        }]
      }
  },
  methods: {
       commit(row) {
         alert('提交')
       },
       yulan(){
           this.$router.push('/bijia')
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
       remove2(index, row) {
           this.tableDatas.splice(index, 1);
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
        width: 1331px;
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
