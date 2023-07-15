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
        <div class="login_button">
          <el-form-item>
            <el-button
              type="primary"
              size="small"
              @click="submitForm('ruleForm')"
              >立即登录</el-button
            >
            <el-button type="primary" size="small">前往注册</el-button>
          </el-form-item>
        </div>
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
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
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

.from_data {
  margin-bottom: 30px;
  .from_data_box {
    .login_button {
      display: flex;
    }
  }
}
</style>
