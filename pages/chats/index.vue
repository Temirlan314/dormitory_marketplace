<script>
import ProductCard from "~/components/products/ProductCard.vue";
import { mapGetters } from "vuex";
import Chat from "../../components/widgets/Chat.vue";

/**
 * Login component
 */
export default {
  head() {
    return {
      title: `Main feed`,
    };
  },
  // async asyncData({ $axios, store }) {
  //   try {
  //     const posts = await $axios.get("rest/post/list");
  //     await store.dispatch("posts/setPosts", posts.data);
  //     // return { posts: posts.data };
  //   } catch (e) {
  //     console.log(e);
  //   }
  // },
  data() {
    return {
      submitted: false,
      authError: null,
      tryingToLogIn: false,
      isAuthError: false,
      cardModalShow: false,
      product: null,
      currency: "Tenge",
      minPrice: null,
      maxPrice: null,
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
  computed: {},
  methods: {
    openCardModal(post) {
      this.product = post;
      this.cardModalShow = true;
    },
    async filterByPrice() {
      try {
        const reponse = await this.$axios.get("rest/post/list", {
          params: {
            priceMin: this.minPrice,
            priceMax: this.maxPrice,
          },
        });
        this.$store.dispatch("posts/setPosts", reponse.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  components: { ProductCard, Chat },
  //   middleware: ["auth"],
};
</script>
<template>
  <div>
    <Chat />
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
