<script>
export default {
  data() {
    return {};
  },
  layout: "auth",
};
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-md-8 col-lg-6 col-xl-5">
      <div class="card">
        <div class="card-body p-4">
          <div class="error-ghost text-center">
            <h1 class="text-error">403</h1>
          </div>

          <div class="text-center">
            <h3 class="mt-4 text-uppercase font-weight-bold">Not Authorized</h3>
            <p class="text-muted mb-0 mt-3" style="line-height: 20px;">
              It's looking like you may have taken a wrong turn. Don't worry...
              it happens to the best of us. You might want to check your
              internet connection. Here's a little tip that might help you get
              back on track.
            </p>

            <nuxt-link to="/" class="btn return-btn mt-3"
              ><i class="mdi mdi-reply mr-1"></i> Return Home</nuxt-link
            >
          </div>
        </div>
        <!-- end card-body -->
      </div>
      <!-- end card -->
    </div>
    <!-- end col -->
  </div>
  <!-- end row -->
</template>

<style scoped>
.return-btn {
  background: var(--tertiary-gray-100-light, #f4f4f5);
  color: var(--base-900-light, #1a1a1a);
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
}
</style>
