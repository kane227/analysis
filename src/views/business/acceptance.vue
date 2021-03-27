<template>
  <div class="esContent acceptance">
    <div class="cardTagBox">
      <card-tag
        v-for="(item, index) in cardTagList"
        :key="index"
        :title="item.title"
        :dataList="item.dataList"
      />
    </div>
    <es-table ref="esTable" :height="'calc(100% - 135px)'" :colData="colData">
      <template v-slot:buttonGroup>
        <el-button size="small" @click="add">新增</el-button>
        <el-button size="small" @click="edit">修改</el-button>
        <el-button size="small" @click="del">删除</el-button>
        <el-button size="small" @click="leadin">数据导入</el-button>
        <el-button size="small" @click="contrast">比对储备库</el-button>
      </template>
    </es-table>
    <el-dialog
      title="新增"
      :visible.sync="showFormLayer"
      width="30%"
      :close-on-click-modal="false"
      center
    >
      <el-form :model="formData" :rules="rules" label-width="100px">
        <el-form-item label="业务负责人" prop="objname">
          <el-input v-model="formData.objname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="经办人" prop="jingbr">
          <el-input v-model="formData.jingbr" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="phone">
          <el-input
            v-model.number="formData.phone"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="业务类型" prop="leix">
          <el-select v-model="formData.leix" placeholder="请选择业务类型">
            <el-option label="10kV大客户" value="0"></el-option>
            <el-option label="100kV大客户" value="1"></el-option>
            <el-option label="500kV大客户" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="showFormLayer = false">取 消</el-button>
          <el-button type="primary" @click="formSubmit">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import cardTag from "@/components/cardTag";
import esTable from "@/components/eaTable";
import colData from "@/utils/tableColData.js";
export default {
  components: {
    cardTag,
    esTable,
  },
  data() {
    return {
      searchVal: "",
      showFormLayer: false,
      cardTagList: [
        {
          title: "业务受理",
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
      colData: colData.acceptanceCol,
      formData: {
        objname: "",
        jingbr: "",
        phone: "",
        leix: "",
      },
      rules: {
        objname: [
          { required: true, message: "请输入业务负责人", trigger: "blur" },
        ],
        jingbr: [{ required: true, message: "请输入经办人", trigger: "blur" }],
        phone: [
          {
            required: true,
            type: "number",
            message: "请输入联系方式",
            trigger: "blur",
          },
        ],
        leix: [
          { required: true, message: "请选择业务类型", trigger: "change" },
        ],
      },
      formLabelWidth: "100px",
    };
  },
  methods: {
    checkDetail(data) {
      console.log(data);
    },
    add() {
      console.log(123);
      this.showFormLayer = true;
    },
    edit() {},
    del() {
      console.log(this.$refs.esTable.multipleSelection);
    },
    leadin() {},
    contrast() {},
    formSubmit() {
      this.$refs.esTable.getTableData();
      this.showFormLayer = false;
      this.$message({
        message: "新增成功",
        type: "success",
      });
    },
  },
};
</script>
<style lang="scss">
.tablePage {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
</style>