<template>
  <div class="from_data">
    <div class="from_data_box">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="60px"
        size="small"
        hide-required-asterisk
      >
        <el-form-item label="帐 号:" prop="user">
          <el-input v-model="ruleForm.user"></el-input>
        </el-form-item>
        <el-form-item label="密 码:" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        user: "",
        password: "",
      },
      rules: {
        user: [{ required: true, message: "请输入帐号", trigger: "blur" }],
        password: [],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
::v-deep .el-form-item__label {
  color: white;
  font-weight: 550;
}
</style>
<style></style>
