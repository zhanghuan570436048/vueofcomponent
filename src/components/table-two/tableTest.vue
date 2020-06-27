<template>
  <div class="table-base">
    <!-- 表格 -->
      <ZTable ref="table-comp" :tableConfig="tableConfig">
        <template v-slot:status="slotData">
          {{slotData.data.myname}}
        </template>
        <template v-slot:btns="slotData">
          <el-row :row="slotData.data">
            <el-button size="mini" @click="clickEdit(slotData.data)">编辑</el-button>
            <el-button size="mini">删除</el-button>
            <el-button size="mini">提交</el-button>
          </el-row>
        </template>
      </ZTable>
      <!-- 分页 -->
    <ZPagination :currentPage.sync="currentPage" :pageSize.sync="pageSize" :total="total"
    @pageSizeChange="pageSizeChange"
    @currentPageChange="currentPageChange"></ZPagination>
  </div>
</template>

<script>
import ZTable from './table'
import ZPagination from './pagination'
export default {
  name: 'table-test',
  components: {
    ZTable,
    ZPagination

  },
  data () {
    return {
      tableConfig: {
        selection: true, // 是否配置多选框，默认false
        btns: [
          {
            id: 'addzdmd',
            name: '新增',
            enableClass: 'btn-primary',
            visible: true
          }
        ],
        tableColumns: [
          {
            title: '昵称',
            field: 'nc',
            align: 'center', // 对其方式，默认center
            visible: true
          },
          {
            title: '加入时间',
            field: 'jionDate',
            align: 'center',
            visible: true
          },
          {
            title: '签名',
            field: 'qm',
            visible: true
          },
          {
            title: '姓名',
            field: 'myname',
            visible: true,
            columnType: 'slot',
            slotName: 'status'
          },
          {
            title: '操作',
            field: '',
            visible: true,
            columnType: 'slot', // 是否启用插槽
            slotName: 'btns' // 插槽的名字
          }
        ],
        tableData: []
      },
      currentPage: 1,
      pageSize: 10,
      total: 50
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.axios.get('/static/table1.json').then((response) => {
        if (response.data.success) {
          this.tableConfig.tableData = response.data.data
        }
      }).catch((error) => {
        console.log(error)
      })
    },
    clickEdit (e) {
      console.log(e)
    },
    pageSizeChange (val) {
      this.currentPage = 1
      console.log('pageSizeCh=>', this.currentPage, val)
    },
    currentPageChange (val) {
      console.log('currentPage=>', val)
    }
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-base {
    width: 100%;
    height: 100%;
    position: relative;
    border:1px red dashed;
}
.table-base .back {
    position: absolute;
    right: 10px;
    top: 20px;
    z-index: 10;
}
</style>
