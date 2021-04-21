<template>
  <div class="login">
    <div class="logo">
      <img src="@/assets/img/logo.png">
      <span>데일리세탁 파트너</span>
    </div>
    <form class="inputForm">
      <v-text-field label="아이디" light hide-details="auto" class="input"/>
      <v-text-field label="비밀번호" light type="password" hide-details="auto" class="input"/>
      <v-btn 
        text
        block
        @click="$router.push('/')"
      >
        로그인
      </v-btn>
    </form>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

.login{
  display:flex;
  flex:1;
  padding:0 40px;
  justify-content: center;
  flex-direction: column;
  background:#fff;

  .logo{
    text-align:center;
    margin-bottom:50px;
    img{
      display:inline-block;
      width:auto;
      height:90px;
    }
    span{
      font-size:14px;
      margin-top:10px;
      color:#888;
      text-align:center;
      display:block;
    }
  }

  .inputForm{
    .input{margin-bottom:20px;}
    .v-btn{
      height:46px;
      margin-top:30px;
      border-radius:23px;
      font-size:14px;
      letter-spacing:0;
      background:#fff;
      border:1px solid #e2e2e2;
      box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
    }
  }

  
}

</style>