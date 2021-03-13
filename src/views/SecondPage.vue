<template>
  <b-card title="Create Awesome 🙌">
    <b-card-text>This is your second page.</b-card-text>
    <b-card-text>Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin. Carrot cake dragée chupa chups jujubes. Macaroon liquorice cookie wafer tart marzipan bonbon. Gingerbread jelly-o dragée chocolate.</b-card-text>
    <b-form-checkbox
      v-model="nah"
      :checked="true"
      switch
    />
    <Checkbox
      :label="'nahhh'"
      @modal="close"
    />
    {{ nih }}
  </b-card>
</template>

<script>
import { BCard, BCardText, BFormCheckbox } from 'bootstrap-vue'
import Checkbox from './components/checkbox.vue'

export default {
  components: {
    BCard,
    BCardText,
    BFormCheckbox,
    Checkbox,
  },
  data() {
    return {
      nah: 1,
      nih: '',
    }
  },
  methods: {
    close(aaaa) {
      this.nih = aaaa
    },
  },
}
</script>

<style>
</style>
