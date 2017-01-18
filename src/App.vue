<template>
  <transition :name='transitionName'>
    <router-view></router-view>
  </transition>
</template>
<script>
import vHeader from './components/header.vue'
import vFooter from './components/footer.vue'
import show from './views/show.vue'
import center from './views/center.vue'
import type from './components/type.vue'
import showList from './views/showList.vue'
import showDetail from './views/showDetail.vue'
import myWallet from './views/myWallet.vue'
import pointRule from './views/pointRule.vue'
import myInfo from './views/myInfo.vue'
export default {
  name: 'app',
  data() {
    return {
      transitionName: ''
    }
  },
  components: {
    vHeader,
    vFooter,
    show,
    center,
    showList,
    type,
    showDetail,
    myWallet,
    pointRule,
    myInfo
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
};
</script>
<style>
html,
body,
div,
input,
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.row {
  margin-right: 0;
  margin-left: 0;
}

.block {
  display: block;
}

a {
  color: #333;
}
</style>