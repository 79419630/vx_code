<template>
  <div class="user">
    <el-container>
      <el-header>
        <div class="header">
          <div class="title">我是标题</div>
          <div class="header_box">
            <div class="isshow" @click="isShow">
              <i
                class="iconfont icon-zhankai"
                style="font-size: 24px"
                v-if="isCollapse == true"
              ></i>
              <i
                class="iconfont icon-shouqi"
                style="font-size: 24px"
                v-if="isCollapse == false"
              ></i>
            </div>
            <div class="user_icon">
              <i class="iconfont icon-yonghu" style="font-size: 24px"></i>
            </div>
          </div></div
      ></el-header>
      <el-container>
        <el-aside width="220px">
          <el-menu
            default-active="$router.push"
            @select="handleSelect"
            :collapse="isCollapse"
            background-color="#1f2b35"
            text-color="#fff"
            active-text-color="#409eff"
            :collapse-transition="false"
            router="true"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title"></span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title"></span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      currentMenu: "",
    };
  },
  methods: {
    handleSelect(index) {
      this.currentMenu = index;
      console.log(index);
    },
    isShow() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 400px;
}
.el-menu {
  height: 100vh;
}
.el-header {
  padding: 0px !important;
}
/* 侧边栏样式*/
.el-aside::-webkit-scrollbar {
  display: none;
}
</style>
<style lang="scss" scoped>
.user {
  width: 100%;
  height: 100%;
  display: flex;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background-color: #fff;
    .title {
      width: 230px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    .header_box {
      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }
  }
}
</style>
