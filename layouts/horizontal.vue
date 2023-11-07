<script>
import { mapState } from "vuex";
import Topbar from "~/components/Topbar.vue";

/**
 * Horizontal layout
 */
export default {
  name: "horizontal",
  data() {
    return {};
  },
  computed: mapState(["layout"]),
  mounted() {
    document.body.setAttribute("data-layout-mode", "horizontal");
  },
  methods: {
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
  },
  components: { Topbar },
};
</script>

<template>
  <!-- Begin page -->
  <div id="wrapper">
    <Topbar />
    <div class="content-page">
      <div class="content">
        <div class="container-fluid">
          <Nuxt />
        </div>
      </div>
      <!-- content -->
    </div>
  </div>
</template>
