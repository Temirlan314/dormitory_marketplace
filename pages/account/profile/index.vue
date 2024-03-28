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
  async asyncData({ $axios, $auth }) {
    try {
      const posts = await $axios.get(
        `rest/post/list?ownerId=${$auth.user.id}`,
        {
          ownerId: $auth.user.id,
        }
      );
      const categories = await $axios.get("rest/category/list");

      return { categories: categories.data, posts: posts.data };
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
      // posts: [
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
    user() {
      return this.$auth.user;
    },
  },
  methods: {},
  components: { ProductCard },
  middleware: ["authenticate"],
};
</script>
<template>
  <div v-if="user.roles[0] == 'CUSTOMER'">
    <div
      style="display: flex;
align-items: flex-start;
gap: 64px;"
    >
      <div class="d-flex" style="margin-bottom: 60px; ">
        <b-avatar
          size="lg"
          class="bg-soft-danger text-dark font-20"
          style="width: 112px; height: 112px; margin-right: 32px;"
        >
          <span style="font-size: 32px;"
            >{{ user.firstname[0] }}{{ user.secondName[0] }}</span
          >
        </b-avatar>
        <div class="text-dark">
          <p class="name-text">{{ user.firstname }} {{ user.secondName }}</p>
          <div class="info-text">
            <div style="margin-bottom: 8px;">{{ user.email }}</div>
            <div>@{{ user.username }}</div>
          </div>
        </div>
      </div>
      <router-link to="/account/profile/edit">
        <div class="btn edit-btn">
          Edit
        </div></router-link
      >
    </div>
    <router-link to="/account/profile/purchases">
      <div class="big-text hoverable" style="margin-bottom: 32px;">
        My purchases
        <i class="mdi mdi-chevron-right"></i>
      </div>
    </router-link>
    <br /><br />
    <router-link to="/account/profile/posts">
      <div class="big-text hoverable" style="margin-bottom: 32px;">
        My posts
        <i class="mdi mdi-chevron-right"></i>
      </div>
    </router-link>

    <div class="d-flex">
      <div v-for="post in posts" style="margin-right: 24px;">
        <ProductCard :product="post" :showActions="false" />
      </div>
    </div>
  </div>
  <div v-else-if="user.roles[0] == 'STORE'">
    <div
      style="display: flex;
align-items: flex-start;
gap: 64px;"
    >
      <div class="d-flex" style="margin-bottom: 60px; ">
        <b-avatar
          size="lg"
          class="bg-soft-danger text-dark font-20"
          style="width: 112px; height: 112px; margin-right: 32px;"
        >
          <span style="font-size: 32px;">{{ user.storeInfo.name[0] }}</span>
        </b-avatar>
        <div class="text-dark">
          <p class="name-text">{{ user.storeInfo.name }}</p>
          <div class="info-text">
            <div style="margin-bottom: 8px;">{{ user.email }}</div>
            <div>@{{ user.username }}</div>
          </div>
        </div>
      </div>
      <router-link to="/account/profile/edit">
        <div class="btn edit-btn">
          Edit
        </div></router-link
      >
    </div>
    <router-link to="/account/profile/products">
      <div class="big-text hoverable" style="margin-bottom: 32px;">
        My products
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

.edit-btn {
  display: flex;
  width: 118px;
  height: 48px;
  padding: 0px 24px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 24px;
  background: #e8e8eb;
  color: #10083f;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
}
</style>
