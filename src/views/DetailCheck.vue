<template>
  <div class="detailCheck" ref="detailCheck" :style="{height:this.screenHeight()}">
    <div class="head">
      <v-btn icon @click="$router.go(-1)" class="back">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn text class="complete">
        <v-icon>mdi-check</v-icon>
        <label>검수완료</label>
      </v-btn>
    </div>

    <div class="tabs">
      <v-btn 
        text 
        v-for="(item, index) in ['사용자상품','상품추가']" 
        :key="index"
        :class="{active:tabActive === index}"
        @click="tabActive = index"
      >
        {{item}}
      </v-btn>
    </div>
    
    <div class="user" v-show="tabActive === 0">
      <div class="userItem">
        <div class="top">
          <strong>미용실 수건류 80L</strong>
          <v-btn icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <div class="divider"></div>
        <div class="bottom">
          <div class="amount">
            <v-btn text>-</v-btn>
            <span>1</span>
            <v-btn text>+</v-btn>
          </div>
          <div class="price">25,900원</div>
        </div>
      </div>
    </div>

    <div class="cont" v-show="tabActive === 1">
      <div class="side-tabs">
        <ul>
          <li 
            v-ripple v-for="(tab, index) in tabs" 
            :key="index"
            @click="goodstabActive = index"
            :class="{active:goodstabActive === index}"
          >
            <v-icon v-show="index===0" size="16" style="margin-right:5px;">mdi-magnify</v-icon>
            {{tab}}
          </li>
        </ul>
      </div>
      <div 
        class="tab-container" 
        v-for="(items, index) in tabs" 
        :key="index"
        v-show="goodstabActive === index"
      >

        <div class="item-search">
          <input type="text" placeholder="상품명 검색">
        </div>
        <div 
          class="item" 
          v-for="item in itemData" 
          :key="item"
          v-ripple
          @click="$refs.SnackBar.open(true)"
        >
          <div class="item-info">
            <span class="cate">
              {{item.cate}}
            </span>
            <span class="name">{{item.name}}</span>
            <span class="price">{{item.price}} 원</span>
          </div>
          <v-btn icon>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </div>
    </div>

    <SnackBar text="상품을 담았습니다" ref="SnackBar"/>
  </div>
</template>

<script>
import SnackBar from '@/components/SnackBar';

export default {
  components:{
    SnackBar,
  },
  data(){
    return{
      tabActive:0,
      goodstabActive:0,
      tabs:['검색','사장님','명품','상의','상의외투','하의','침구류','커튼/러그','신발류/기타'],
      itemData:[
        {
          cate:'사장님',
          name:'미용실 수건류 50L',
          price:15000,
        },
        {
          cate:'사장님',
          name:'미용실 수건류 80L',
          price:21900,
        },
        {
          cate:'사장님',
          name:'일반 마사지샵 수건류 50L',
          price:16900,
        },
        {
          cate:'사장님',
          name:'일반 마사지샵 수건류 80L',
          price:21900,
        },
        {
          cate:'사장님',
          name:'일반 병원 유니폼 50L',
          price:33900,
        },
        {
          cate:'사장님',
          name:'일반 병원 침구류 50L',
          price:21900,
        },
        {
          cate:'사장님',
          name:'일반 병원 침구류 80L',
          price:33900,
        },
        {
          cate:'사장님',
          name:'식당 유니폼류 50L',
          price:21900,
        },
        {
          cate:'사장님',
          name:'식당 유니폼류 80L',
          price:33900,
        },
      ]
    }
  },
  mounted(){
   
  },
  methods:{
    screenHeight(){
      let screenHt = window.innerHeight
      return screenHt
    }
  },
}
</script>

<style lang="scss" scoped>

.detailCheck{
  overflow:hidden;
  height:100%;
  padding-top:50px;
}

.head{
  position:fixed;
  top:0px;left:0px;
  width:100%;
  display:flex;
  justify-content: space-between;
  align-items: center;
  height:50px;
  background:#fff;
  border-bottom:1px solid #e2e2e2;
  z-index:2;

  .v-btn.back{
    width:50px;
    height:50px;
    padding:0px;
  }

  .v-btn.complete{
    height:32px;
    border-radius:16px;
    margin-right:5px;
    .v-icon{
      color:#08b882;
      font-size:18px;
      margin-right:5px;
    }
  }


}

.tabs{
  display:flex;
  .v-btn{
    flex:1;
    border-radius:0px;
    height:42px;
  }
  .v-btn.active{
    border-bottom:2px solid #0CA0E2;
  }
}

.user{
  padding:25px;
  border-top:1px solid #e2e2e2;

  .userItem{
    border:1px solid #e2e2e2;
    border-radius:10px;
    padding:12px;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.1);

    .divider{
      height:1px;
      background:#e2e2e2;
      margin:10px 0;
    }

    .top{
      display:flex;
      align-items: center;
      justify-content: space-between;

      .v-btn{
        padding:0px;
        width:24px;
        height:24px;

        .v-icon{
          font-size:18px;
        }
      }
    }
    .bottom{
      display:flex;
      align-items: center;
      justify-content: space-between;

      .amount{
        display:flex;
        align-items: center;
        justify-content: center;
        span{
          display:block;
          width:40px;
          margin:0 5px;
          border-radius:4px;
          text-align:center;
          line-height:24px;
          height:24px;
          background:#f2f2f2;
        }
        .v-btn{
          padding:0px;
          border:1px solid #e2e2e2;
          min-width:30px;
          height:24px;
          max-height:24px;
        }
      }
      .price{

      }
    }
  }

}


.cont{
  flex:1;
  display:flex;
  position:relative;
  border-top:1px solid #e2e2e2;
  height:100%;

  .side-tabs{
    width:90px;
    height:100%;
    border-right:1px solid #e2e2e2;

    ul{
      li{
        display:flex;
        justify-content: flex-start;
        align-items: center;
        padding:10px;
        min-height:50px;
        font-size:11px;
        border-bottom:1px solid #e2e2e2;
        background:#fff;
      }

      li.active{
        background:#F1F5F9;
        color:#0CA0E2
      }
    }
  }
  .tab-container{
    flex:1;
    overflow-y:scroll;
    padding:15px;

    .item-search{
      input{
        height:40px;
        border:1px solid #e2e2e2;
        width:100%;
        background:#fff;
        border-radius:5px;
        padding:0 5px;
        background:#f8f8f8;
      }
      margin-bottom:15px;
    }

    .item{
      display:flex;
      justify-content: space-between;
      align-items: center;
      border:1px solid #e2e2e2;
      border-radius:5px;
      padding:10px;
      margin-bottom:10px;
      box-shadow: 3px 3px 9px rgba(0,0,0,0.05);
      background:#fff;

      .item-info{
        span{display:block;}
        span.cate{
          font-size:9px;
          color:#0CA0E2
        }
        span.name{
          font-size:12px;
        }
        span.price{
          font-size:10px;
          color:#888;
        }
      }

      .v-btn{
        background:#f2f2f2;
        width:30px;
        height:30px;
        margin-left:10px;
      }
    }
  }
}
</style>