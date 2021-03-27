<template>
  <div class="eaTable">
    <div class="buttonGroup">
      <el-button size="small" @click="add">新增</el-button>
      <el-button size="small" @click="edit">修改</el-button>
      <el-button size="small" @click="del">删除</el-button>
      <el-button size="small" @click="leadin">数据导入</el-button>
      <el-button size="small" @click="contrast">比对储备库</el-button>
      <el-input
        class="searchInput"
        size="small"
        v-model="searchVal"
        placeholder="请输入搜索内容"
      ></el-input>
      <el-button size="small" @click="search">查询</el-button>
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
export default {
  data() {
    return {
      searchVal: "",
      tableData: [
        {
          objcode: "20210115001",
          objname: "王小虎",
          jingbr: "吴大帅",
          phone: "138********",
          leix: "10kV大客户",
          period: "",
          mingx: "",
          file: "",
        },
      ],
    };
  },
  methods: {
    cellCenter() {
      return "text-align:center";
    },
    checkPeriod(data) {
      console.log(data);
    },
    add() {},
    edit() {},
    del() {},
    leadin() {},
    contrast() {},
    search() {},
  },
};
</script>

<style lang="scss">
.buttonGroup {
  padding: 5px 0;
}
.tableContent {
  padding: 8px;
  border: 1px dashed #00a19d;
}
.checkTxt {
  cursor: pointer;
}
</style>