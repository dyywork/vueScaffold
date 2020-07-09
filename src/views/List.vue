<template>
  <div class="list">
    <van-nav-bar title="List" left-text="返回" left-arrow @click-left="onClickLeft" />
    <h1>test2</h1>
    <router-link to="/home">home</router-link>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {}
  },
  created () {},
  methods: {
    onClickLeft () {
      this.$router.back()
    },
  },
}
</script>
