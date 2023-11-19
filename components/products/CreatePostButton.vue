<
<script>
/**
 * Product Card component
 */
export default {
  data() {
    return {};
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
    currency: {
      type: String,
      required: false,
      default: "Tenge",
    },
  },
  computed: {},
  methods: {},
};
</script>
<template>
  <div>
    <div
      class="btn btn-dark"
      style="width: 162px;
height: 48px;
padding: 0px 24px;
display: flex;
justify-content: center;
align-items: center;
gap: 4px;
border-radius: 24px;
background:  #1F1F1F;"
    >
      Create post
    </div>
    <b-modal> </b-modal>
  </div>
</template>

<style lang="scss" scoped></style>
