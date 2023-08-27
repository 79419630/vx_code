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
            router
          >
            <el-menu-item index="/index">
              <i class="el-icon-s-home"></i>
              <span style="margin-right: 27px">首页</span>
            </el-menu-item>
            <el-submenu
              v-for="(item, index) in renderedMenuItems"
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

        <el-main>
          <div class="main_content">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentUserRole: "admin", //用户角色
      isCollapse: true,
      currentMenu: "",
      menuItems: [
        {
          title: "系统管理",
          icon: "el-icon-setting",
          route: "/",
          roles: ["admin", "user", "author"],
          children: [
            {
              title: "用户列表",
              route: "/systemList",
              roles: ["admin"],
            },
            {
              title: "角色管理",
              route: "/systemManage",
              roles: ["admin"],
            },
            {
              title: "参数设置",
              route: "/systemArgument",
              roles: ["admin", "author"],
            },
            {
              title: "授权记录",
              route: "/systemCode",
              roles: ["admin", "author", "user"],
            },
            {
              title: "帐号管理",
              route: "/systemUser",
              roles: ["admin", "author"],
            },
          ],
        },

        {
          title: "财务管理",
          icon: "el-icon-s-custom",
          route: "/money",
          roles: ["admin", "author", "user"],
          children: [
            {
              title: "收支明细",
              route: "/money/list",
              roles: ["admin", "author", "user"],
            },
            {
              title: "余额提现",
              route: "/money/withdraw",
              roles: ["admin", "author", "user"],
            },
            {
              title: "提现管理",
              route: "/money/moneySystem",
              roles: ["admin"],
            },
            {
              title: "充值接口",
              route: "/money/Pay",
              roles: ["admin"],
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleSelect(index) {
      this.currentMenu = index;
    },

    isShow() {
      this.isCollapse = !this.isCollapse;
    },
  },
  computed: {
    renderedMenuItems() {
      const currentUserRole = this.currentUserRole;
      const filteredMenuItems = this.menuItems.filter((menuItem) => {
        return menuItem.roles.includes(currentUserRole);
      });
      return filteredMenuItems.map((menuItem) => {
        if (menuItem.children) {
          const filteredChildren = menuItem.children.filter((childItem) => {
            return childItem.roles.includes(currentUserRole);
          });
          return { ...menuItem, children: filteredChildren };
        }
        return menuItem;
      });
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
      .user_icon {
        padding-right: 200px;
      }
    }
  }
}
</style>
