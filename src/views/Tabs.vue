<template>
  <div>
    <router-view />
    <van-tabbar route>
      <van-tabbar-item
        replace
        to="/home"
        icon="home-o"
      >
        首页
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/about"
        icon="search"
      >
        个人中心
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
