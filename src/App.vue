<template>
  <div class = 'main'>
    <ToHead @add= "handleAdd"></ToHead>
    <ToContent  @del = 'handleDel' :list = "list"></ToContent>
    <ToFooter @delAll = 'handleDelAll' :len = list.length></ToFooter>
  </div>
</template>

<script>
import ToHead from './components/ToHead.vue'
import ToContent from './components/ToContent.vue'
import ToFooter from './components/ToFooter.vue'

export default {
  name: "App",
  components: {
    ToHead,
    ToContent,
    ToFooter
  },
  data(){
    return {
      
      list:JSON.parse(localStorage.getItem('list'))||[
        {
          id:1,
          name:'洗澡'
        },
        {
          id:2,
          name:'洗衣服'
        },
        {
          id:3,
          name:'吃饭'
        },
        {
          id:4,
          name:'看电视'
        },
        {
          id:5,
          name:'写作业'
        }
      ]
    }
  },
  methods:{
    handleAdd(newAdd){
      this.list.unshift({
        id:this.list.length+1,
        name:newAdd})
    },
    handleDel(id){
      this.list = this.list.filter(item=>item.id!==id)
    },
    handleDelAll(){
      this.list = []
    }
  },
  watch:{
    list:{
      deep:true,
      handler(newVal){
        localStorage.setItem("list",JSON.stringify(newVal))
      }
    }
  }
};
</script>

<style>
</style>
