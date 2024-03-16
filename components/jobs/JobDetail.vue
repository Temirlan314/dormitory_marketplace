<script>
/**
 * Product Card component
 */
export default {
  data() {
    return {};
  },
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
  computed: {},
  methods: {
    onClick() {
      this.$emit("openCardModal", this.job);
    },
  },
};
</script>
<template>
  <div class="layout" @click="onClick()">
    <div class="header">{{ job.name }}</div>
    <div class="price">{{ job.price }}</div>
    <div class="description">
      {{ job.description }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  padding-bottom: 20px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #d6d5dd;
}

.layout:hover {
  cursor: pointer;
}

.header {
  align-self: stretch;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
}

.price {
  align-self: stretch;
  color: var(--local-secondary, #706b8c);
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
}

.description {
  align-self: stretch;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
</style>
