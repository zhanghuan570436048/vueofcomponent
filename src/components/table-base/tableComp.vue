<template>
  <div class="table-comp">
    <table class="layui-table" >
      <thead>
        <tr >
          <th v-for="(item,index) in config.tableColumns" :key="index">{{item.title}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in tableDate" :key="index">
          <td>{{item.nc}}</td>
          <td>{{item.jionDate}}</td>
          <td>{{item.qm}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'table-comp',
  props: {
    config: {
      type: Object,
      default: function () {
        return {}
      }
    },
    tableDate: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      msg: '表格基础组件--11'
    }
  },
  mounted () {
    console.log('父传入=>', this.config.tableColumns, this.tableDate)
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
