<template>
  <div>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <VKeepAliveChain>
      <router-view v-if="!$route.meta.keepAlive"/>
    </VKeepAliveChain>
    <van-tabbar route v-show="showTabs">
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

<script>
export default {
  name: 'tabs',
  data () {
    return {

    }
  },
  computed: {
    showTabs () {
      return this.$store.state.tabsHide
    },
  },
  created () {
    console.log(this.$store.state.tabsHide)
  },
  methods: {

  },
}
</script>
