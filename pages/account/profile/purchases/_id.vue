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
      feedbackModal: false,
      feedback: "",
      rating: null,
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
        <button
          class="w-100 feedback-button"
          @click="feedbackModal = !feedbackModal"
        >
          Add feedback
        </button>
      </div>
    </div>
    <b-modal
      v-model="feedbackModal"
      hide-footer
      hide-header
      size="md"
      centered
      content-class="custom-modal"
    >
      <div class="modal-layout">
        <div class="form-layout">
          <div class="input-layout">
            <div class="input-label">
              Rating
            </div>
            <div>
              <b-form-rating
                size="lg"
                no-border
                class="p-0"
                v-model="rating"
              ></b-form-rating>
            </div>
          </div>
          <div class="input-layout">
            <div class="input-label">
              Feedback
            </div>
            <b-form-textarea
              class="form-control"
              placeholder="Good quality"
              v-model="feedback"
              rows="3"
            />
          </div>
        </div>
        <div class="action-buttons w-100">
          <button
            class="w-100"
            style="display: flex;
height: 44px;
padding: 7px 16px;
justify-content: center;
align-items: center;
border-radius: 24px;
background: var(--action-accent-accent, #181818);
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
color: var(--base-00-light-primary, #FFF);
font-size: 18px;
font-weight: 600;
line-height: 30px; /* 166.667% */"
            @click="feedbackModal = !feedbackModal"
          >
            Add feedback
          </button>
        </div>
      </div>
    </b-modal>
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

.feedback-button {
  display: flex;
  height: 44px;
  padding: 0px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--action-accent-accent, #181818);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  color: var(--base-00-light-primary, #fff);
  font-size: 16px;
  font-weight: 600;
  line-height: 24px; /* 150% */
}

.modal-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xl, 24px);
}

.form-layout {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-m, 16px);
  align-self: stretch;
}

.input-layout {
  display: flex;
  align-items: center;
  gap: var(--space-l, 20px);
  align-self: stretch;
}

.input-label {
  min-width: 115px;
  color: var(--local-secondary, #706b8c);
  font-size: 18px;
  font-weight: 700;
  line-height: 38px; /* 211.111% */
  align-self: flex-start;
}

.form-control {
  border-radius: 8px;
  border: 1px solid var(--border-default, #d6d5dd);
  display: flex;
  padding: var(--space-2xs, 4px) var(--space-m, 16px);

  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
}

.action-buttons {
  padding-top: 16px;
}
</style>
