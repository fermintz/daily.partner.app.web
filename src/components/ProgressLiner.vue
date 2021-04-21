<template>
  <v-dialog
    v-model="visible"
    width="unset"
  >
    <div class="progress">
      <span>
        자료를 불러오는 중입니다.
      </span>

      <v-progress-linear
        color="#0CA0E2"
        indeterminate
        rounded
        height="5"
      >
      </v-progress-linear>
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
  background:#fff;
  padding:25px;

  span{
    display:block;
    margin-bottom:10px;
    }
}
</style>