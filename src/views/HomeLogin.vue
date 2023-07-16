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
import LoginData from "../components/LoginData";

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
    .login_content {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      height: 100%;
    }
  }
}
</style>
