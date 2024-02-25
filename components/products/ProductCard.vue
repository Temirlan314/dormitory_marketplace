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
  <div class="card-vertical hoverable">
    <!-- <img
      v-if="product.imageDto && product.imageDto.path"
      :src="'file:///' + product.imageDto.path"
      alt="No image"
      style="width: 358px"
    /> -->
    <!-- <img
      src="~/assets/local_images/Image 2.png"
      alt="No image"
      style="width: 358px"
    /> -->
    <div
      style="display: inline-flex; justify-content: center; align-items: center; width: 100%;"
    >
      <img
        :src="
          `http://ec2-13-51-108-85.eu-north-1.compute.amazonaws.com/${product.imageDto.path}`
        "
        alt=""
        v-if="product && product.imageDto"
        height="275px"
      />
      <img
        src="~/assets/local_images/Image 2.png"
        alt="No image"
        style="width: 358px"
        v-else
      />
    </div>

    <div class="card-text">
      <div class="product-price">{{ product.price }} {{ currency }}</div>
      <div class="product-name">{{ product.name }}</div>
      <div
        class="product-description"
        style="        
          text-overflow: clip;
          overflow: hidden;
          height: 24px;"
      >
        {{ product.description }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-vertical {
  border-radius: 8px;
  border: 1px solid var(--tertiary-gray-200-light, #e4e4e7);
  background: var(--base-00-light-primary, #fff);

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);

  display: flex;
  width: 360px;
  height: 400px;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.card-text {
  display: flex;
  padding: 0px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  font-size: 16px;
  font-style: normal;
  line-height: 24px;
}

.product-name {
  color: var(--label-primary, #10083f);
  font-feature-settings: "clig" off, "liga" off;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
}

.product-price {
  color: rgba(26, 26, 26, 0.5);
  font-weight: 600;
  font-size: 16px;
  font-style: normal;
  line-height: 24px;
}

.product-description {
  color: #1a1a1a;
  font-weight: 400;
  font-size: 16px;
  font-style: normal;
  line-height: 24px;
}
.hoverable:hover {
  cursor: pointer;
}
</style>
