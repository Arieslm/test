<template>
  <div class="home">
      <headerPages title="报价参考区—发布任务"></headerPages>
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
                    <div class="" v-if="scope.$index == 0">
                        <el-dropdown trigger="click" @command="handleCommand">
                          <span class="el-dropdown-link">
                            {{selectName}}<i class="el-icon-arrow-down el-icon--right"></i>
                          </span>
                          <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="公开">公开</el-dropdown-item>
                            <el-dropdown-item command="常用供应商库">常用供应商库</el-dropdown-item>
                            <el-dropdown-item command="指定资质">指定资质</el-dropdown-item>
                            <el-dropdown-item command="指定地区">指定地区</el-dropdown-item>
                            <el-dropdown-item command="指定平台推荐">指定平台推荐</el-dropdown-item>
                            <el-dropdown-item command="其他">其他</el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <div class="" v-if="scope.$index === 1 || scope.$index === 2">
                        <el-radio v-model="tableDatas[scope.$index].radio" label="1">是</el-radio>
                        <el-radio v-model="tableDatas[scope.$index].radio" label="2">否</el-radio>
                    </div>
                    <div class="" v-if="scope.$index == 3">
                        <el-radio v-model="tableDatas[scope.$index].radio" label="1">平台</el-radio>
                        <el-radio v-model="tableDatas[scope.$index].radio" label="2">线下</el-radio>
                        <el-radio v-model="tableDatas[scope.$index].radio" label="3">月结</el-radio>
                    </div>
                    <div class="" v-if="scope.$index == 4">
                        <el-radio v-model="tableDatas[scope.$index].radio" label="1">研制</el-radio>
                        <el-radio v-model="tableDatas[scope.$index].radio" label="2">批产</el-radio>
                        <el-radio v-model="tableDatas[scope.$index].radio" label="3">其他</el-radio>
                    </div>
                    <div class="" v-if="scope.$index == 5">
                        <el-radio v-model="tableDatas[scope.$index].radio" label="1">邮件</el-radio>
                        <el-radio v-model="tableDatas[scope.$index].radio" label="2">平台</el-radio>
                        <el-radio v-model="tableDatas[scope.$index].radio" label="3">短信</el-radio>
                    </div>
                    <div class="" v-if="scope.$index == 6">
                        <span class="gonext"><router-link to="/xunjiamobanxuanze">常用</router-link></span>
                        <el-radio v-model="tableDatas[scope.$index].radio" label="1">平台</el-radio>
                        <el-radio v-model="tableDatas[scope.$index].radio" label="2">短信</el-radio>
                    </div>
                </template>
                <!-- <template slot-scope="scope" v-if="scope.$index > 1">
                    <el-radio v-model="tableDatas[scope.$index].radio" label="1">是</el-radio>
                    <el-radio v-model="tableDatas[scope.$index].radio" label="2">否</el-radio>
                </template> -->
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
         selectName: '公开',
         tableDatas: [{
           number: '1',
           name: '供应商报价',
           radio: '1',
         }, {
           number: '2',
           name: '公司保密项目',
           radio: '1',
         }, {
           number: '3',
           name: '公开公司信息',
           radio: '1',
         }, {
           number: '4',
           name: '可选付款方式',
           radio: '1',
         }, {
           number: '5',
           name: '项目订单种类',
           radio: '1',
        }, {
          number: '6',
          name: '通知供应商',
          radio: '1',
       }, {
         number: '7',
         name: '报价单模版',
         radio: '1',
      }],
        tableData: [{
          number: '01',
          name: '项目代号000001',
          city: '代号000001',
          mingcheng: '名称000001',
          zip: 1,
          time: 1
        }, {
          number: '02',
          name: '项目代号000002',
          city: '代号000002',
          mingcheng: '名称000002',
          zip: 2,
          time: 2
        }, {
          number: '03',
          name: '项目代号000003',
          city: '代号000003',
          mingcheng: '名称000003',
          zip: 3,
          time: 3
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
      handleCommand(item) {
          this.selectName = item
      },
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
    .gonext {
        margin: 0 15px;
        text-decoration: underline;
    }
}
</style>
