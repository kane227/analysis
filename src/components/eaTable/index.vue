<template>
  <div class="eaTable" :style="{ height: height }">
    <div class="buttonGroup">
      <slot name="buttonGroup"></slot>
      <el-input
        class="searchInput"
        size="small"
        v-model="searchVal"
        placeholder="请输入搜索内容"
        v-if="searchable"
      ></el-input>
      <el-button size="small" v-if="searchable" @click="search">查询</el-button>
    </div>
    <div class="tableContent">
      <el-table
        ref="multipleTable"
        :data="tableData"
        :max-height="'calc(100% - 50px)'"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          v-for="(item, index) in colData"
          :key="index"
          :type="item.type"
          :width="item.width"
          :prop="item.prop"
          :label="item.label"
          align="center"
        >
          <template #default="scope" v-if="item.template">
            <div class="checkTxt" @click="templateClick(scope)">
              {{ item.template }}
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="tablePage">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[20, 40, 60, 80, 100]"
          :page-size="pageSize"
          layout=" prev, pager, next, total, sizes, jumper"
          :total="tableData.length"
          background
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: "100%",
    },
    searchable: {
      type: Boolean,
      default: true,
    },
    getTableDataUrl: {
      type: String,
      default: "",
    },
    colData: {
      type: Array,
      default: () => [],
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  mounted() {
    this.getTableData();
  },
  data() {
    return {
      searchVal: "",
      multipleSelection: [],
      pageSize: 20,
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
        {
          objcode: "20210115002",
          objname: "王大虎",
          jingbr: "吴小帅",
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
    getTableData() {
      console.log("加载数据");
    },
    templateClick(data) {
      this.$parent.checkDetail(data);
    },
    // 记录选中的行
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 监听每页条数变化
    handleSizeChange(val) {
      this.pageSize = val;
      this.getTableData();
    },
    // 监听当前页数变化
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getTableData();
    },
    // 搜索
    search() {
      this.getTableData();
    },
  },
};
</script>

<style lang="scss">
.buttonGroup {
  padding: 5px 0;
}
.tableContent {
  height: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px dashed #00a19d;
}
.tablePage {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
.checkTxt {
  cursor: pointer;
}
</style>