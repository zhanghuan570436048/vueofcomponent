<template>
  <div>
      <el-pagination
      class="pull-right"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      background
      ></el-pagination>
  </div>
</template>
<script>
export default {
  name: 'ZPagination',
  props: {
    currentPage: {
      type: Number
    },
    pageSize: {
      type: Number
    },
    total: {
      type: Number
    }
  },
  data () {
    return {
      // currentPage: 4
    }
  },
  methods: {
    handleSizeChange (val) {
      this.$emit('pageSizeChange', val)
      this.$emit('update:pageSize', val)
    },
    handleCurrentChange (val) {
      this.$emit('currentPageChange', val)
      this.$emit('update:currentPage', val)
    }
  }
}
</script>
<style scoped>

</style>
<style>
.pull-right{
  float:right;
}
</style>
