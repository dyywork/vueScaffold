<template>
  <div class="home">
    <van-nav-bar title="首页" fixed></van-nav-bar>
    <van-button type="primary" @click="goList">test1</van-button>
    <van-cell-group>
      <van-cell v-for="i in list" :key='i' :title="i" is-link @click="goList" :value="i"></van-cell>
    </van-cell-group>
  </div>
</template>

<script>
// @ is an alias to /src
import { fetchList, createArticle } from '@/services/login'
export default {
  name: 'home',
  data () {
    return {
      list: [],
    }
  },
  created () {
    // this.getList()
    setTimeout(() => {
      for (var i = 0; i < 100; i++) {
        this.list.push(i)
      }
    })
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
    },
  },
}
</script>

<style lang="scss">
  .home {
    span{
      font-size: 12px;
    }
  }
</style>
