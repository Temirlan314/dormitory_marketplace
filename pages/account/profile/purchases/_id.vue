<script>
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
  computed: {
    post() {
      return this.$route.query.post;
    },
  },
  methods: {
    back() {
      this.$router.push("/account/profile/purchases");
    },
  },
  // middleware: ["auth", "customer"],
};
</script>
<template>
  <div>
    <div style="margin-bottom: 24px;">
      <router-link to="/account/profile"> Profile </router-link>/ My purchases
    </div>
    <div
      class="big-text hoverable"
      style="margin-bottom: 32px;"
      @click="back()"
    >
      <i class="mdi mdi-arrow-left"></i> My purchases
    </div>
    <div class="purchase-card">
      <div class="purchase-card-body">
        <div class="purchase-card-header">
          ID-{{ post.id }}
          <div :class="statuses[post.status]">
            {{ post.status }}
          </div>
        </div>
        <img
          src="~/assets/local_images/Image.png"
          alt="No image"
          style="width: 87px;"
          class="card-vertical"
        />
        <div class="purchase-card-details">
          <div
            class="purchase-card-details-item"
            v-for="(value, key) in post"
            v-if="key != 'id' && key != 'status'"
          >
            {{ key }}

            <div>
              {{ value }}
            </div>
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

.purchase-card {
  border: 1px solid #e4e4e7;
  border-radius: 12px;
  padding: 48px;
  width: 738px;
  height: 418px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.04);
  background: #ffffff;
  &-body {
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
  }
  &-header {
    display: flex;
    align-items: center;
    gap: 16px;
    font-weight: 700;
    font-size: 24px;
    color: #000;
    height: 35px;
  }
  &-details {
    display: flex;
    flex-direction: column;
    gap: 20px;
    &-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-weight: 400;
      font-size: 16px;
      color: #10083f;
    }
  }
}
</style>
