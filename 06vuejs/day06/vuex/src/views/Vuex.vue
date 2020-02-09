<template>
  <div>
    <div v-if="$store.state.show">11</div>
    <!-- 提交传参 -->
    <button @click="$store.commit('changeState',{data:1212})">clickme</button>

    <div>{{this.$store.state.num}}</div>
    <button @click="set">点击试试</button>
    <div>{{yy}}</div>
    <button @click="change">点击</button>
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      yy: state => state.yy 
    })
  },
  methods: {
    set() {
      this.$store.dispatch("setFun");//分发状态
    },
    ...mapMutations({
        change:'change' //相当于this.$store.commit('change)
    }) 
  }
};
</script>

<style></style>
