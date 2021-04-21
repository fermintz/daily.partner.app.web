<template>
  <div class="main-layout">
    <Header />
    <v-main>
      <slot />
    </v-main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components:{
    Header
  },
}
</script>