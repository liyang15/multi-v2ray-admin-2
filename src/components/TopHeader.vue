<template>
  <div class="top-header">
    <span @click="toggleNav()" class="toggle-icon">
      <i v-show="navIsCollapse" style="font-size:1.5em;" class="el-icon-more"></i>
      <i v-show="!navIsCollapse"  style="font-size:1.5em;" class="el-icon-more-outline"></i>
    </span>
    {{title}}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

@Component
export default class TopHeader extends Vue {
  title: string = '控制面板';

  @Action toggleNav;

  @Getter navIsCollapse;

  @Watch('$route')
  onRouteChange() {
    this.setHeaderTitle();
  }

  mounted() {
    this.setHeaderTitle();
  }

  setHeaderTitle() {
    const { title = '控制面板' } = this.$route.meta;
    this.title = title;
  }

  toggleNav() {
    this.toggleNav();
  }
}
</script>

<style lang="scss" scoped>
.top-header {
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  z-index: 99;
  height: $h-header;
  font-size: 1.2em;
  color: $clr-white;
  background-color: #009688;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.toggle-icon {
  position: absolute;
  left: 1em;
  display: inline-block;
  line-height: $h-header;
}
</style>
