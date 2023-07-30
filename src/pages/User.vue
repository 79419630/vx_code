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
        <el-aside :width="isCollapse ? '66px' : '220px'">
          <el-menu
            :default-active="currentMenu"
            @select="handleSelect"
            :collapse="isCollapse"
            background-color="#fff"
            text-color="#000"
            active-text-color="#409eff"
            :collapse-transition="false"
            :router="true"
          >
            <el-menu-item index="/home">
              <i class="el-icon-s-home"></i>
              <span style="margin-right: 27px">首页</span>
            </el-menu-item>
            <el-submenu
              v-for="(item, index) in menuItems"
              :key="index"
              :index="item.route"
            >
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{ item.title }}</span>
              </template>
              <el-menu-item-group v-if="item.children">
                <el-menu-item
                  v-for="(items, index) in item.children"
                  :key="index"
                  :index="items.route"
                  >{{ items.title }}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main>main</el-main>
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
      menuItems: [
        {
          title: "系统管理",
          icon: "el-icon-setting",
          route: "/",
          role: "both",
          children: [
            {
              title: "用户列表",
              route: "/users/list",
            },
            {
              title: "添加用户",
              route: "/users/add",
            },
          ],
        },
        {
          title: "个人资料",
          icon: "el-icon-s-custom",
          route: "/profile",
          role: "user",
          children: [
            {
              title: "用户列表",
              route: "/users/list",
            },
            {
              title: "添加用户",
              route: "/users/add",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleSelect(index) {
      console.log(index);
      this.currentMenu = index;
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

.el-header {
  padding: 0px !important;
}
/* 侧边栏样式*/
.el-aside::-webkit-scrollbar {
  display: none;
}
.el-aside {
  background-color: #fff;
}
.el-menu {
  border-right: 0px !important;
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
