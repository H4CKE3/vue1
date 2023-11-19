<template>
  <div class="card">
    <div v-show="len" class="footer">
        <div class="count" ><span>共 计</span><span>{{len}}</span>条</div>
        <button @click='delAll' class="remove">清除数据</button>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    len:Number
  },
  data(){
    return {
      
    }
  },
  methods:{
    delAll(){
      this.$emit("delAll")
    }
  }
}
</script>

<style>

</style>