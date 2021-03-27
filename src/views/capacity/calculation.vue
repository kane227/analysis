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
    <div class="buttonGroup">
      <el-button size="small" @click="refresh">刷新数据</el-button>
      <el-button size="small" @click="calculation">容量测算</el-button>
    </div>
    <div class="tableContent">
      <el-table
        :data="tableData"
        height="250"
        border
        :cell-style="cellCenter"
        :header-cell-style="cellCenter"
        style="width: 100%"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column type="index" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="objcode" label="业扩受理编号"> </el-table-column>
        <el-table-column prop="objname" label="业务负责人"> </el-table-column>
        <el-table-column prop="jingbr" label="经办人"> </el-table-column>
        <el-table-column prop="phone" label="联系方式"> </el-table-column>
        <el-table-column prop="leix" label="业务类型"> </el-table-column>
        <el-table-column prop="period" label="所处阶段">
          <template #default="scope">
            <div class="checkTxt" @click="checkPeriod(scope)">点击查看</div>
          </template>
        </el-table-column>
        <el-table-column prop="mingx" label="业务受理明细"> </el-table-column>
        <el-table-column prop="file" label="客户受理资料"> </el-table-column>
      </el-table>
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
    refresh() {},
    calculation() {},
  },
};
</script>