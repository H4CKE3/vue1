<template>
  <div>
    <input
      v-focus
      @blur="
        () => {
          showInp = false;
        }
      "
      @keyup.enter="change"
      ref="inp"
      :value="item.price"
      v-if="showInp"
      type="text"
    />
    <div @dblclick="showInput" v-else>{{ item.price }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      showInp: false,
    };
  },
  methods: {
    showInput() {
      this.showInp = !this.showInp;
      // this.$nextTick(() => {
      //   this.$refs.inp.focus();
      // });
    },
    change(e) {
      if (e.target.value < 0) {
        e.target.value = this.item.price;
        alert("价格类型出错");
        return;
      }
      this.showInp = !this.showInp;
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style>
</style>