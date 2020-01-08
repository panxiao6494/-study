<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-calendar v-model="value"></el-calendar>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data() {
    return {
      value: new Date()
    };
  },
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

