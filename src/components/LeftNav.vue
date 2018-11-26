<template>
  <div :class="[navIsCollapse ? 'is-collapse' : '', 'left-nav']">
    <el-menu
      :default-active="activeIndex"
      :router="true">
      <el-menu-item
        v-for="(nav, index) of navArr"
        :key="index"
        :index="`${nav.name}`">
        <span slot="title">{{ nav.meta.title}}</span>
      </el-menu-item>
  </el-menu>
</div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { constRouteMap } from '@/router';

@Component
export default class LeftNav extends Vue {
  activeIndex: string = ''

  @Getter navIsCollapse;

  @Watch('$route')
  onRouteChange() {
    this.routeActive();
  }

  mounted() {
    this.routeActive();
  }

  get navArr() {
    return constRouteMap;
  }

  routeActive() {
    const { name = 'serviceManage' } = this.$route;
    this.activeIndex = name;
  }
}
</script>

<style lang="scss" scoped>
.left-nav {
  background-color: $clr-white;
  position: relative;
  height: calc(100vh - #{$h-header});
  width: 10em;
  overflow: hidden;
  transition: width 0.5s;
  &.is-collapse {
    width: 0;
  }
}
</style>
