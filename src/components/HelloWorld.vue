<template>
  <div class="hello">
    <div class="layui-btn-container">
      <button type="button" class="layui-btn" @click="goInfo">表格基础组件</button>
      <button type="button" class="layui-btn" @click="goInfo2">按钮二</button>
      <button type="button" class="layui-btn">按钮三</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
  mounted () {},
  methods: {
    goInfo () {
      this.$router.push('/tableBase')
    },
    goInfo2 () {
      this.$router.push('/scrool')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 800px;
  height: 200px;
  border: 1px green dashed;
  margin: 0 auto;
  padding: 10px;
}
</style>
