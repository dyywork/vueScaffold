<template>
  <div class="home">
    <van-nav-bar title="首页"></van-nav-bar>
    <van-button type="primary" @click="goList">List</van-button>
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
    },
    goList () {
      this.$router.push({ name: 'list' })
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
