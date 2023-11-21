<template>
  <div class="main">
    <ToHead @add="handleAdd"></ToHead>
    <ToContent @del="handleDel" :list="list"></ToContent>
    <ToFooter @delAll="handleDelAll" :len="list.length"></ToFooter>
    <MyTable :data="list2">
      <template #head>
        <tr>
          <th>ID</th>
          <th>名称</th>
          <th>价格(双击以修改)</th>
        </tr>
      </template>

      <!-- 注意需要加{}因为传入的值是一个对象 可以使用对象解构  -->
      <template #body="{ item }">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>
          <MyPrice v-model="item.price" :item="item"></MyPrice>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import ToHead from "./components/ToHead.vue";
import ToContent from "./components/ToContent.vue";
import ToFooter from "./components/ToFooter.vue";
import MyTable from "./components/MyTable.vue";
import MyPrice from "./components/MyPrice.vue";
export default {
  name: "App",
  components: {
    ToHead,
    ToContent,
    ToFooter,
    MyTable,
    MyPrice,
  },
  data() {
    return {
      list: JSON.parse(localStorage.getItem("list")) || [
        { id: 1, name: "洗澡" },
        { id: 2, name: "洗衣服" },
        { id: 3, name: "吃饭" },
        { id: 4, name: "看电视" },
        { id: 5, name: "写作业" },
      ],
      list2: [
        { id: 101, name: "铅笔", price: 10 },
        { id: 102, name: "钢笔", price: 21 },
      ],
    };
  },
  methods: {
    handleAdd(newAdd) {
      this.list.unshift({
        id: this.list.length + 1,
        name: newAdd,
      });
    },
    handleDel(id) {
      this.list = this.list.filter((item) => item.id !== id);
    },
    handleDelAll() {
      this.list = [];
    },
  },
  watch: {
    list: {
      deep: true,
      handler(newVal) {
        localStorage.setItem("list", JSON.stringify(newVal));
      },
    },
  },
};
</script>

<style>
</style>
