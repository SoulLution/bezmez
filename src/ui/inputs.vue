<template>
  <div class="flex col">
    <div class="flex row">
      <input
        class="b-2 px-2 pt-3 pb-1 mr-7 b-solid border-black"
        type="number"
        v-model="data[0]"
      />
      <input
        class="b-2 px-2 pt-3 pb-1 b-solid border-black"
        type="number"
        v-model="data[1]"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [0, 0]
    }
  },
  watch: {
    data: {
      deep: true,
      handler(newData) {
        this.$emit("input", [this.data[0], this.data[1]]);
      }
    }
  },
  data() {
    return {
      data: JSON.parse(JSON.stringify(this.value))
    };
  }
};
</script>

<style lang="scss" scoped>
input {
  max-width: 95px;
}
</style>
