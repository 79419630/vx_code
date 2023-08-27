<template>
  <div class="user">
    <div class="user_list">
      <div class="list">
        <div class="title">我是标题</div>
        <div class="list_title">总帐号: <span>100</span></div>
        <div class="list-num">授权:<span>50</span></div>
        <div class="list-surplus">剩余:<span>60</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
};
</script>

<style lang="scss" scoped>
.user_list {
  width: 240px;
  height: 200px;
  border-radius: 10px;
  background-color: blue;

  .list {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title,
    .list_title,
    .list-num,
    .list-surplus {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
