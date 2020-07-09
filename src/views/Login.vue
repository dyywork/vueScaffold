<template>
  <div class="login">
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />

      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
    <van-button type="info" class="button" size="large" @click="login">登录test2</van-button>
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login () {
      if (this.username && this.password) {
        this.$router.push('/tabs')
      } else {
        Dialog.alert({
          message: '请输入用户名密码！',
        }).then(() => {
          // on close
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.login{
  margin-top: 140px;
  .button{
    margin-top: 20px;
    width: 80%;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
  }
}
</style>
