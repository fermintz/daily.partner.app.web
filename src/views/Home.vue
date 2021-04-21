<template>
  <MainLayout>
    <div class="home">
      <div class="top-state">
        <div class="total top-btn" v-ripple>
          <span><v-icon>mdi-calendar-text-outline</v-icon>전체주문</span>
          <strong>24</strong>
        </div>
        <div 
          class="today top-btn"
          v-ripple
          @click="loadingShow"
        > 
          <span>오늘작업</span>
          <strong>9</strong>
        </div>
      </div>
      <div class="bottom-state">
        <div
          class="bottom-state-btn"
          :class="{active:tabActive === index}"
          v-ripple
          v-for="(item, index) in [
            '주문확인',
            '수거대기',
            '검수대기',
            '세탁완료',
            '결제대기',
            '배송대기',
          ]"
          :key="index"
          @click="tabActive = index"
        >
          <span>{{ item }}</span>
          <strong>1</strong>
        </div>
      </div>

      <div class="totalList-head">
        <div class="top">
          <h4>전체주문</h4>
          <div>
            주문순
          </div>
        </div>
        <div class="totalList-btns">
          <div
            class="totalList-btn"
            v-for="(item, index) in ['전체', '내일', '26일', '27일', '취소']"
            :key="index"
            v-ripple
            :class="{active:totalListBtn === index}"
            @click="totalListBtn = index"
          >
            {{ item }}
          </div>
        </div>
      </div>

      <div class="orderList">
        <OrderItem v-for="item in 5" :key="item" @snack="showSnack" @delay="showDelayTime"/>
      </div>
    </div>

    <SnackBar text="복사되었습니다" ref="SnackBar"/>
    <ProgressCircle ref="progressCircle"/>
    <DelayTime ref="delayTime" />
  </MainLayout>
</template>

<script>
import MainLayout from "@/layout/Main.vue";
import OrderItem from '@/components/OrderItem';
import SnackBar from '@/components/SnackBar';
import ProgressCircle from '@/components/ProgressCircle';
import DelayTime from '@/components/DelayTime.vue'

export default {
  name: "Home",
  data() {
    return {
      tabActive: 0,
      totalListBtn: 0,
    };
  },
  components: {
    MainLayout, OrderItem, SnackBar, ProgressCircle, DelayTime
  },
  methods:{
    showSnack(){
      this.$refs.SnackBar.open(true)
    },
    loadingShow(){
      this.$refs.progressCircle.open(true)
    },
    showDelayTime(){
      this.$refs.delayTime.open(true)
    }
  }
};
</script>

<style lang="scss" scoped>
.top-state {
  display: flex;
  flex-direction: row;

  .top-btn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e2e2e2;
    height: 45px;

    span {
      display: flex;
      align-items: center;
      font-size: 12px;
      margin-left: 10px;

      .v-icon {
        font-size: 18px;
        margin-right: 5px;
      }
    }

    strong {
      font-size: 14px;
      margin-right: 10px;
    }
  }

  .total {
    flex: 4;
    background: #fff;
    border-right: 1px solid #e2e2e2;
  }
  .today {
    flex: 2;
    background: #f2f2f2;

    strong {
      color: #df0e68;
    }
  }
}

.bottom-state {
  display: flex;
  

  .bottom-state-btn {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60px;
    background:#f2f2f2;
    border-bottom: 1px solid #e2e2e2;
    border-right: 1px solid #e2e2e2;

    span {
      display: block;
      font-size: 10px;
    }

    strong {
      margin-top: 2px;
      display: block;
      font-size: 16px;
      color: #df0e68;
    }
  }
  .bottom-state-btn.active{
    background:#fff;
    border:0px;
  }
  .bottom-state-btn:last-child {
    border-right: 0px;
  }
}

.totalList-head {
  margin-top: 15px;
  border-top: 1px solid #292929;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    height: 40px;

    h4 {
      font-size: 14px;
      font-weight: 400;
    }
  }

  .totalList-btns {
    overflow-y: scroll;
    background: #ebf2f6;
    padding: 8px 15px;
    white-space: nowrap;

    .totalList-btn {
      display: inline-block;
      height: 24px;
      line-height: 24px;
      border-radius: 12px;
      background: #fff;
      border:1px solid #e2e2e2;
      font-size: 11px;
      width: 60px;
      text-align: center;
      margin-right: 10px;
    }

    .totalList-btn.active{
      border-color:#df0e68;
      color:#df0e68;
    }
  }
  .totalList-btns::-webkit-scrollbar {
    display: none;
  }
}

.orderList {
  padding: 20px 0;

}

.orderItem {
  background: #fff;
  border-top: 1px solid #c2c2c2;
  border-bottom: 1px solid #c2c2c2;
  margin-bottom:20px;

  .item-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid #e2e2e2;
    height: 40px;

    .state-box {
      height: 24px;
      line-height: 24px;
      padding: 0 8px;
      background: #000;
      color: #fff;
      font-size: 10px;
      border-radius: 5px;
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
    padding: 10px;

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
    padding: 10px;

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
