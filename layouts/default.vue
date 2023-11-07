<script>
import { mapState } from "vuex";
import Horizontal from "./horizontal";

/**
 * Default Layout
 */
export default {
  components: {
    Horizontal,
  },
  data() {
    return {};
  },
  computed: mapState(["layout"]),
};
</script>

<template>
  <div>
    <Horizontal :layout="'horizontal'">
      <slot />
    </Horizontal>
  </div>
</template>
