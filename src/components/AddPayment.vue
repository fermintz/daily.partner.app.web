<template>
  <v-dialog
    v-model="visible"
  >
    <div class="someRefound">
      <div class="text">
        <h4>추가결제 요청하기</h4>
        <p>검수 후 상품이 수가 다르거나 추가된 세탁요금에 대해 결제를 요청할 수 있습니다.</p>
      </div>

      <div class="input-box">
        <input type="text" placeholder="금액입력">
        <span>원</span>
      </div>

      <textarea 
        placeholder="추가결제를 요청하는 사유에 대해 입력해주세요"
      />
      
      <div class="btns">
        <v-btn text>취소</v-btn>
        <v-btn text>확인</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import showModal from '../mixin/showModal'

export default {
  mixins:[showModal],
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

  textarea{
    width:100%;
    height:100px;
    border:1px solid #e2e2e2;
    padding:5px;
    max-height:150px;
    border-radius:5px;
    margin-top:20px;
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