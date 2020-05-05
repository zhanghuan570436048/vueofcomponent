<template>
  <div class="table-base">
      <div class="back"><button type="button" class="layui-btn layui-btn-radius layui-btn-primary" @click="back">返回</button></div>
      <tableComp ref="table-comp" :config="config" :tableDate="tableDate"></tableComp>
  </div>
</template>

<script>
import tableComp from './tableComp'
export default {
  name: 'table-base',
  components: {
    tableComp
  },
  data () {
    return {
      msg: '表格基础组件',
      tableDate: [],
      config: {
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
            align: 'center',
            valign: 'middle',
            visible: true
          },
          {
            title: '加入时间',
            field: 'jionDate',
            align: 'center',
            valign: 'middle',
            visible: true
          },
          {
            title: '签名',
            field: 'qm',
            align: 'center',
            valign: 'middle',
            visible: true
          }
        ]
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    back () {
      this.$router.push('/')
    },
    getData () {
      this.axios.get('/static/table.json').then((response) => {
        console.log('=======', response.data.data)
        if (response.data.success) {
          this.$set(this, 'tableDate', response.data.data)
        }
      }).catch((error) => {
        console.log(error)
      })
    }
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
