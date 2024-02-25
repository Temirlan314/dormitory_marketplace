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
  computed: {
    role() {
      return this.$auth.user.roles[0];
    },
    ...mapGetters({
      posts: "posts/posts",
    }),
  },
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
  components: { ProductCard },
  middleware: ["auth"],
};
</script>
<template>
  <div>
    <div
      class="big-text hoverable"
      style="margin-bottom: 32px; display: flex;
justify-content: space-between;
align-items: center;
align-self: stretch;"
    >
      Main feed

      <b-nav-item-dropdown
        style="list-style-type: none;"
        right
        class="notification-list topbar-dropdown"
        menu-class="profile-dropdown"
        toggle-class="p-0"
      >
        <template slot="button-content" class="nav-link dropdown-toggles">
          <div
            style="display: flex;
padding: var(--space-2xs, 4px) 12px;
align-items: center;
gap: 8px;
align-self: stretch;
border-radius: 8px;
border: 1px solid var(--border-default, #D6D5DD);
background: var(--background-secondary, #F3F3F5);
color: var(--action-accent-accent, #181818);
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;"
            class="btn"
          >
            <i
              class="mdi mdi-filter-outline
"
            ></i>
            Filter by price range
          </div>
        </template>

        <div class="dropdown-item" style="">
          <div
            style="display: flex;
width: 372px;
padding: 24px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 24px;"
          >
            <div
              style="display: flex;
justify-content: center;
align-items: center;
gap: 12px;
align-self: stretch;"
            >
              <input
                type="text"
                placeholder="0₸"
                v-model="minPrice"
                style="border-radius: 8px;
                  width: 156px;
gap: 10px;
border: 1px solid var(--tertiary-gray-200-light, #E4E4E7);
background: var(--base-00-light-primary, #FFF);
display: flex;
padding: 6px 12px;
color: var(--base-700-light-tertiary, rgba(26, 26, 26, 0.70));

/* text-base/font-medium$ */
font-size: 16px;
font-weight: 500;
line-height: 24px; /* 150% */

/* shadow/shadow-sm [light] */
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);"
              />
              <div>
                <input
                  v-model="maxPrice"
                  type="text"
                  placeholder="20.000₸"
                  style="border-radius: 8px;
                  width: 156px;
padding: 6px 12px;
border-radius: 8px;
border: 1px solid var(--tertiary-gray-200-light, #E4E4E7);
background: var(--base-00-light-primary, #FFF);
/* shadow/shadow-sm [light] */
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
color: var(--base-700-light-tertiary, rgba(26, 26, 26, 0.70));

/* text-base/font-medium$ */
font-size: 16px;
font-weight: 500;
line-height: 24px; /* 150% */"
                />
              </div>
            </div>
            <div
              class="btn"
              style="display: flex;
height: 48px;
padding: 0px 24px;
justify-content: center;
align-items: center;
gap: 4px;
align-self: stretch;
border-radius: 24px;
background: var(--light-ui-background-black, #1F1F1F);
color: #FFF;
font-size: 16px;
font-weight: 700;
line-height: 22px;"
              @click="filterByPrice"
            >
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
      <!-- <img
        src="~/assets/local_images/Image 2.png"
        alt="No image"
        style="width: 100%; margin-bottom: 32px;"
      /> -->
      <div class="w-100 d-flex justify-content-center">
        <img
          :src="
            `http://ec2-13-51-108-85.eu-north-1.compute.amazonaws.com/${product.imageDto.path}`
          "
          alt=""
          v-if="product && product.imageDto"
          height="275px"
        />
      </div>
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
