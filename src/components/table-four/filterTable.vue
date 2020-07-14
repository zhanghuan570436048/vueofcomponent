<template>
  <div class = "btns" v-if="zfilters">
    <template v-for = "(item,index) in zfilters">
    <div class="select" :key="index" v-if="item.type=='input'">
      <span>{{item.label}}</span>
       <el-input v-model="item.filter" placeholder="请输入内容"></el-input>
    </div>
    <div class="select" :key="index" v-if="item.type=='singleSelect'">
      <span>{{item.label}}</span>
      <el-select v-model="item.filter" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="select" :key="index" v-if="item.type=='multipleSelect'">
       <span>{{item.label}}</span>
      <el-select v-model="item.filter" multiple placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button @click="querybrns">默认按钮</el-button>
    </div>

  </template>

  </div>
</template>
<script>
export default {
  name: 'filterTable',
  props: {
    filters: {
      type: Array
    }
  },
  data () {
    return {
      input: '',
      value: '',
      value1: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      zfilters: []
    }
  },
  mounted () {
    this.zfilters = this.filters.map(item => {
      return Object.assign({}, {
        filter: '',
        label: item.label,
        type: item.type
      })
    })
  },
  computed: {
    // zfilters: function () {
    //   return this.filters.map(item => {
    //     return Object.assign(item, {'selectVal': ''})
    //   })
    // }
  },
  methods: {
    querybrns () {
      console.log(this.zfilters)
      let zfilters = this.zfilters.map(item => {
        return item.filter
      })
      this.$emit('clickQuery', zfilters)
    }
  }
}
</script>
<style scoped>
.btns{
  height:60px;
  align-items: center;
  display: flex;
  width:100%;
  justify-content: flex-start;

}
.select {
margin-left: 5px;
}

</style>
