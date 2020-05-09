<template>
  <div class="login">
    {{username}}
    <van-list>
      <van-cell v-for="item in list" :title="item.name"></van-cell>
    </van-list>
    <van-button @click="login">ceshi</van-button>
    <van-button @click="stop">体制</van-button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      list: [],
    }
  },
  created () {

  },
  mounted () {
    // 获取蓝牙状态
    document.addEventListener('plusready', this.onPlusReady, false);
  },
  methods: {
    login () {
      plus.bluetooth.getBluetoothDevices({
        success: function (e) {
          var devices = e.devices;
          this.list = [];
          this.list = devices
          this.username = JSON.stringify(devices);
          console.log('get devices success: ' + JSON.stringify(devices));
        },
        fail: function (e) {
          console.log('get devices failed: ' + JSON.stringify(e));
        },
      });
    },
    onPlusReady () {
      console.log('plusready');
      console.log(window)
      window.plus.bluetooth.openBluetoothAdapter({
        success: (e) => {
          this.getBluetoothDevices();
          /* console.log('open success: ' + JSON.stringify(e));
          window.plus.bluetooth.getBluetoothAdapterState({
            success: (e) => {
              console.log('state success: ' + JSON.stringify(e));
            },
            fail: (e) => {
              console.log('state failed: ' + JSON.stringify(e));
            },
          }) */
        },
        fail: (e) => {
          console.log('open failed: ' + JSON.stringify(e));
        },
      });
    },
    getBluetoothDevices () {
      plus.bluetooth.startBluetoothDevicesDiscovery({
        success: function (e) {
          plus.bluetooth.onBluetoothDeviceFound(function (e) {
            var devices = e.devices;
            console.log('device found: ' + devices);
            for (var i in devices) {
              console.log(i + ': ' + JSON.stringify(devices[i]));
            }
          });
          console.log('start discovery success: ' + JSON.stringify(e));
        },
        fail: function (e) {
          console.log('start discovery failed: ' + JSON.stringify(e));
        },
      });
      /* window.plus.bluetooth.getBluetoothDevices({
        success: function (e) {
          var devices = e.devices;
          console.log('get devices success: ' + JSON.stringify(e));
        },
        fail: function (e) {
          console.log('get devices failed: ' + JSON.stringify(e));
        },
      }); */
    },
    stop () {
      plus.bluetooth.closeBluetoothAdapter({
        success: function (e) {
          console.log('close success: ' + JSON.stringify(e));
        },
        fail: function (e) {
          console.log('close failed: ' + JSON.stringify(e));
        },
      });
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
