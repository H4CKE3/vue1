<template>
  <table>
    <thead>
      <!-- 这里是把列表标题传给父组件处理 -->
      <slot name="head"></slot>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.id">
        <!-- 这里把for渲染出来的数据 传给父组件处理 父组件 达到可以自定义标签等等 -->
        <slot name="body" :item="item"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>