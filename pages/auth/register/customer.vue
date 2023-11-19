<script>
/**
 * Register component
 */
export default {
  head() {
    return {
      title: `Register `,
    };
  },
  data() {
    return {
      email: "",
      name: "",
      surname: "",
      username: "",
      password: "",
      isCodeSent: false,
      token: "",
      code: "",
    };
  },
  methods: {
    routeTo(item) {
      if (item == 0) this.$router.push("/auth/register/customer");
      else if (item == 1) this.$router.push("/auth/register/store");
    },

    async sendCode() {
      try {
        const res = await this.$axios.post("rest/auth/sendCode", {
          recipient: this.email,
        });
        console.log(res);
        this.token = res.data.token;
        this.isCodeSent = true;
      } catch (e) {
        console.log(e);
      }
    },
    async signUp() {
      try {
        const response = await this.$axios.post("rest/auth/validateCode", {
          token: this.token,
          userCode: this.code,
          recipient: this.email,
        });
        if (response.data.success) {
          const res = await this.$axios.post("rest/auth/register/customer", {
            email: this.email,
            firstname: this.name,
            secondName: this.surname,
            username: this.username,
            password: this.password,
            token: this.token,
          });
          console.log(res);
          this.$router.push("/auth/login");
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  layout: "auth",
};
</script>

<template>
  <div class="row justify-content-center" style="margin-top: 198px">
    <div class="col-md-8 col-lg-6 col-xl-5">
      <div class="card">
        <div v-if="!isCodeSent" class="card-body">
          <div class="big-text">
            Sign up
          </div>
          <div
            style="display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: var(--space-l, 20px);"
          >
            <input
              class="form-control"
              type="email"
              id="emailaddress"
              required
              placeholder="NU e-mail"
              style=""
              v-model="email"
            />

            <input
              class="form-control"
              required
              placeholder="Name"
              v-model="name"
            />

            <input
              class="form-control"
              required
              placeholder="Surname"
              v-model="surname"
            />

            <input
              class="form-control"
              required
              placeholder="Username"
              v-model="username"
            />

            <input
              type="password"
              id="password"
              class="form-control"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div class="btn btn-secondary" @click="sendCode()">Continue</div>
        </div>
        <div v-if="isCodeSent" class="card-body">
          <div class="big-text">
            We’ve sent you passcode, check you mailbox
          </div>
          <input
            class="form-control"
            type="text"
            required
            placeholder="Passcode"
            v-model="code"
          />
          <div class="btn btn-secondary" @click="signUp()">
            Sign Up
          </div>
        </div>
      </div>
      <!-- end card -->
    </div>
    <!-- end col -->
  </div>
  <!-- end row -->
</template>

<style lang="scss" scoped>
.form-control {
  display: flex;
  width: 330px;
  height: 48px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 4px;
}
.card-body {
  display: flex;
  padding: var(--space-3xl, 40px) var(--space-2xl, 32px);
  flex-direction: column;
  justify-content: center;
  gap: var(--space-2xl, 32px);
  align-items: flex-start;
  flex-shrink: 0;
}
.card {
  border-radius: var(--border-radius-promo, 24px);
  box-shadow: 0px 4px 16px 0px rgba(16, 8, 63, 0.12);
  background: var(--background-primary, #fff);
  max-width: 394px;
}

.big-text {
  color: var(--local-primary, #10083f);
  text-align: center;
  /* Desktop/Heading 4 */
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
}

.btn-secondary {
  border-radius: 12px;
  background: var(--action-neutral-neutral, #e2e1e8);
  display: flex;
  height: 48px;
  padding: 0px 24px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  border: none;

  color: var(--local-primary, #10083f);
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px; /* 137.5% */
}
</style>
