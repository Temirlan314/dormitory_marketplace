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
      user: null,
      password: null,
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
  mounted() {
    this.user = this.$auth.user;
  },
  methods: {
    async updateUser() {
      try {
        const user = await this.$axios.post(`rest/user/update/${user.id}`, {
          params: {
            userId: user.id,
            newUsername: user.username,
            newFirstname: user.firstname,
            newSecondname: user.secondName,
            newPassword: password ? password : null,
            newStoreName: user.storeName,
          },
        });
        console.log(user);
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
  <div
    style="display: inline-flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
gap: 48px;"
    v-if="user"
  >
    <div
      style="display: flex;
align-items: flex-start;
gap: var(--space-2xl, 32px);"
    >
      <b-avatar
        size="lg"
        class="bg-soft-danger text-dark font-20"
        style="width: 112px; height: 112px; margin-right: 32px;"
      >
        <span style="font-size: 32px;">AA</span>
      </b-avatar>
      <div
        style="display: flex;
flex-direction: column;
align-items: flex-start;
gap: var(--space-m, 16px);"
      >
        <div class="edit-input" v-if="user.roles[0] == 'STORE'">
          <div class="name">
            <div class="label-text">
              Name
            </div>
            <input
              type="text"
              class="form-control"
              :placeholder="user.storeInfo.name"
              v-model="user.storeInfo.name"
            />
          </div>
        </div>
        <div class="edit-input" v-if="user.roles[0] == 'CUSTOMER'">
          <div class="name">
            <div class="label-text">
              Name
            </div>
            <input
              type="text"
              class="form-control"
              :placeholder="user.firstname"
              v-model="user.firstname"
            />
          </div>
        </div>
        <div class="edit-input" v-if="user.roles[0] == 'CUSTOMER'">
          <div class="name">
            <div class="label-text">
              Surname
            </div>
            <input
              type="text"
              class="form-control"
              :placeholder="user.secondName"
              v-model="user.secondName"
            />
          </div>
        </div>
        <div class="edit-input">
          <div class="name">
            <div class="label-text">
              Username
            </div>
            <input
              type="text"
              class="form-control"
              :placeholder="user.username"
              v-model="user.username"
            />
          </div>
        </div>

        <div class="edit-input">
          <div class="name">
            <div class="label-text">
              Password
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="********************"
              v-model="password"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="btn btn-dark">
      Save changes
    </div>
  </div>
</template>
<style lang="scss" scoped>
.name {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
}
.edit-input {
  display: flex;
  width: 524px;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-m, 16px);
}

.label-text {
  color: var(--local-secondary, #706b8c);
  font-size: 18px;
  font-weight: 700;
  line-height: 38px; /* 211.111% */
  width: 120px;
}
.btn-dark {
  border-radius: 24px;
  background: var(--action-accent-accent, #181818);
  display: flex;
  width: 166px;
  height: 48px;
  padding: 0px 24px;
  justify-content: center;
  align-items: center;
  gap: 4px;
}
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
