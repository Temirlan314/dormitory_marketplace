<script>
import ProductCard from "~/components/products/ProductCard.vue";

/**
 * Login component
 */
export default {
  head() {
    return {
      title: `My purchases`,
    };
  },
  data() {
    return {
      submitted: false,
      authError: null,
      tryingToLogIn: false,
      isAuthError: false,
      posts: [
        {
          name: "QR hoodie",
          price: "10 000",
          description: "New hoodie",
        },
        {
          name: "Murakami book",
          price: "1 000",
          description: "Used book",
        },
        {
          name: "Mouse",
          price: "45 000",
          description: "New magic mouse. ",
        },
      ],
    };
  },
  computed: {},
  methods: {},
  components: { ProductCard },
};
</script>
<template>
  <div>
    <div style="margin-bottom: 24px;">
      <router-link to="/account/profile"> Profile </router-link>/ My purchases
    </div>
    <div class="big-text hoverable" style="margin-bottom: 32px;">
      My purchases
    </div>
    <div class="d-flex">
      <div v-for="post in posts" style="margin-right: 24px;">
        <ProductCard :product="post" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.big-text {
  color: #0d0d0d;
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
}
.name-text {
  color: #0d0d0d;
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
}
.info-text {
  color: #0d0d0d;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.hoverable:hover {
  cursor: pointer;
}
</style>
