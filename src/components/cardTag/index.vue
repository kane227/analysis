<template>
  <div
    class="cardTag"
    :style="{
      background:
        'linear-gradient(-135deg, transparent 10px, ' + bgColor + ' 0)',
    }"
  >
    <div class="title">{{ title }}</div>
    <div style="display: flex">
      <div class="content" v-for="(_item, _index) in dataList" :key="_index">
        <template v-if="type === 'separate'">
          <span
            class="numCell"
            :style="{ color: _item.numColor }"
            v-for="(item, index) in _item.numder"
            :key="index"
            >{{ item }}</span
          >
        </template>
        <template v-if="type === 'whole'">
          <span
            class="numCell whole"
            :style="{ 'background-color': bgColor }"
            >{{ _item.numder }}</span
          >
        </template>
        <span class="unit">{{ _item.unit }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cardTag",
  props: {
    type: {
      type: String,
      default: "separate",
    },
    bgColor: {
      type: String,
      default: "#00a19d",
    },
    title: {
      type: String,
      default: "业务受理",
    },
    dataList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.cardTag {
  min-width: 150px;
  height: 80px;
  color: #fff;
  display: inline-block;
  padding-right: 20px;
  margin: 5px;
  text-align: center;
  // background: linear-gradient(-135deg, transparent 10px, #00a19d 0);
  .title {
    height: 30px;
    line-height: 19px;
    font-size: 14px;
    padding: 5px 0;
    border-bottom: 1px dashed #fff;
  }
  .content {
    flex: 1;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    border-left: 1px dashed #fff;
    .numCell {
      width: 18px;
      height: 30px;
      line-height: 30px;
      color: #00a19d;
      display: inline-block;
      background-color: #fff;
      margin: 10px 5px;
    }
    .whole.numCell {
      color: #fff;
      background-color: #00a19d;
      margin-right: -10px;
    }
    .unit {
      margin-left: 10px;
    }
  }
  .content:first-child {
    border-left: none;
  }
}
</style>