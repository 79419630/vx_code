<template>
  <div class="index_box">
    <div class="content">
      <div class="left">
        <div class="left_content">
          <div class="img_content"><img :src="img" /></div>
          <div class="user_list">
            <div class="user_jurisdiction">当前登录用户:{{ jurisdiction }}</div>
            <div class="user_money">
              <p v-if="jurisdiction !== '超级管理员'">
                当前余额: <span>{{ money }}</span> 元
              </p>
              <p v-else>
                待处理提现:<span>{{ moneyWithdraw }}</span> 条
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="right"><common-user :userList="userList"></common-user></div>
    </div>
  </div>
</template>

<script>
import CommonUser from "../../components/common/CommonUser";
export default {
  components: {
    CommonUser,
  },
  data() {
    return {
      jurisdiction: "超级管理员",
      money: 100,
      moneyWithdraw: 3,
      img: require("../../assets/imgs/user.jpg"),
      userList: [
        {
          title: "帐号详情",
          data: {
            totalnum: 100,
            usedNumber: 50,
            leftNumber: 50,
          },
        },
        {
          title: "收入详情",
          data: {
            totalnum: 200,
            usedNumber: 10,
            leftNumber: 20,
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.index_box {
  height: 100vh;
  .content {
    display: flex;
    justify-content: center;
    background-color: #fff;
    .left {
      display: flex;
      justify-content: center;
      flex: 1;
      .left_content {
        width: 240px;
        border-radius: 10px;
        background-color: #ab9f9fb7;
        .img_content {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px;

          img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
          }
        }
      }
      .user_list {
        .user_money {
          p {
            span {
              color: brown;
            }
          }
        }
      }
    }
    .right {
      flex: 2;
    }
  }
}
</style>
