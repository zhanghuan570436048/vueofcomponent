<template>
    <div class="scrool">
         <div class="back"><button type="button" class="layui-btn layui-btn-radius layui-btn-primary" @click="back">返回</button></div>
        <div style="position: fixed;">
            <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>

        <div class="table table1" id="table1"></div>
        <div class="table table2" id="table2"></div>
        <div class="table table3" id="table3"></div>
        <div class="table table4" id="table4">
            hahhaha
        </div>
        <div class="table table5" id="table5"></div>
    </div>
</template>
<script>
export default {
  name: 'scrool',
  data () {
    return {
      msg: 'scrool',
      options: [
        {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '龙须面1'
        }, {
          value: '选项1',
          label: '龙须面2'
        }
      ],
      value: ''

    }
  },
  methods: {
    back () {
      this.$router.push('/')
    }
    //  document.querySelector("#cao").scrollIntoView();
  },
  watch: {
    value: {
      handler (nv, ov) {
        switch (nv) {
          case '选项2':
            document.querySelector('#table1').scrollIntoView()
            break
          case '选项3':
            document.querySelector('#table2').scrollIntoView()
            break
          case '选项4':
            document.querySelector('#table3').scrollIntoView()
            break
          case '选项5':
            document.querySelector('#table4').scrollIntoView()
            break
          default:
            document.querySelector('#table5').scrollIntoView('smooth')
        }
      },
      deep: true
    }
  }
}
</script>
<style scoped>
.scrool {
    width: 100%;
    height: 100%;
    position: relative;
}
.scrool .back {
    position: absolute;
    right: 10px;
    top: 20px;
    z-index: 10;
}
.scrool .table {
width: 800px;
height: 500px;
margin: 10px 0px;
}
.table1 {
    background-color: green;
}
.table2 {
    background-color: pink;
}
.table3 {
    background-color: yellow;
}
.table4 {
    background-color: orange;
}
.table5 {
    background-color: blueviolet;
}
</style>
<style>
html {
    scroll-behavior: smooth
}
</style>
