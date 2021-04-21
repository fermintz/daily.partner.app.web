<template>
  <v-dialog
    v-model="visible"
  >
    <div class="modal">
      <div class="head">
        <h4>수거지연안내</h4>
        <p>수거지연상황을 고객에게 알림으로 발송합니다</p>
      </div>
      <div class="cont">
        <v-radio-group hide-details>
          <v-radio v-for="item in ['30분','1시간', '2시간']" :key="item" :label="item + ' 정도 수거지연'" :value="item">
            
          </v-radio>
        </v-radio-group>
      </div>
      <div class="bottom">
        <v-btn text @click="visible = false">취소</v-btn>
        <v-btn text @click="visible = false">발송하기</v-btn>
      </div>
    </div>
  </v-dialog>
</template>


<script>
import ShowModal from '@/mixin/showModal.vue'

export default {
  mixins:[ShowModal,]  
}
</script>

<style lang="scss" scoped>
.modal{
  background:#fff;

  .head{
    padding:15px;
    justify-content: space-between;
    align-items: center;

    h4{font-size:16px;}
    p{font-size:11px;color:#888;margin:0px;}
  }
  .cont{
    padding:0 15px;
    .v-input{margin:0px;}
    .v-radio-group{
      padding:0;
      margin:0;
    }
    .v-radio{
      padding:0px;
      height:40px;
      padding:0 8px;
      border-radius:8px;
      background:#f8f8f8;
    }
    .v-radio:last-child{
      margin-bottom:0;
    }
  }
  .bottom{
    display:flex;
    justify-content: flex-end;
    align-items: center;
    padding:15px;

    .v-btn{
      height:40px;
      border-radius:20px;
      margin-left:5px;
      padding:0 20px;
    } 
    .v-btn:last-child{
      background:#F1F5F9;
      color:#0CA0E2;
    }
  }
}
</style>