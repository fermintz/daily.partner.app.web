<template>
  <v-dialog
    v-model="visible"
  >
    <div class="photoPopup" v-ripple @click="open(false)">
      <img src="/img/img03.jpg">
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false,
    }
  },

  methods:{
    open(value){
      this.visible = value
    }
  }
  
}
</script>

<style lang="scss" scoped>

.photoPopup{
  overflow:hidden;

  img{
    width:100%;
    display:block;
  }
}

</style>