<template>
  <div class="esContent customer">
    <div class="cardTagBox">
      <card-tag
        v-for="(item, index) in cardTagList"
        :key="index"
        :title="item.title"
        :dataList="item.dataList"
      />
    </div>
    <div class="cardPageBox">
      <cardPage
        v-for="(item, index) in cardPageList"
        :key="index"
        :title="item.title"
        :name="item.name"
        :phone="item.phone"
        :dataList="item.dataList"
      />
    </div>
  </div>
</template>

<script>
import cardTag from "@/components/cardTag";
import cardPage from "@/components/cardPage";
export default {
  components: {
    cardTag,
    cardPage,
  },
  data() {
    return {
      cardTagList: [
        {
          title: "供电网络",
          dataList: [
            {
              numder: "88",
              unit: "件",
              color: "",
            },
            {
              numder: "70",
              unit: "个",
              color: "",
            },
          ],
        },
      ],
      cardPageList: [
        {
          title: "xx供电网络",
          name: "zs",
          phone: "13888888888",
          dataList: [
            {
              customer: "xx物流公司",
              capacity: "2000kVA",
              date: "2021",
            },
            {
              customer: "xx加工公司",
              capacity: "4000kVA",
              date: "2022",
            },
            {
              customer: "张三",
              capacity: "500kVA",
              date: "2020",
            },
            {
              customer: "张三1",
              capacity: "500kVA",
              date: "2020",
            },
            {
              customer: "张三2",
              capacity: "500kVA",
              date: "2020",
            },
          ],
        },
      ],
    };
  },
  methods: {
    add() {},
    edit() {},
    del() {},
    leadin() {},
    contrast() {},
    search() {},
  },
};
</script>
<style lang="scss" scoped>
.cardPageBox {
  margin-top: 5px;
  padding: 5px;
  border: 1px dashed #00a19d;
}
</style>