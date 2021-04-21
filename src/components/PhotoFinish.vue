<template>
  <v-dialog
    v-model="visible"
  >
    <div class="photoFinish">
      
      <div class="photo">
        <v-btn icon v-if="photoVisible" @click="photoVisible = false">
          <v-icon>mdi-camera-outline</v-icon>
        </v-btn>
        <div class="photo-img" v-else v-ripple>
          <img src="/img/img01.jpg">
        </div>
      </div>
      <div class="bottom">
        <div class="cont">
          <strong><v-icon>mdi-camera-outline</v-icon>사진을 등록해주세요</strong>
          <span>사진을 등록 후 완료버튼을 입력하시면 작업이 완료됩니다</span>
        </div>
        <div class="btns">
          <v-btn text @click="open(false)">
            <label>완료하기</label>
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false,
      photoVisible:true
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
.photoFinish{
  background:#fff;

  .photo{
    display:flex;
    justify-content: center;
    align-items: center;
    height:210px;

    .v-btn{
      width:120px;
      height:120px;
      background:#f2f2f2;
      border-radius:60px;

      .v-icon{
        font-size:46px;
      }
      
    }

    .photo-img{
      height:210px;
      overflow:hidden;
      img{
        width:100%;
      }
    }
  }

  .bottom{
    padding:18px;
    
    .cont{
      strong{
        display:block;
        font-size:14px;
        font-weight:normal;

        .v-icon{font-size:18px;margin-right:5px;color:#F11064}
      }
      span{
        display:block;
        font-size:11px;
        color:#888;
        margin-top:3px;
      }
    }

    .btns{
      display:flex;
      justify-content: flex-end;
      margin-top:20px;

      .v-btn{
        font-size:12px;
        width:100px;
        padding:0 10px;
        height:30px;
        border:1px solid #e2e2e2;
        justify-content: space-between;

        label{}
        .v-icon{
          font-size:14px;
        }
      }
    }
  }
}

</style>