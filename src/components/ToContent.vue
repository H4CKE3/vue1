<template>
  <div class="card">
    <ul class="content">
      <li v-for="(item, idx) in list" :key="item.id">
        <span class="idx">{{ idx + 1 }}</span>
        <span class="todo">{{ item.name }}</span>
        <button @click="delOne(item.id)" class="remove">×</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
  },
  data() {
    return {};
  },
  methods: {
    delOne(id) {
      this.$emit("del", id);
    },
  },
};
</script>

<style>
</style>