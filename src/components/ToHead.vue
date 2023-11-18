<template>
  <div class="card"> 
    <div class="title">记事本</div>
      <div class="add">
        <input @keyup.enter="addFunc" v-model = 'newName' type="text" placeholder="请输入任务" class="input" />
        <button @click="addFunc" class="addNew">添加任务</button>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      newName:''
    }
  },
  methods:{
    addFunc(){
      if(this.newName.trim() == ''){
        alert("任务名称不能为空")
        return
      }
      this.$emit('add',this.newName)
      this.newName = ''
    }
  }
}
</script>

<style>

</style>