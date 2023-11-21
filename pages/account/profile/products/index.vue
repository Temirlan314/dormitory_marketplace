<script>
import ProductCard from "~/components/products/ProductCard.vue";

/**
 * Login component
 */
export default {
  head() {
    return {
      title: `My posts`,
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
  middleware: ["auth", "store"],
};
</script>
<template>
  <div>
    <div style="margin-bottom: 24px;">
      <router-link to="/account/profile"> Profile </router-link>/ My posts
    </div>
    <div class="big-text hoverable" style="margin-bottom: 32px;">
      My posts
    </div>
    <div class="d-flex" v-if="posts && posts.length">
      <div v-for="post in posts" style="margin-right: 24px;">
        <ProductCard :product="post" />
      </div>
    </div>
    <div
      v-else
      class="d-flex justify-content-center align-content-center"
      style="width:100%; height: 100%;"
    >
      <div
        style="display: inline-flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 48px;"
      >
        <img src="~/assets/images/products/NoPosts.svg" alt="" />
        <div
          class=""
          style="
color:  #0D0D0D;
font-size: 32px;
font-weight: 700;
line-height: normal;
letter-spacing: 1.92px;

display: flex;
flex-direction: column;
align-items: center;
gap: 24px;"
        >
          <div>No posts yet, create your first one!</div>
          <div
            class="btn btn-dark"
            style="
display: flex;
justify-content: center;
align-items: center;
width: 162px;
height: 48px;
padding: 0px 24px;
gap: 4px;
border-radius: 24px;
background:  #1F1F1F;"
          >
            Create post
          </div>
        </div>
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
