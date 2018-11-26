<template>
  <div class="content-wrap">
    <div v-for="num in 30" :key="num">
      {{ num }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ManageService extends Vue {}
</script>
