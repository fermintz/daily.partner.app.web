<template>
  <v-dialog
    v-model="visible"
  >
    <div class="confirm">
      <div class="cont">
        <strong>
          <v-icon>mdi-check-circle</v-icon>세탁완료를 진행할까요?
        </strong>
        <span>다시 되돌릴 수 없습니다 신중하게 입력해주세요</span>
      </div>
      <div class="btns">
        <v-btn text class="cancle" @click="open(false)">취소</v-btn>
        <v-btn text class="ok" @click="open(false)">확인</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
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

<style lang="scss" scoped>
.confirm{
  background:#fff;
  padding:15px;

  .cont{
    strong{
      display:flex;
      font-size:16px;

      .v-icon{
        font-size:18px;
        margin-right:5px;
        color:#0CA0E2
      }
    }
    span{
      display:block;
      margin-top:2px;
      color:#888;
    }
  }

  .btns{
    margin-top:20px;
    text-align:right;
  
    .v-btn{
      font-size:12px;
      height:30px;
    }

    .v-btn.ok{
      color:#0CA0E2;
    }
  }
}

</style>