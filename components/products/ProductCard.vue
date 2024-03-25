<
<script>
/**
 * Product Card component
 */
export default {
  data() {
    return {
      cardModalShow: false,
    };
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
    showActions: {
      type: Boolean,
      required: false,
      default: true,
    },
    showModal: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    role() {
      return this.$auth.user.roles[0];
    },
    url() {
      return process.env.imgUrl;
    },
  },
  methods: {
    openCardModal() {
      if (!this.showModal) {
        this.$emit("openModal");
        return;
      }
      this.cardModalShow = true;
    },
  },
};
</script>
<template>
  <div>
    <div class="card-vertical hoverable" @click="openCardModal()">
      <div
        style="display: inline-flex; justify-content: center; align-items: center; width: 100%;"
      >
        <img
          :src="`${url}/${product.imageDto.path}`"
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
    <b-modal
      v-model="cardModalShow"
      hide-header
      hide-footer
      size="588"
      style=" padding: 24px 32px 32px 32px;"
      centered
    >
      <div class="card-modal-body">
        <div
          class="w-100 d-flex justify-content-center"
          style="border: 1px solid var(--base-100-light, rgba(26, 26, 26, 0.10));"
        >
          <img
            :src="`${url}/${product.imageDto.path}`"
            alt=""
            v-if="product && product.imageDto"
            height="280px"
          />
          <img
            src="~/assets/local_images/Image_4.png"
            alt="No image"
            height="280px"
            v-else
          />
        </div>
        <div class="modal-text text-center" v-if="product">
          <div class="modal-product-name">{{ product.name }}</div>
          <div class="modal-product-price">
            {{ product.price }} {{ currency }}
          </div>
          <div class="modal-product-price">Seller: Temirlan Primptayev</div>
          <div class="modal-product-description">
            {{ product.description }}
          </div>
        </div>
        <div class="actions-buttons" v-if="showActions">
          <div
            class="btn btn-secondary buy-btn"
            v-if="role !== 'STORE'"
            @click="cardModalShow = false"
          >
            Buy
          </div>
          <div
            class="btn btn-secondary chat-btn"
            v-if="role !== 'STORE'"
            @click="cardModalShow = false"
          >
            Chat with seller
          </div>
        </div>
      </div>
    </b-modal>
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

.card-modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.modal-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-m, 16px);
  align-self: stretch;
}

.modal-product-name {
  color: var(--base-900-light, #1a1a1a);
  font-size: 24px;
  font-weight: 700;
  line-height: 38px;
}

.modal-product-price {
  color: rgba(26, 26, 26, 0.5);
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
}

.modal-product-description {
  color: #1a1a1a;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
}

.buy-btn {
  display: flex;
  height: 44px;
  padding: 7px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
  border-radius: 24px;
  border: 1px solid var(--tertiary-gray-200-light, #e4e4e7);
  background: var(--action-accent-accent, #0d0d0d);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
}

.chat-btn {
  display: flex;
  height: 44px;
  padding: 7px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
  border-radius: 24px;
  border: 1px solid var(--tertiary-gray-200-light, #e4e4e7);
  background: var(--tertiary-gray-100-light, #f4f4f5);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);

  color: var(--base-900-light, #1a1a1a);
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
}

.actions-buttons {
  display: flex;
  padding-top: var(--space-m, 16px);
  justify-content: flex-end;
  align-items: flex-start;
  gap: var(--space-m, 16px);
  align-self: stretch;
}
</style>
