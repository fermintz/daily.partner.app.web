<template>
  <v-dialog
    v-model="visible"
    width="unset"
  >
    <div class="progress">
      <v-progress-circular
        color="#0CA0E2"
        indeterminate
        rounded
        height="5"
      >
      </v-progress-circular>

      <span>
        자료를 불러오는 중입니다.
      </span>
    </div>
  </v-dialog>
</template>

<script>
import ShowModal from '../mixin/showModal'

export default {
  mixins:[ShowModal,],
}
</script>

<style lang="scss" scoped>
.progress{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:#fff;
  padding:25px;

  span{
    margin-top:15px;
    display:block;
    }
}
</style>