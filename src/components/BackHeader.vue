<template>
  <div class="backHead">
    <v-btn icon @click="$router.go(-1)">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.backHead{
  position: fixed;
  background:#fff;
  width:100%;
  top:0px;
  z-index:3;
  display:flex;
  height:50px;

  .v-btn{
    width:50px;
    height:50px;
    padding:0px;
  }
}
</style>