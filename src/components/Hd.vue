<template>
  <div class="vb">
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
        <el-form-item label="邮 箱:" prop="email" v-if="!this.loginOrnot">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <div class="login_button">
          <el-form-item>
            <el-button
              type="primary"
              size="small"
              @click="submitForm"
              v-if="this.loginOrnot"
              >立即登录</el-button
            >
            <el-button
              type="primary"
              size="small"
              @click="registerUser"
              v-if="this.loginOrnot"
              >前往注册</el-button
            >
            <el-button
              type="primary"
              size="small"
              @click="submitForm"
              v-if="!this.loginOrnot"
              >返回登录</el-button
            >
            <el-button
              type="primary"
              size="small"
              @click="submitForm"
              v-if="!this.loginOrnot"
              >立即注册</el-button
            >
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["loginOrnot"],
  data() {
    return {
      ruleForm: {
        user: "",
        password: "",
        email: "",
      },
      rules: {
        user: [{ required: true, message: "请输入帐号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.loginOrnot);

      if (this.ruleForm.user == "" || this.ruleForm.password == "") {
        this.$alert("请输出正常的帐号或密码", "错误提示", {
          type: "error",
          confirmButtonText: "确定",
          roundButton: true,
          showClose: false,
          callback: () => {
            return;
          },
        });
      } else {
        //请求服务器代码
      }
    },
    registerUser() {
      this.$router.push({ path: "/RegisterUser" });
    },
  },
};
</script>

<style lang="scss" scoped>
.from_data {
  margin-bottom: 30px;
  .from_data_box {
    display: flex;
  }
}
</style>
