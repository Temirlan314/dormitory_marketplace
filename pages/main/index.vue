<script>
import ProductCard from "~/components/products/ProductCard.vue";

/**
 * Login component
 */
export default {
  head() {
    return {
      title: `Main feed`,
    };
  },
  async asyncData({ $axios }) {
    try {
      const posts = await $axios.get("rest/post/list");

      return { posts: posts.data };
    } catch (e) {
      console.log(e);
    }
  },
  data() {
    return {
      submitted: false,
      authError: null,
      tryingToLogIn: false,
      isAuthError: false,
      cardModalShow: false,
      product: null,
      currency: "Tenge",
      // posts: [
      //   {
      //     name: "QR hoodie",
      //     price: "10 000",
      //     description: "New hoodie",
      //   },
      //   {
      //     name: "Murakami book",
      //     price: "1 000",
      //     description: "New book, Norwegian wood, hard cover",
      //   },
      //   {
      //     name: "Mouse",
      //     price: "45 000",
      //     description: "New magic mouse. ",
      //   },
      //   {
      //     name: "QR hoodie",
      //     price: "10 000",
      //     description: "New hoodie",
      //   },
      //   {
      //     name: "Murakami book",
      //     price: "1 000",
      //     description: "Used book",
      //   },
      //   {
      //     name: "Mouse",
      //     price: "45 000",
      //     description: "New magic mouse. ",
      //   },
      //   {
      //     name: "QR hoodie",
      //     price: "10 000",
      //     description: "New hoodie",
      //   },
      //   {
      //     name: "Murakami book",
      //     price: "1 000",
      //     description: "Used book",
      //   },
      //   {
      //     name: "Mouse",
      //     price: "45 000",
      //     description: "New magic mouse. ",
      //   },
      // ],
    };
  },
  computed: {
    role() {
      return this.$auth.user.roles[0];
    },
  },
  methods: {
    openCardModal(post) {
      this.product = post;
      this.cardModalShow = true;
    },
  },
  components: { ProductCard },
  middleware: ["auth"],
};
</script>
<template>
  <div>
    <div class="big-text hoverable" style="margin-bottom: 32px;">
      Main feed
    </div>

    <div class="row">
      <div
        v-for="post in posts"
        style=" margin-bottom: 32px;"
        class="col-4 hoverable"
        @click="openCardModal(post)"
      >
        <ProductCard :product="post" />
      </div>
    </div>
    <b-modal
      v-model="cardModalShow"
      hide-header
      hide-footer
      size="md"
      body-class="card-modal-body"
      style="padding: 32px !important;"
      centered
    >
      <img
        src="~/assets/local_images/Image 2.png"
        alt="No image"
        style="width: 100%; margin-bottom: 32px;"
      />
      <div
        class="card-text text-center"
        v-if="product"
        style="margin-bottom: 24px;"
      >
        <div class="product-name">{{ product.name }}</div>
        <div class="product-price">{{ product.price }} {{ currency }}</div>
        <div class="product-price">Seller: Temirlan Primptayev</div>
        <div class="product-description">
          {{ product.description }}
        </div>
      </div>
      <div
        style="display: flex;
padding-top: var(--space-m, 16px);
justify-content: flex-end;
align-items: flex-start;
gap: var(--space-m, 16px);

align-self: stretch;"
      >
        <div
          class="btn btn-secondary"
          style="display: flex;
height: 44px;
padding: 7px 16px;
justify-content: center;
align-items: center;
gap: 12px;
flex: 1 0 0;
border-radius: 24px;
border: 1px solid var(--tertiary-gray-200-light, #E4E4E7);
background: var(--action-accent-accent, #0D0D0D);
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
text-align: center;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 30px;"
          @click="cardModalShow = false"
          v-if="role !== 'STORE'"
        >
          Buy
        </div>
        <div
          class="btn btn-secondary"
          style="display: flex;
height: 44px;
padding: 7px 16px;
justify-content: center;
align-items: center;
gap: 12px;
flex: 1 0 0;
border-radius: 24px;
border: 1px solid var(--tertiary-gray-200-light, #E4E4E7);
background: var(--tertiary-gray-100-light, #F4F4F5);
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);

color: var(--base-900-light, #1A1A1A);
text-align: center;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 30px;"
          v-if="role !== 'STORE'"
        >
          Chat with seller
        </div>
      </div>
    </b-modal>
  </div>
</template>
<style lang="scss" scoped>
.big-text {
  color: #0d0d0d;
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
}
.card-modal-body {
  padding: 24px 32px !important;
}

.product-name {
  color: var(--base-900-light, #1a1a1a);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  margin-bottom: 16px;
}

.product-price {
  color: rgba(26, 26, 26, 0.5);
  font-weight: 500;
  font-size: 18px;
  font-style: normal;
  line-height: 24px;
  line-height: 30px;
  margin-bottom: 8px;
}

.product-description {
  color: #1a1a1a;
  font-weight: 500;
  font-size: 18px;
  font-style: normal;
  line-height: 30px;
}
.hoverable:hover {
  cursor: pointer;
}
</style>
