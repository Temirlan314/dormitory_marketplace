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
          status: "In process",
          date: "18 November",
          id: 367279382,
        },
        {
          name: "Murakami book",
          price: "1 000",
          description: "Used book",
          status: "Initiated",
          date: "21 December",
          id: 367874382,
        },
        {
          name: "Mouse",
          price: "45 000",
          description: "New magic mouse. ",
          status: "Initiated",
          date: "6 April",
          id: 367279123,
        },
        {
          name: "Mouse",
          price: "45 000",
          description: "New magic mouse. ",
          status: "Finished",
          date: "18 November",
          id: 367349322,
        },
      ],
      statuses: {
        "In process": "status-primary",
        Initiated: "status-secondary",
        Finished: "status-success",
        Canceled: "status-danger",
      },
    };
  },
  computed: {},
  methods: {
    toDetail(post) {
      this.$router.push({
        path: `/account/profile/purchases/${post.id}`,
        query: { post: post },
      });
    },
  },
  components: { ProductCard },
  // middleware: ["auth", "customer"],
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
    <!-- <div class="d-flex" v-if="posts && posts.length">
      <div v-for="post in posts" style="margin-right: 24px;">
        <ProductCard :product="post" />
      </div>
    </div> -->
    <div v-if="posts && posts.length" class="purchase-table">
      <div class="purchase-table-body">
        <div
          v-for="post in posts"
          class="purchase-table-item hoverable"
          @click="toDetail(post)"
        >
          <div class="order-detail">
            <div style="display: flex;">
              <div class="" :class="statuses[post.status]">
                {{ post.status }}
              </div>
            </div>
            <div>ID-{{ post.id }}</div>
            <div class="date-text">
              {{ post.date }}
            </div>
          </div>
          <img
            src="~/assets/local_images/Image.png"
            alt="No image"
            style="width: 87px;"
            class="card-vertical"
          />
          <div class="order-detail">
            <div>{{ post.price }} tenge</div>
            <div class="name-text">
              {{ post.name }}
            </div>
          </div>
        </div>
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
          <div>No purchases yet, make your first one!</div>
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
            @click="$router.push('/main')"
          >
            Go to main
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.hoverable:hover {
  cursor: pointer;
}
.purchase-table {
  border: 1px solid #e4e4e7;
  border-radius: 12px;
  width: 100%;
  padding: 48px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.04);
  background: var(--local-on-color);
  &-body {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  &-item {
    border-bottom: 1px solid #e4e4e7;
    padding: 0px 0px 32px 0px;
    width: 100%;
    height: 131px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

.order-detail {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 159px;
  font-weight: 500;
  font-size: 16px;
  color: #706b8c;
}
.status {
  &-primary {
    background: #e7eefb;
    font-weight: 600;
    font-size: 16px;
    color: #0c4dce;
    border-radius: 8px;
    padding: 8px 12px;
    height: 35px;
    line-height: 19px;
  }
  &-secondary {
    background: #fff1b4;
    font-weight: 600;
    font-size: 16px;
    color: #5a5b1a;
    border-radius: 8px;
    padding: 8px 12px;
    height: 35px;
    line-height: 19px;
  }
  &-danger {
    background: #ffefed;
    font-weight: 600;
    font-size: 16px;
    color: #ff5a43;
    border-radius: 8px;
    padding: 8px 12px;
    height: 35px;
    line-height: 19px;
  }
  &-success {
    background: #e8f7e3;
    font-weight: 600;
    font-size: 16px;
    color: #61ca45;
    border-radius: 8px;
    padding: 8px 12px;
    height: 35px;
    line-height: 19px;
  }
}

.card-vertical {
  border: 1px solid #e4e4e7;
  border-radius: 8px;
  width: 87px;
  height: 87px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
  background: #ffffff;
}

.big-text {
  color: #0d0d0d;
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
}
.name-text {
  font-weight: 600;
  font-size: 20px;
  color: #000;
}

.date-text {
  font-weight: 700;
  font-size: 24px;
  color: #000;
}
</style>
