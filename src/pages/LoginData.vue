<template>
  <div class="from_data">
    <CommpentRegister :loginOrnot="true"></CommpentRegister>
  </div>
</template>

<script>
import CommpentRegister from "../components/CommpentRegister";

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
</style>
<style>
.el-message-box {
  width: 270px !important;
  border-radius: 2px;
}
</style>
