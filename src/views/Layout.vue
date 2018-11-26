<template>
  <div>
    <TopHeader />
    <div class="main-wrap">
      <LeftNav />
      <div class="right-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopHeader from '@/components/TopHeader.vue';
import LeftNav from '@/components/LeftNav.vue';

@Component({
  components: {
  TopHeader,
  LeftNav
  },
  })
export default class Layout extends Vue {}
</script>

<style lang="scss" scoped>
.main-wrap{
  background-color: $clr-bg;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: $h-header;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - #{$h-header} -2em);
}
.right-content{
  position: relative;
  overflow: auto;
  padding: 1em;
  width: 100%;
  height: calc(100vh - #{$h-header} - 2em);
  flex-grow: 1;
}

</style>
