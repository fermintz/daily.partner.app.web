<template>
  <div class="orderItem">
    <div class="item-top">
      <div class="left">
        <div class="state-box">
          주문확인
        </div>
        <v-btn text @click="showDelay">
          수거지연안내
        </v-btn>
      </div>
      <div class="detail-btn" @click="$router.push('Detail')" v-ripple>
        <span>상세보기</span>
        <v-icon>mdi-chevron-right</v-icon>
      </div>
    </div>
    <div class="item-cont">
      <div class="item-left">
        <div class="pickup-date-box pickup-time-am">
          <span>월요일</span>
          <strong>오전</strong>
        </div>
        <div class="pickup-date">21.10.26</div>
      </div>

      <div class="item-right">
        <div class="user">
          <span class="name"> 박수민 </span>
        </div>
        <div class="phone">
          <v-icon>mdi-phone</v-icon>
          <v-btn text class="phone"> 010-8525-4561 </v-btn>
        </div>
        <div class="address">
          <v-icon>mdi-map-marker</v-icon>
          <span
            >부산광역시 금정구 부산대학로 63번길 2 과학기술연구동
            201호</span
          >
          <v-btn text @click="sendEvent">복사</v-btn>
        </div>
        <div class="gate">
          <v-icon>mdi-lock-outline</v-icon>
          <span>누구나 가능</span>
        </div>
      </div>
    </div>
    <div class="item-bottom">
      <v-icon>mdi-message-outline</v-icon>
      <p>
        빠른 세탁부탁드립니다!! 
      </p>
    </div>

  </div>
</template>

<script>


export default {
  methods:{
    sendEvent(){
      this.$emit('snack');
    },
    showDelay(){
      this.$emit('delay')
    }
  }
}
</script>

<style lang="scss" scoped>
.orderItem {
  background: #fff;
  border-top: 1px solid #c2c2c2;
  border-bottom: 1px solid #c2c2c2;
  margin-bottom:20px;

  .item-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    border-bottom: 1px solid #e2e2e2;
    height: 40px;

    .left{
      display:flex;
      align-items: center;

      .state-box {
        height: 24px;
        line-height: 24px;
        padding: 0 8px;
        background: #000;
        color: #fff;
        font-size: 10px;
        border-radius: 5px;
      }

      .v-btn{
        height:24px;
        border-radius:12px;
        margin-left:10px;
        padding:0px 10px;
        font-size:11px;
        background: #f2f2f2;
      }
    }

    
    .detail-btn{
      display:flex;
      padding:2px;
      border-radius:3px;
      .v-icon{font-size:18px;margin-left:5px;color:#ccc}
    }
  }

  .item-cont {
    display: flex;
    padding: 10px 15px;

    .item-left {
      .pickup-date-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        border-radius: 10px;
        border: 1px solid #e2e2e2;
        span {
          font-size: 10px;
        }
        strong {
          font-weight: bold;
          font-size: 16px;
        }
      }
      .pickup-date {
        text-align: center;
        margin-top: 5px;
        font-size: 11px;
      }

      .pickup-time-am {
        border-color: #008be8;
        strong {
          color: #008be8;
        }
      }

      .pickup-time-pm {
        border-color: #E25A00;
        strong {
          color: #E25A00;
        }
      }
    }

    .item-right {
      flex: 1;
      margin-left: 15px;

      .user {
        display: flex;
        font-size: 14px;
        margin-bottom: 5px;
        span.name {
          margin-right: 5px;
        }
        
      }

      .phone{
        display:flex;
        align-items: center;
        margin-bottom:5px;

        .v-btn.phone {
          min-width: unset;
          height: 20px;
          font-size: 12px;
          color: #08b882;
          background:rgba(8, 184, 130,0.1);
          padding: 0 8px;
        }

        .v-icon {
          margin-right: 5px;
          font-size: 16px;
          color: #08b882;
        }
      }
      
      .address {
        display: flex;
        align-items: flex-start;
        margin-bottom: 5px;
        .v-icon {
          margin-right: 5px;
          font-size: 16px;
          color: #ccc;
        }
        span {
          flex: 1;
        }
        .v-btn {
          background: #f2f2f2;
          color: #008be8;
          height: 20px;
          min-width: 40px;
          width: 40px;
          font-size: 10px;
          margin-left: 15px;
        }
      }

      .gate {
        display: flex;
        align-items: flex-start;
        .v-icon {
          font-size: 16px;
          color: #df0e68;
          margin-right: 5px;
        }
        span {
          flex: 1;
          color: #df0e68;
        }
      }
    }
  }

  .item-bottom {
    display: flex;
    align-items: flex-start;
    background: #F6F3EA;
    margin-top:5px;
    padding:10px 15px;

    .v-icon {
      font-size: 18px;
      margin-right: 10px;
    }
    p {
      padding: 0;
      margin: 0;
      font-size: 11px;
      color: #888;
    }
  }
}
</style>