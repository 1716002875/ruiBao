<template>
  <div class="TabControl">
    <div
      class="TabControlC"
      v-for="(item, index) in names"
      :key="index"
      v-bind:class="{ active: index === nowindex }"
      v-on:click="getIndex(index)"> 
      <!-- 通过key的值可以给getIndex传递参数 -->
      <p class="TabControlp">{{ item }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  data() {
    return {
      nowindex: 0,
    };
  },
  props: {
    names: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    getIndex(index) {
      this.nowindex = index;
      this.$emit("untake", index);
    },
  },
  computed: {}
};
</script>
<style scoped>
.TabControl {
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  flex: 1;
}
.TabControlp {
  text-align: center;
  width: 80px;
  padding-bottom: 5px;
  padding-top: 10px;
}
.active {
  border-bottom: 4px solid var(--color-high-text);
  color: var(--color-high-text);
}
</style>