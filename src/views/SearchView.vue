<template>
  <div class="searchView">
    <BackHeader />

    <div class="searchBox">
      <div class="searchInput">
        <input type="text" placeholder="검색어를 입력하세요">
        <v-btn icon 
          @click="dataLoad"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>

      <p>예) 전화번호 뒷자리 4자리</p>
    </div>

    <div class="no-data" v-if="visible">
        <p>검색된 결과가 없습니다</p>
      </div>

    <div class="searchList" v-else>
      <OrderItem v-for="item in 10" :key="item" />   
    </div>
    <ProgressLiner ref="progressLiner" />
  </div>
</template>

<script>
import ProgressLiner from '@/components/ProgressLiner';
import OrderItem from '@/components/OrderItem'
import BackHeader from '@/components/BackHeader'

export default {
  components:{
    OrderItem, ProgressLiner, BackHeader
  },
  data(){
    return{
      visible:true
    }
  },
  methods:{
    dataLoad(){
      this.$refs.progressLiner.open(true);
      setTimeout(()=>{
        this.visible = false;
        this.$refs.progressLiner.open(false)
      },2000)
    }
  }
}
</script>


<style lang="scss" scoped>

.searchView{
  padding-top:50px;

  .searchBox{
    padding:0 25px;
    margin-bottom:25px;

    p{
      font-size:11px;
      margin-top:8px;
      color:#888;
    }
  }
  .searchInput{
    position: relative;
    display:flex;
    align-items: center;
    

    input{
      flex:1;
      outline:none;
      height:50px;
      border-bottom:1px solid #a2a2a2;
      padding-right:46px;
      font-size:14px;
    }

    input:focus{
      border-color:#0CA0E2
    }

    .v-btn{
      width:36px;
      height:36px;
      position:absolute;
      right:0px;
      
      .v-icon{
        font-size:20px;
        
      }
    }
  }

  .no-data{
    padding:0 25px;

    p{      
      padding:10px;
      border-radius:100px;
      background:#f2f2f2;
      text-align:center;
    }
  }
}

</style>