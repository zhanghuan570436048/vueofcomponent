<template>
  <div class="form-test">
    <formCom :formConfing="formConfing"></formCom>
  </div>
</template>
<script>
import formCom from './formCom'
export default {
  name: 'form-test',
  components: {
    formCom
  },
  data () {
    return {
      formConfing: [
        { label: '机构名称',
          name: 'unitName',
          type: 'input',
          width: '45%',
          colSpan: 1
        },
        { label: '机构层级',
          name: 'unitLevel',
          type: 'selected',
          width: '45%',
          options: [{ text: '县', value: '0' }, { text: '乡镇、街道', value: '1' }, { text: '村、社区', value: '2' }],
          colSpan: 1
        },
        { label: '备注',
          name: 'remark',
          type: 'textarea',
          colSpan: 2
        },
        { label: '日期',
          name: 'time',
          type: 'date',
          colSpan: 1
        },
        { label: '日期',
          name: 'time',
          type: 'checkboxGroup',
          colSpan: 1
        },
        { label: '日期',
          name: 'time',
          type: 'radioGroup',
          colSpan: 1
        }
      ]
    }
  }
}
</script>
<style scoped>

</style>
