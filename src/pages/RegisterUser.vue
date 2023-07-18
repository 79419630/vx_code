<template>
  <div class="refister">
    <div class="refister_user">
      <div class="home_img"><img src="aa" alt="" /></div>
      <div class="refister_content">
        <CommpentRegister></CommpentRegister>
      </div>
    </div>
  </div>
</template>

<script>
import CommpentRegister from "../components/register/CommpentRegister";
export default {
  components: {
    CommpentRegister,
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-form-item__label {
  color: white;
  font-weight: 550;
}
.refister {
  height: 100%;
  background: url("../assets/img/loding.jpg");
  background-size: cover;
  background-position: -30% center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .refister_user {
    width: 300px;
    height: 450px;
    display: flex;
    flex-direction: column;
    border: 3px beige solid;
    background-color: rgba(255, 255, 255, 0.164);
    border-radius: 10px;
    box-shadow: 2px 2px 2px #fff;
    -webkit-box-shadow: #fff 2px 2px 10px;
    .home_img {
      flex: 1;
      color: red;
    }
    .refister_content {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      height: 100%;
    }
  }
}
</style>
<style></style>
