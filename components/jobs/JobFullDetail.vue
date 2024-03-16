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
  <div class="job-card w-100" v-if="job">
    <div class="header">
      <div class="top-text">{{ job.name }}</div>
      <div class="price">{{ job.price }}</div>
      <div class="description">
        {{ job.description }}
      </div>
    </div>
    <div class="body">
      <div class="top-text">Basic qualifications</div>
      <div class="description">
        <ul>
          <li v-for="item of job.qualifications">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="contact" v-if="job.contact">
      <div class="top-text">Contact me!</div>
      <div class="description">
        <div v-if="job.contact.telegram">
          Telegram: {{ job.contact.telegram }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.job-card {
  display: flex;
  width: 860px;
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
</style>
