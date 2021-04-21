<template>
  <div class="detail">
    <BackHeader />

    <div class="work-history">

      <div class="order-info">
        <dl class="orderDate">
          <dt>주문일시</dt>
          <dd>
            <span class="text1">21.11.24</span>
            <span class="text2">12:34</span>
          </dd>
        </dl>
        <dl class="pickupDate">
          <dt>수거희망일</dt>
          <dd>
            <span class="text1">11.21</span>
            <span class="text2">수요일</span>
          </dd>
        </dl>
        <dl class="pickupTime">
          <dt>수거요청시간</dt>
          <dd>
            <span class="text1">오전</span>
            <span class="text2">08:00~12:30</span>
          </dd>
        </dl>
      </div>

      <div class="history-list">
        <div class="item">
          <v-icon color="#01A1DD">mdi-check-circle</v-icon>
          <label>주문완료</label>
          <span>21.04.03 19:18</span>
        </div>
        <div class="item" v-ripple @click="$refs.photoFinish.open(true)">
          <label>수거완료</label>
          <v-icon color="#F11064">mdi-arrow-right-circle</v-icon>
        </div>
        <div class="item" v-ripple @click="$refs.confirm.open(true)">
          <label>세탁완료</label>
          <v-icon color="#F11064">mdi-arrow-right-circle</v-icon>
        </div>
        <div class="item" v-ripple @click="$router.push('DetailCheck')">
          <label>검수하기</label>
          <v-icon color="#F11064">mdi-arrow-right-circle</v-icon>
        </div>
        <div class="item">
          <v-icon color="#01A1DD">mdi-check-circle</v-icon>
          <label>결제요청중</label>
          <span>21.04.03 19:18</span>
        </div>
        <div class="item">
          <v-icon color="#01A1DD">mdi-check-circle</v-icon>
          <label>고객 결제완료</label>
          <span>21.04.03 19:18</span>
        </div>
      </div>

      <div class="btns">
        <v-btn text @click="$refs.someRefound.open(true)">
          <label label>부분환불</label>
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
        <v-btn text @click="$refs.orderCancle.open(true)">
          <label label>주문취소</label>
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
        <v-btn text disable="false" @click="$refs.addPayment.open(true)">
          <label label>추가결제</label>
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
        <v-btn text @click="$refs.userMessage.open(true)">
          <label label>사용자알림</label>
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </div>      
    </div>

    <div class="divider"/>

    <div class="userInfo">
      <h4>주문자정보</h4>
      <dl>
        <dt>이름</dt>
        <dd>박수민</dd>
      </dl>
      <dl>
        <dt>전화</dt>
        <dd>010-8525-4561</dd>
      </dl>  
      <dl>
        <dt>주소지</dt>
        <dd>부산광역시 금정구 부산대학로 63번길 2 과학기술연구동</dd>
      </dl>  
      <dl>
        <dt>출입문</dt>
        <dd>누구나 이용가능</dd>
      </dl>

      <div class="userRequest">
        <ul>
          <li>
            <v-icon>mdi-message-text-outline</v-icon>
            <span>오염물 세탁아아아앙아아</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="divider"/>

    <div class="orderSheet">
      <h4>주문한 상품</h4>
      <div class="product-item">
        <span class="name">일반토퍼(싱글) <label>(12,900원)</label></span>
        <span class="number">1개</span>
        <span class="price">12,900원</span>
      </div>

      <div class="product-item">
        <span class="name">
          세무/가죽이 포함된 운동화 <label>(7,900원)</label>
        </span>
        <span class="number">2개</span>
        <span class="price">15,800원</span>
      </div>

      <div class="total">
        <label>합계</label>
        <span>28,700원</span>
      </div>
    </div>

    <div class="divider"/>

    <div class="orderSheet check">
      <h4>검수된 상품</h4>
      <div class="product-item">
        <span class="name">일반토퍼(싱글) <label>(12,900원)</label></span>
        <span class="number">1개</span>
        <span class="price">12,900원</span>
      </div>

      <div class="product-item">
        <span class="name">
          세무/가죽이 포함된 운동화 <label>(7,900원)</label>
        </span>
        <span class="number">2개</span>
        <span class="price">15,800원</span>
      </div>

      <div class="total">
        <label>합계</label>
        <span>28,700원</span>
      </div>
    </div>

    <div class="divider"/>

    <div class="reason">
      <h4>추가결제 요청사유</h4>

      <div class="box">
        <div class="date">
          <span>요청일시</span>
          <strong>2021.10.12 12:34</strong>
        </div>
        <div class="state">
          <span>요청상태</span>
          <strong>결제요청중</strong>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam aliquid sunt quas, cum doloremque obcaecati magnam voluptate est architecto molestiae aspernatur fugit facilis unde aut minus ut, illum harum voluptatem.</p>
        <div class="price">
          <span>추가요청금액</span>
          <strong>12,900원</strong>
        </div>
      </div>
    </div>

    <div class="divider"/>

    <div class="reason">
      <h4>주문취소 사유</h4>

      <div class="box">
        <div class="date">
          <span>요청일시</span>
          <strong>2021.10.12 12:34</strong>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam aliquid sunt quas, cum doloremque obcaecati magnam voluptate est architecto molestiae aspernatur fugit facilis unde aut minus ut, illum harum voluptatem.</p>
      </div>
    </div>

    <div class="divider"/>

    <div class="work-photo">
      <dl>
        <dt>수거완료</dt>
        <dd class="no-img" v-if="false">
          등록된 사진이 없습니다
        </dd>
        <dd class="img"
          v-else 
          v-ripple
          @click="$refs.photoPopup.open(true)"
        >
          <img src="/img/img01.jpg">
        </dd>
      </dl>
      <dl>
        <dt>배송완료</dt>
        <dd class="no-img" v-if="false">
          등록된 사진이 없습니다
        </dd>
        <dd class="img" v-else 
          v-ripple
          @click="$refs.photoPopup.open(true)"
        >
          <img src="/img/img03.jpg">
        </dd>
      </dl>
    </div>

    <PhotoFinish ref="photoFinish" />
    <PhotoPopup ref="photoPopup" />
    <Confirm ref="confirm" />
    <SomeRefound ref="someRefound" />
    <OrderCancle ref="orderCancle" />
    <AddPayment ref="addPayment" />
    <DelayTime ref="delayTime" />
    <UserMessage ref="userMessage"/>
  </div>
</template>

<script>
import PhotoPopup from '@/components/PhotoPopup';
import PhotoFinish from '@/components/PhotoFinish';
import Confirm from '@/components/confirm';
import SomeRefound from '@/components/SomeRefound';
import OrderCancle from '@/components/OrderCancle';
import AddPayment from '@/components/AddPayment';
import BackHeader from '@/components/BackHeader';
import DelayTime from '@/components/DelayTime';
import UserMessage from '@/components/userMessage';

export default {
  components:{
    PhotoPopup,
    PhotoFinish,
    Confirm,
    SomeRefound,
    OrderCancle,
    AddPayment,
    BackHeader,
    DelayTime,
    UserMessage
  },
}
</script>

<style lang="scss" scoped>
.detail{
  padding-top:50px;
}

h4{
  margin-bottom:15px;
  font-size:13px;
  font-weight:bold;
}

.divider{
  height:1px;
  background:#e2e2e2;
}

.work-history{
  padding:25px;
  background:#f8f8f8;

  .order-info{
   display:flex;
   margin-bottom:25px;

    dl{
      display:flex;
      position:relative;
      flex-direction: column;
      justify-content: flex-start;
      flex:1;
      border-left:1px solid #e2e2e2;
      padding-left:10px;

      dt{
        font-size:10px;
        color:#888;
      }
      dd{
        margin-top:5px;
        span{
          display:block;
        }
      }
    }

    dl::before{
      content:'';
      width: 1px;
      height:14px;
      background:#008BE8;
      position: absolute;
      left:-1px;
      top:0px;
    }

    dl:last-child{
      border-right:0px;
    }

    .pickupDate{
      span.text2{
        color:#E13D7A
      }
    }
    .pickupTime{
      span.text1{
        color:#E13D7A
      }
    }
  }

  .user-message{
    padding:10px;
    border-radius:5px;
    border-top-left-radius: 0px;;
    background:#efefef;
    display:flex;
    align-items: flex-start;

    .v-icon{
      font-size:16px;
      margin-right:10px;
    }
    p{
      padding:0px;
      margin:0px;
      flex:1;
      font-size:11px;
    }
  }
  

  .history-list{
    margin-top:25px;

    .item{
      display:flex;
      border:1px solid #e2e2e2;
      background:#fff;
      justify-content: space-between;
      align-items: center;
      padding:0 10px;
      height:42px;
      border-radius:5px;
      margin-bottom:10px;
      box-shadow: 5px 5px 15px rgba(0,0,0,0.1);

      .v-icon{
        font-size:18px;
        margin-right:5px;
        color:#E13D7A;
      }
      label{
        flex:1;
        font-size:13px;
        font-weight:bold;
      }
      span{
        color:#888;
      }
    }
  }

  .btns{
    display:flex;
    flex-wrap: wrap;
    border:1px solid #e2e2e2;
    margin-top:30px;
    border-radius:5px;
    overflow:hidden;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.1);


    .v-btn{
      width:50%;
      padding:0 10px;
      border-radius:0px;
      height:42px;
      background:#fff;
      justify-content: space-between;
      border-right:1px solid #e2e2e2;
      border-bottom:1px solid #e2e2e2;

      label{font-size:12px;}
      .v-icon{font-size:16px;color:#E13D7A}
    }

    .v-btn:nth-child(2){
      border-right:0px;
    }
    .v-btn:nth-child(3){
      border-bottom:0px;
    }
    .v-btn:nth-child(4){
      border-right:0px;
      border-bottom:0px;
    }


  }
}


.work-photo{
  padding:25px;

  dl{
    margin-bottom:20px;
    dt{
      font-size:14px;
      margin-bottom:10px;
    }
    
    dd.no-img{
      background:#f2f2f2;
      height:34px;
      border-radius:5px;
      display:flex;
      justify-content: center;
      align-items: center;
      color:#888;
    }

    dd.img{
      display:flex;
      justify-content: center;
      align-items: center;
      height:180px;
      border-radius:10px;
      overflow: hidden;
      border:1px solid #e2e2e2;
      box-shadow: 5px 5px 15px rgba(0,0,0,0.1);

      img{
        display:block;
        width:100%;
        height:auto;
      }
    }
  }
   dl:last-child{margin-bottom:0px;}
}

.userInfo{
  padding:25px;

  dl{
    display:flex;
    margin-bottom:10px;

    dt{
      width:70px;
      color:#888;
    }
    dd{flex:1;}
  }
  dl:last-child{
    margin-bottom:0px;
  }
}

.orderSheet{
  padding:25px;
  
  .product-item{
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:10px;

    .name{
      flex:1;
      label{
        font-size:10px;
        color:#888;
      }
    }
    .price{
      width:80px;
      text-align:right;
    }
  }

  .total{
    display:flex;
    justify-content: space-between;
    align-items: center;
    label{
      font-size:10px;
      height:16px;
      padding:0 10px;
      background:#494949;
      border-radius:3px;
      color:#fff;
    }
    span{
      font-weight:bold;
      color:#E13D7A;
    }
  }

  
  
}

.orderSheet.check{
  background:#F1F3F5;
}

.reason{
  padding:25px;

  .box{
    .date{
      display:flex;
      align-items: center;
      margin-bottom:10px;
      font-size:11px;
      span{
        color:#888;
        margin-right:10px;
      }
    }

    .state{
      margin-bottom:10px;
      font-size:11px;
      span{
        color:#888;
        margin-right:10px;
      }
      strong{
        color:#E13D7A
      }
    }

    .price{
      background:#f8f8f8;
      display:flex;
      padding:10px;
      justify-content: space-between;
      align-items: center;
      border-radius:5px;

      span{
        font-size:11px;
      }
    }
  }
}

.someRefoundList{
  padding:25px;

  .refoundItem{
    border:1px solid #e2e2e2;
    padding:10px;
  }
}

.userRequest{
  background:#f8f8f8;
  padding:10px;
  border-radius:5px;
  margin-top:25px;

  li{
    display:flex;
    align-items: flex-start;

    .v-icon{
      font-size:16px;
    }
    span{
      margin-left:10px;
      font-size:12px;
      flex:1;
    }
  }
}

</style>