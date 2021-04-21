<template>
  <v-dialog
    v-model="visible"
  >
    <div class="someRefound">
      <div class="text">
        <h4>부분환불하기</h4>
        <p>되돌려줄 금액을 입력해주세요</p>
      </div>

      <div class="input-box">
        <input type="text" placeholder="금액입력">
        <span>원</span>
      </div>

      <div class="reason">
        <h4>환불사유</h4>
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

.someRefound{
  background:#fff;
  padding:15px;

  .text{
    h4{font-size:18px;font-weight:normal;}
    p{color:#888;}
  }

  .input-box{
    position: relative;
    display:flex;
    align-items: center;

    input{
      flex:1;
      height:40px;
      font-size:18px;
      font-weight:bold;
      border-bottom:1px solid #F11064;
      padding-right:20px;
      outline:none;
    }

    input::placeholder{
      font-size:12px;
    }

    span{
      position:absolute;
      right:0px;
    }
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