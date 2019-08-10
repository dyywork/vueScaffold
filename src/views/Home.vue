<template>
  <div class="home">
    <van-nav-bar title="首页"></van-nav-bar>
    <span>11111111</span>
  </div>
</template>

<script>
// @ is an alias to /src
import { fetchList, createArticle } from '@/services/login'
export default {
  name: 'home',
  created () {
    this.getList()
  },
  methods: {
    getList () {
      fetchList().then(res => {
        console.log(res)
      })
      createArticle().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss">
  .home {
    span{
      font-size: 12px;
    }
  }
</style>
