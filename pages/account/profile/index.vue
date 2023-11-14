<script>
import ProductCard from "~/components/products/ProductCard.vue";

/**
 * Login component
 */
export default {
  head() {
    return {
      title: `Profile page`,
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
    <div class="d-flex" style="margin-bottom: 60px;">
      <b-avatar
        size="lg"
        class="bg-soft-danger text-dark font-20"
        style="width: 112px; height: 112px; margin-right: 32px;"
      >
        <span style="font-size: 32px;">AA</span>
      </b-avatar>
      <div class="text-dark">
        <p class="name-text">
          Alen Amina
        </p>
        <div class="info-text">
          <div style="margin-bottom: 8px;">amina.alen@nu.edu.kz</div>
          <div>@lemontartaletka</div>
        </div>
      </div>
    </div>
    <router-link to="/account/profile/posts">
      <div class="big-text hoverable" style="margin-bottom: 32px;">
        My posts
        <i class="mdi mdi-chevron-right"></i>
      </div>
    </router-link>

    <div class="d-flex">
      <div v-for="post in posts" style="margin-right: 24px;">
        <ProductCard :product="post" />
      </div>
    </div>

    <br /><br />
    <router-link to="/account/profile/purchases">
      <div class="big-text hoverable" style="margin-bottom: 32px;">
        My purchases
        <i class="mdi mdi-chevron-right"></i>
      </div>
    </router-link>
    <div class="d-flex">
      <div v-for="post in posts" style="margin-right: 24px;">
        <ProductCard :product="post" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
