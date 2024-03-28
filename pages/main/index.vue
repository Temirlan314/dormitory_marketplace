<script>
import ProductCard from "~/components/products/ProductCard.vue";
import { mapGetters } from "vuex";

/**
 * Login component
 */
export default {
  head() {
    return {
      title: `Main feed`,
    };
  },
  async asyncData({ $axios, store }) {
    try {
      const posts = await $axios.get("rest/post/list");
      await store.dispatch("posts/setPosts", posts.data);
      // return { posts: posts.data };
    } catch (e) {
      console.log(e);
    }
  },
  data() {
    return {
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
  computed: {
    ...mapGetters({
      posts: "posts/posts",
    }),
  },
  methods: {
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
  components: { ProductCard },
  middleware: ["authenticate"],
};
</script>
<template>
  <div>
    <div class="big-text hoverable feed-header">
      Main feed

      <b-nav-item-dropdown
        style="list-style-type: none;"
        right
        class="notification-list topbar-dropdown"
        menu-class="profile-dropdown"
        toggle-class="p-0"
      >
        <template slot="button-content" class="nav-link dropdown-toggles">
          <div class="btn filter-by-btn">
            <i class="mdi mdi-filter-outline"></i>
            Filter by price range
          </div>
        </template>

        <div class="dropdown-item">
          <div class="filter-dropdown">
            <div class="filter-layout">
              <input
                type="text"
                placeholder="0₸"
                v-model="minPrice"
                class="custom-filter-input"
              />
              <div>
                <input
                  v-model="maxPrice"
                  type="text"
                  placeholder="20.000₸"
                  class="custom-filter-input"
                />
              </div>
            </div>
            <div class="btn apply-btn" @click="filterByPrice">
              Apply filter
            </div>
          </div>
        </div>
      </b-nav-item-dropdown>
    </div>

    <div class="row">
      <div
        v-for="post in posts"
        style=" margin-bottom: 32px;"
        class="col-4 hoverable"
      >
        <ProductCard :product="post" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.feed-header {
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}

.big-text {
  color: #0d0d0d;
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
}
.hoverable:hover {
  cursor: pointer;
}

.filter-by-btn {
  display: flex;
  padding: var(--space-2xs, 4px) 12px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--border-default, #d6d5dd);
  background: var(--background-secondary, #f3f3f5);
  color: var(--action-accent-accent, #181818);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.apply-btn {
  display: flex;
  height: 48px;
  padding: 0px 24px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  border-radius: 24px;
  background: var(--light-ui-background-black, #1f1f1f);
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
}

.custom-filter-input {
  border-radius: 8px;
  width: 156px;
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid var(--tertiary-gray-200-light, #e4e4e7);
  background: var(--base-00-light-primary, #fff);
  /* shadow/shadow-sm [light] */
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  color: var(--base-700-light-tertiary, rgba(26, 26, 26, 0.7));

  /* text-base/font-medium$ */
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
}

.filter-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
}

.filter-dropdown {
  display: flex;
  width: 372px;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
}
</style>
