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
    },
    loading: {
      type: Boolean,
      default: false,
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
  <Transition name="fade">
    <div class="job-card w-100" v-if="!loading && job">
      <div class="header">
        <div class="top-text">{{ job.name }}</div>
        <div class="price">{{ job.payPerUnit }} tg/{{ job.payUnit.name }}</div>
        <div class="description">
          {{ job.description }}
        </div>
      </div>
      <div class="body">
        <div class="top-text">Basic qualifications</div>
        <div class="description " style="white-space: pre-line">
          {{ job.qualifications }}
        </div>
      </div>
      <div class="contact" v-if="job.contactInfo">
        <div class="top-text">Contact me!</div>
        <div class="description">
          <div>{{ job.contactInfo }}</div>
        </div>
      </div>
    </div>
    <div v-else-if="loading" class="job-card">
      <div class="d-flex justify-content-center w-100">
        <b-spinner></b-spinner>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.job-card {
  display: flex;
  width: 100%;
  padding: var(--space-xl, 24px) 36px var(--space-xl, 24px)
    var(--space-xl, 24px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2xl, 32px);
  border-radius: var(--border-radius-default, 12px);
  border: 1px solid #e4e4e7;
  background: var(--background-primary, #fff);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.04);
  .header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-m, 16px);
    align-self: stretch;
  }
  .body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-m, 16px);
    align-self: stretch;
  }
  .contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-xs, 8px);
    align-self: stretch;
  }
}

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
  .top-text {
    align-self: stretch;
    color: #000;
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
  }
  .price {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-m, 16px);
    align-self: stretch;
  }
  .description {
    align-self: stretch;
    color: #000;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
  }
}

.body {
  .top-text {
    align-self: stretch;
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 120% */
  }
  .description {
    align-self: stretch;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
}

.contact {
  .top-text {
    align-self: stretch;
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px; /* 120% */
  }
  .description {
    align-self: stretch;
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
