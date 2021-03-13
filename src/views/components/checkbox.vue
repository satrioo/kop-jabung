<template>
  <fragment>
    <input
      :id="uid"
      v-model="inputVal"
      class="checkbox"
      type="checkbox"
      :disabled="disabled"
      :change="change"
    >
    <label
      :for="uid"
      :class="{label: true, crossed, partial}"
    >{{ label }} aa</label>
    <button @click="gas">
      asdas
    </button>
  </fragment>
</template>

<script>
import { v1 as uuid } from 'uuid'

export default {
  components: {

  },
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      uuid: uuid(),
      // props: ['label', 'disabled', 'crossed', 'partial', 'value', 'change'],
    }
  },
  methods: {
    get inputVal() {
      return this.value
    },
    // set inputVal(value) {
    //   this.$emit('input', value)
    // },
    gas() {
      this.$emit('modal', 'false')
    },
  },
}

</script>

<style lang="scss" scoped>
// .checkbox {
//   display: none;

//   &:checked + label::before {
//     background-image: url("~@/assets/checkbox/checkbox-checked.svg?external");
//   }
// }

// .label {
//   position: relative;

//   &::before {
//     background-image: url("~@/assets/checkbox/checkbox-unchecked.svg?external");
//     background-repeat: no-repeat;
//     background-size: contain;
//     content: "";
//     position: absolute;
//     top: -3px;
//     left: -9px;
//     width: 19px;
//     height: 19px;
//     cursor: pointer;
//   }

//   &.partial::before {
//     background-image: url("~@/assets/checkbox/checkbox-partial.svg?external");
//   }

//   &.crossed::before {
//     background-image: url("~@/assets/checkbox/checkbox-disabled.svg?external") !important;
//   }
// }
</style>
