<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/img/logo_w.png">
      <span class="text1">데일리세탁</span>
      <span class="text2">Partner</span>
    </div>
    <div class="btns">
      <v-btn icon class="map btn"
        @click="$router.push('/workMap')"
      >
        <v-icon>mdi-map</v-icon>
      </v-btn>
      <v-btn icon class="search btn"
        @click="$router.push('/searchView')"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

.header{
  display:flex;
  justify-content:space-between;
  align-items: center;
  height:54px;
  background:#008BE8;

  .logo{
    display:flex;
    align-items: center;
    color:#fff;
    font-size:18px;
    margin-left:15px;

    img{
      height:16px;
      display:block;
      margin-right:5px;
    }

    span.text2{
      font-size:11px;
      margin-left:5px;
      color:#CDFF00
    }
  }

  .btns{
    display:flex;
    align-items: center;

    .btn{
      width:48px;
      height:48px;
      display:flex;
      align-items: center;
      justify-content: center;

      .v-icon{
        color:#fff;
      }
    }
  }
  
}

</style>