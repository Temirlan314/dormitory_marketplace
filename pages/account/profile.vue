<script>
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
    };
  },
  computed: {},
  methods: {},
};
</script>
<template>
  <div>
    <div class="d-flex" style="margin-bottom: 60px;">
      <b-avatar
        size="lg"
        class="bg-soft-danger text-dark font-20"
        style="width: 112px;
height: 112px;
margin-right: 32px;
"
        ><span
          style="font-size: 32px;
"
          >AA</span
        ></b-avatar
      >
      <div class="text-dark">
        <p
          style="font-size: 32px;
font-style: normal;
font-weight: 600;
line-height: normal;"
        >
          Alen Amina
        </p>
        <p>amina.alen@nu.edu.kz</p>
        <p>@lemontartaletka</p>
      </div>
    </div>
    <div class="big-text hoverable">
      My posts
      <i
        class="mdi mdi-chevron-right
"
      ></i>
    </div>
    <br /><br />
    <div class="big-text hoverable">
      My purchases
      <i
        class="mdi mdi-chevron-right
"
      ></i>
    </div>
  </div>
</template>
<style lang="scss">
.big-text {
  color: #0d0d0d;
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
}
.hoverable:hover {
  cursor: pointer;
}
</style>
