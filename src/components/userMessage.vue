<template>
  <v-dialog v-model="visible" fullscreen>
    <div class="modal">
      <div class="head">
        <h4>고객 메세지보내기</h4>
        <v-btn icon @click="open(false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="cont">
        <dl class="selectForm">
          <dt>안내사항 선택</dt>
          <dd class="select-1">
            <v-btn
              text
              v-for="(item, index) in ['세탁진행', '세탁불가']"
              :key="index"
              :class="{active:cateActive === index}"
              @click="cateActive = index"
            >
              {{ item }}
            </v-btn>
          </dd>
          <dd class="select-2">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" text>
                  <span>{{ selected }}</span>
                </v-btn>
              </template>

              <v-list class="selectItems">
                <v-list-item
                  v-for="item in [
                    '물세탁/드라이크리닝 이후 오염 및 이염이 잔존 가능성 높음',
                    '2번사유',
                  ]"
                  :key="item"
                  @click="selected = item"
                >
                  {{ item }}
                </v-list-item>
              </v-list>
            </v-menu>
          </dd>
          <dd class="textarea">
            <textarea placeholder="안내사항 직접입력" />
          </dd>
        </dl>

        <div class="divider" />

        <dl class="photoForm">
          <dt>사진첨부하기</dt>
          <dd class="gallery">
            <v-row>
              <v-col cols="4" v-for="item in 2" :key="item">
                <div class="imageBox">
                  <v-btn text class="del">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <img src="https://source.unsplash.com/random" />
                </div>
              </v-col>
              <v-col cols="4">
                <div class="imageBox upload" v-ripple>
                  <v-icon>mdi-plus</v-icon>
                </div>
              </v-col>
            </v-row>
          </dd>
        </dl>
      </div>

      <div class="bottom">
        <v-btn text @click="open(false)">
          <label>완료하기</label>
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import MixinModal from "@/mixin/showModal.vue";

export default {
  mixins: [MixinModal],
  data() {
    return {
      cateActive: 0,
      selected: "사유선택",
      imageBoxWidth: "",
    };
  },
  methods: {
    matchHeight() {
      const boxWidth = document.getElementsByClassName("imageBox");
      console.log(boxWidth);
    },
  },
  mounted() {
    this.matchHeight();
  },
};
</script>

<style lang="scss" scoped>
.modal {
  background: #fff;
  height: 100%;
  overflow-y:auto;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    height: 60px;

    h4 {
      font-size: 18px;
    }
  }

  .cont {
    padding:0 25px;
    
    .divider{
      height:1px;
      background:#e2e2e2;
      margin:30px 0;
    }


    dl {
      margin-bottom: 30px;
      dt {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 6px;
      }
      dd {
        margin-bottom: 10px;

        textarea {
          width: 100%;
          height: 120px;
          border: 1px solid #c2c2c2;
          border-radius: 4px;
          padding: 5px;
        }
      }

      dd.select-1 {
        background:#f2f2f2;
        border-radius: 4px;
        display: flex;
        overflow: hidden;

        .v-btn {
          flex: 1;
          border-radius: 0px;
        }
        .v-btn.active {
          background: #008be8;
          color: #fff;
        }
      }

      dd.select-2 {
        .v-btn {
          display:block;
          width: 100%;
          padding:0 10px;
          border: 1px solid #e2e2e2;
          text-align:left;
          
          span{
            width:100%;
            overflow:hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }

        .selectItems {
          background: #fff;
          li {
            padding: 10px;
          }
        }
      }
    }

    dl.photoForm {
      dd {
        .row {
          margin: 0px;
          padding: 0px;
        }
        .col-4 {
          padding: 5px;
          width: 100%;
        }

        .imageBox {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e2e2e2;
          border: 1px solid #e2e2e2;
          border-radius: 5px;
          overflow: hidden;
          z-index: 1;

          img {
            position: absolute;
            width: 150%;
            z-index: 2;
          }

          .del {
            position: absolute;
            top: 0px;
            right: 0px;
            background: rgba(0, 0, 0, 0.7);
            z-index: 3;
            padding: 0px;
            min-width: unset;
            width: 26px;
            height: 26px;

            .v-icon {
              color: #fff;
              font-size: 14px;
            }
          }
        }

        .upload {
          .v-icon {
            font-size: 32px;
          }
        }

        .imageBox:after {
          content: "";
          display: block;
          padding-bottom: 100%;
        }
      }
    }
  }

  .bottom {
    position: absolute;
    z-index:3;
    bottom:0;
    width:100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 10px;
    height: 60px;
    background: #f8f8f8;

    .v-btn {
      font-size: 14px;
      .v-icon {
        font-size: 14px;
        margin-left: 10px;
        color: #008be8;
      }
    }
  }
}
</style>
