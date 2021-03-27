<template>
  <div class="cardPage">
    <div class="title">{{ title }}</div>
    <div class="name">{{ title + "管理员：" + name }}</div>
    <div class="phone">{{ "联系电话：" + phone }}</div>
    <div class="content">
      <ul>
        <li v-for="(item, index) in dataList" :key="index">
          <div
            class="liItem"
            :class="{ mostImportant: index === 0, important: index === 1 }"
          >
            <div class="customer">
              {{
                (index === 0 || index === 1 ? "重要" : "") +
                "客户：" +
                item.customer
              }}
            </div>
            <div class="capacity">{{ "报装容量：" + item.capacity }}</div>
            <div class="year">{{ "预计时间：" + item.date }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "cardPage",
  props: {
    title: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "13888888888",
    },
    dataList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.cardPage {
  width: 275px;
  font-size: 13px;
  color: #fff;
  padding: 8px;
  background-color: #00a19d;
  .title {
    padding-bottom: 6px;
    text-align: center;
    border-bottom: 1px dashed #fff;
  }
  .name,
  .phone {
    padding: 15px 20px 8px;
  }
  .phone {
    padding-top: 0;
  }
  .content {
    padding: 0 8px;
    ul {
      li {
        padding: 8px 10px;
        margin-bottom: 5px;
        border: 1px dashed #fff;
        .liItem {
          div {
            padding: 3px;
          }
        }
        .liItem.important {
          color: orange;
        }
        .liItem.mostImportant {
          color: red;
        }
      }
    }
  }
}
</style>