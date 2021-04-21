<template>
  <v-snackbar
    v-model="visible"
    timeout="1000"
  >
    {{text}}

    <template v-slot:action="{ attrs }">
      <v-btn
        color="pink"
        text
        v-bind="attrs"
        @click="visible = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props:[
    'text'
  ],
  data(){
    return{
      visible:false
    }
  },
  methods:{
    open(value){
      this.visible = value
    }
  }
}
</script>