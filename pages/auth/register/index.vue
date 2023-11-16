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
    return {};
  },
  methods: {
    routeTo(item) {
      if (item == 0) this.$router.push("/auth/register/customer");
      else if (item == 1) this.$router.push("/auth/register/store");
    },
  },
  layout: "auth",
};
</script>

<template>
  <div class="row justify-content-center" style="margin-top: 198px">
    <div class="col-md-8 col-lg-6 col-xl-5">
      <div class="card">
        <div class="card-body">
          <div class="big-text text-center" style="align-self: stretch;">
            Sign up as a
          </div>
          <div
            style="display: flex;
                flex-direction: column;
justify-content: center;
align-items: center;
gap: var(--space-m, 16px);
align-self: stretch;"
          >
            <div class="btn btn-secondary" @click="routeTo(0)">
              Customer
            </div>
            <div class="btn btn-secondary" @click="routeTo(1)">
              Store
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-8 col-lg-6 col-xl-5" v-if="false">
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
            Sign up
          </div>
          <form action="#">
            <div class="form-group mb-3">
              <input
                class="form-control"
                type="email"
                id="emailaddress"
                required
                placeholder="NU e-mail"
              />
            </div>
            <div class="form-group mb-3">
              <input class="form-control" required placeholder="Name" />
            </div>
            <div class="form-group mb-3">
              <input class="form-control" required placeholder="Surname" />
            </div>
            <div class="form-group mb-3">
              <input class="form-control" required placeholder="Username" />
            </div>

            <div class="form-group mb-3">
              <div class="input-group input-group-merge">
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  placeholder="Password"
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
                Continue
              </button>
            </div>
          </form>
        </div>
        <!-- end card-body -->
      </div>
      <!-- end card -->

      <div class="row mt-3">
        <div class="col-12 text-center">
          <p class="text-muted">
            Already have an account?
            <nuxt-link
              to="/auth/login"
              class="text-primary font-weight-medium ml-1"
              >Log in</nuxt-link
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

<style lang="scss" scoped>
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
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
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
