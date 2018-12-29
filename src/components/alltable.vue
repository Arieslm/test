<template id="table">
    <div class="table-container">
        <table class="table-content">
            <thead>
                <tr>
                   <th v-for="col in showColumns" :style="{width: col.width + 'px'}">{{col.title}}</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(item,indexs) in tableData.data">
                    <tr>
                        <template v-for="(col,index) in tableData.columns">
                            <template v-for="showItem in showColumns">
                                <td v-if="col.field == showItem.field" :class="showItem.style">
                                    <span>
                                        {{item[col.field]}}
                                    </span>
                                </td>
                            </template>
                        </template>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>
<script>
    /*
    */
    export default {
        props:{
            tableData: Object,
            showColumns: Array,
        },
        data() {
            return {
                test: '',
            }
        },
        mounted() {

        },
        methods: {

        }
    }
</script>
<style lang="scss" scoped>
    table,table tr th, table tr td {
        border:1px solid #cccccc;
        text-align: center;
        padding: 0 5px 0 5px;
    }
    th {
        background-color: #1c4a82;
        height: 44px;
        color: #ffffff;
    }
    td {
        height: 40px;
    }
    .text-left {
        text-align: left;
    }
    .text-right {
        text-align: right;
    }
    .table-container {
        width: 100%;
        .table-content {
            text-align: center;
            border-collapse: collapse;
            tbody{
                font-size: 14px;
            }
        }
    }
</style>
