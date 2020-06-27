<template>
  <div class="table-comp">
    <el-table :data="tableConfig.tableData" v-if="tableConfig">
      <!-- 多选 -->
      <el-table-column v-if="tableConfig.selection?true:false" type="selection" width="55"></el-table-column>
      <template v-for="(item,index) in tableConfig.tableColumns" >
        <!--v-slot-->
        <el-table-column :key="item.field" :prop="item.field" :label="item.title" :width="item.width"
          v-if="item.columnType === 'slot'"
          :align="item.align?item.align:'center'">
          <template slot-scope="scope">
            <slot :name="item.slotName" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <!-- 文本数据 -->
         <el-table-column v-else :prop="item.field" :label="item.title" :width="item.width" :key="index" :align="item.align?item.align:'center'"></el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'mytable',
  components: {
  },
  props: {
    tableConfig: {
      type: Object
    }
  },
  data () {
    return {

    }
  },
  mounted () {
  },
  methods: {

  },
  watch: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
