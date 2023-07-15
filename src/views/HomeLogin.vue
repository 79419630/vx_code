<template>
  <div class="home">
    <div class="login_home">
      <div class="home_img"><img src="aa" alt="" /></div>
      <div class="login_content">
        <login-data></login-data>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginData from "../components/LoginData.vue";
export default {
  components: {
    LoginData,
  },

  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  background: url("../assets/img/loding.jpg");

  background-size: cover;
  background-position: -30% center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_home {
    width: 300px;
    height: 450px;
    border: 3px beige solid;
    border-radius: 10px;

    .login_content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
}
</style>
