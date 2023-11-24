<script>
/**
 * Login component
 */
export default {
  head() {
    return {
      title: `Login | Minton - Nuxtjs Responsive Admin Dashboard Template`,
    };
  },
  data() {
    return {
      form: {
        username: null,
        password: null,
      },
      error: null,
    };
  },
  methods: {
    async handleSubmit(e) {
      // this.$v.$touch();
      // if (this.$v.$invalid) {
      //   return;
      // } else {
      this.submitted = true;
      await this.logIn();
      this.submitted = false;
      // }
    },
    async logIn() {
      try {
        // await this.$axios.get("/sanctum/csrf-cookie", {
        //   headers: {
        //     "X-Requested-With": "XMLHttpRequest",
        //   },
        //   withCredentials: true,
        // });
        console.log(this.form);
        this.error = null;
        await this.$auth
          .loginWith("local", {
            data: this.form,
          })
          .then(() => {
            this.$router.push("/main");
          });
      } catch (e) {
        this.error = handleError(e);
      }
    },
  },
  layout: "auth",
};
</script>

<template>
  <div class="row justify-content-center" style="margin-top: 198px">
    <div class="col-md-8 col-lg-6 col-xl-5">
      <div
        class="card"
        style="border-radius: var(--border-radius-promo, 24px);
background: var(--background-primary, #FFF);
box-shadow: 0px 4px 16px 0px rgba(16, 8, 63, 0.12);
padding: var(--space-3xl, 40px) var(--space-2xl, 32px);
gap: var(--space-2xl, 32px);"
      >
        <div class="card-body">
          <div
            style="color: #000;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 28px;
margin-bottom: 32px;"
          >
            Log in
          </div>
          <form @submit.prevent="handleSubmit">
            <div class="form-group mb-3">
              <input
                class="form-control"
                placeholder="Username or email"
                v-model="form.username"
              />
            </div>

            <div class="form-group mb-3">
              <div class="input-group input-group-merge">
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  placeholder="Password"
                  v-model="form.password"
                />
                <div class="input-group-append" data-password="false">
                  <div class="input-group-text">
                    <span class="password-eye"></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group mb-0 text-center">
              <button
                class="btn btn-soft-dark btn-block"
                type="submit"
                style="
height: 48px;
padding: 0px 24px;
gap: 4px;
border-radius: 12px;
font-size: 16px;
font-weight: 700;
line-height: 22px;"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
        <!-- end card-body -->
      </div>
      <!-- end card -->

      <div class="row mt-3">
        <div class="col-12 text-center">
          <p>
            <nuxt-link to="/auth/recoverpwd" class="text-muted ml-1"
              >Forgot your password?</nuxt-link
            >
          </p>
          <p class="text-muted">
            Don't have an account?
            <nuxt-link
              to="/auth/register"
              class="text-primary font-weight-medium ml-1"
              >Sign Up</nuxt-link
            >
          </p>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end col -->
  </div>
  <!-- end row -->
</template>
