<template>
  <div class="esContent calculation">
    <div class="cardTagBox">
      <card-tag
        v-for="(item, index) in cardTagList"
        :key="index"
        :type="'whole'"
        :bgColor="item.bgColor"
        :title="item.title"
        :dataList="item.dataList"
      />
    </div>
  </div>
</template>
<script>
import cardTag from "@/components/cardTag";
export default {
  components: {
    cardTag,
  },
  data() {
    return {
      searchVal: "",
      cardTagList: [
        {
          title: "业务受理",
          bgColor: "orange",
          dataList: [
            {
              numder: "88",
              unit: "件",
              color: "",
            },
          ],
        },
        {
          title: "10kV",
          dataList: [
            {
              numder: "28",
              unit: "个",
              color: "#333",
            },
          ],
        },
        {
          title: "速办电",
          dataList: [
            {
              numder: "48",
              unit: "件",
              color: "",
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