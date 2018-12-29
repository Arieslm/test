<template>
  <div class="home">
      <headerPages title="报价参考区—订单---改"></headerPages>
      <div class="tables">
          <template>
            <el-table
              :data="tableData"
              border
              :span-method="arraySpanMethod"
              style="width: 100%">
              <el-table-column
                prop="number"
                label="项目代号"
                width="100">
              </el-table-column>
              <el-table-column
                prop="name"
                label="代号名称"
                width="160">

              </el-table-column>
              <el-table-column
                label="单价合计"
                prop="djhj"
                width="100">
              </el-table-column>
              <el-table-column
                prop="city"
                label="周期(天)"
                width="100">

              </el-table-column>
              <el-table-column
                prop="mingcheng"
                label="供应商"
                width="100">

              </el-table-column>
              <el-table-column
                prop="zip"
                label="付款方式"
                width="100">

              </el-table-column>
              <el-table-column
                prop="time"
                label="供应商其他信息"
                width="100">

              </el-table-column>
              <el-table-column
                prop="xzcjyj"
                label="选择厂家议价"
                width="100">

              </el-table-column>
              <el-table-column
                prop="yjzhq"
                label="议价周期"
                width="100">

              </el-table-column>
              <el-table-column
                prop="fkfs"
                label="付款方式"
                width="100">

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
                width="550">
                <template slot-scope="scope">
                    <!-- <el-button @click="handleClick(scope.$index)" type="text" size="small">查看</el-button> -->
                    <div class="" v-if="scope.$index == 0">
                        <el-radio v-model="tableDatas[scope.$index].radio" label="1">平台</el-radio>
                        <el-radio v-model="tableDatas[scope.$index].radio" label="2">线下</el-radio>
                        <el-radio v-model="tableDatas[scope.$index].radio" label="3">月结</el-radio>
                    </div>
                    <div class="" v-if="scope.$index == 1">
                        <el-radio v-model="tableDatas[scope.$index].radio" label="1">邮件</el-radio>
                        <el-radio v-model="tableDatas[scope.$index].radio" label="2">平台</el-radio>
                        <el-radio v-model="tableDatas[scope.$index].radio" label="3">短信</el-radio>
                    </div>
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
           number: '1',
           name: '可选付款方式',
           radio: '1',
         }, {
           number: '2',
           name: '通知供应商',
           radio: '1',
         }],
        tableData: [{
          number: 'HR101',
          name: 'HR-1000-001衬套',
          city: '8',
          mingcheng: '厂家A',
          djhj: '8.2',
          zip: '预付30%',
          time: '-----',
          xzcjyj: '7.5',
          yjzhq:'5',
          fkfs: '月结'
        }, {
          number: 'HR101',
          name: 'HR-1000-001衬套',
          city: '9',
          mingcheng: '厂家B',
          djhj: '4.2',
          zip: '预付50%',
          time: '-----',
          xzcjyj: '4.5',
          yjzhq:'5',
          fkfs: '月结'
        }, {
          number: 'HR101',
          name: 'HR-3000-005垫片',
          city: '10',
          mingcheng: '厂家A',
          djhj: '4.8',
          zip: '货到付款',
          time: '-----',
          xzcjyj: '4.5',
          yjzhq:'2',
          fkfs: '月结'
        }, {
          number: 'HR101',
          name: 'HR-3000-005垫片',
          city: '8',
          mingcheng: '厂家D',
          djhj: '7.9',
          zip: '月结',
          time: '-----',
          xzcjyj: '7.5',
          yjzhq:'2',
          fkfs: '月结'
        } ]
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
       yulan() {
         alert('预览')
       },
       remove(index, row) {
           this.tableData.splice(index, 1);
       },
       arraySpanMethod({ row, column, rowIndex, columnIndex }) {
           if (columnIndex === 0) {
             if (rowIndex % 5 === 0) {
               return {
                 rowspan: 5,
                 colspan: 1
               };
             } else {
               return {
                 rowspan: 0,
                 colspan: 0
               };
             }
         }
         if (columnIndex === 1) {
             if (rowIndex % 2 === 0) {
              return {
                rowspan: 2,
                colspan: 1
                };
            } else {
               return {
                 rowspan: 0,
                 colspan: 0
               };
             }
       }
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
        width: 1161px;
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
