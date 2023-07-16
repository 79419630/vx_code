<template>
  <div class="from_data">
    <hd :loginOrnot="true"></hd>
  </div>
</template>

<script>
import Hd from "../components/Hd";

export default {
  components: {
    Hd,
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
