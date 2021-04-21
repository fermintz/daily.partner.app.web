<template>
  <v-dialog
    v-model="visible"
  >
    <div class="orderCancle">
      <div class="text">
        <h4>주문취소하기</h4>
        <p>사용자의 주문을 취소할 수 있습니다. </p>
      </div>
      
      <div class="reason">
        <h4>취소사유</h4>
        <select>
          <option>
            직접작성
          </option>
          <option>
            선택한 상품과 실제상품 수가 다름
          </option>
          <option>
            취급하지 않는 세탁물
          </option>
          <option>세탁오염정도가 매우 심함</option>
          <option>세탁실패</option>
        </select>
        <textarea />
      </div>
     
      <div class="btns">
        <v-btn text>취소</v-btn>
        <v-btn text>확인</v-btn>
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

.orderCancle{
  background:#fff;
  padding:15px;

  .text{
    h4{font-size:18px;font-weight:normal;}
    p{color:#888;}
  }


  .reason{
    margin-top:20px;

    h4{margin-bottom:10px;}

    select{
      width:100%;
      height:40px;
      border:1px solid #e2e2e2;
      margin-bottom:10px;
      padding:0 5px;
    }
    textarea{
      width:100%;
      border:1px solid #e2e2e2;
      padding:5px;
      min-height:100px;
      max-height:100px;
    }
  }
  .btns{
    display:flex;
    justify-content: flex-end;
    margin-top:20px;

    .v-btn{
      font-size:12px;
      margin-left:10px;
    }

    .v-btn:last-child{
      color:#F11064
    }
  }
}

</style>