<template>
  <div class="user">
    <div class="user_content">
      <div class="list" v-for="(item, index) in userList" :key="index">
        <div class="user_list" v-if="item.title === '帐号详情'">
          <div class="title">{{ item.title }}</div>
          <div class="list_title">
            总帐号: <span>{{ item.data.totalnum }} 条</span>
          </div>
          <div class="list-num">
            授权:<span>{{ item.data.usedNumber }} 条</span>
          </div>
          <div class="list-surplus">
            剩余:<span>{{ item.data.leftNumber }} 条</span>
          </div>
        </div>
        <div class="user_list" v-else>
          <div class="title">{{ item.title }}</div>
          <div class="list_title">
            总收入: <span>{{ item.data.totalnum }} 元</span>
          </div>
          <div class="list-num">
            昨日收入:<span>{{ item.data.usedNumber }} 元</span>
          </div>
          <div class="list-surplus">
            今日收入:<span>{{ item.data.leftNumber }} 元</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["userList"],
};
</script>

<style lang="scss" scoped>
.user_content {
  display: flex;
  justify-content: space-around;
  .list {
    width: 240px;
    height: 200px;
    border-radius: 10px;
    background-color: #ab9f9fb7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .user_list {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
}
</style>
