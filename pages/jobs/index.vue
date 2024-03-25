<script>
import ProductCard from "~/components/products/ProductCard.vue";
import JobDetail from "~/components/jobs/JobDetail.vue";
import JobFullDetail from "~/components/jobs/JobFullDetail.vue";
import Multiselect from "vue-multiselect";
import objectToFormData from "~/helpers/objectToFormData";
import JobCreate from "../../components/jobs/JobCreate.vue";

/**
 * Login component
 */
export default {
  head() {
    return {
      title: this.title,
    };
  },
  async asyncData({ $axios, $auth }) {},
  data() {
    return {
      title: "Job Board",
      price: null,

      product: null,
      currency: "Tenge",
      editShow: false,

      jobs: null,
      selectedJob: null,
      jobsMock: [
        {
          name: "Computer System Organization tutor",
          price: "5000 tg/hour",
          description:
            "Looking for CSCI231 tutor to prepare for final exam and midterm. Expecting tutor have passed the course and got A/A- for the final grade",
          qualifications: [
            "Expecting tutor have passed the course and got A/A- for the final grade",
            "Has good communications skills",
            "Clearly explains complex concepts",
          ],
          contact: {
            telegram: "@lemontartaletka",
          },
        },
        {
          name: "IELTS tutor",
          price: "3000 tg/hour",
          description:
            "Looking for IELTS tutor to prepare school child for IELTS which will be next month",
          qualifications: [
            "Expecting tutor have passed the IELTS exam with 7.5 or higher",
            "Clearly explains complex concepts",
          ],
          contact: {
            telegram: "@Temirlan_P",
          },
        },
        {
          name: "SMM manager",
          price: "80 000 tg/month",
          description:
            "Online clothes shop looking for SMM manager with copywriting skills. You responsibilities will include creation of content for Instagram, TikTok, answering...",
          qualifications: [
            "Expecting to have experience in SMM",
            "Have experience in copywriting",
            "Has good communications skills",
          ],
          contact: {
            telegram: "@achorda",
          },
        },
      ],
    };
  },
  computed: {
    user() {
      return this.$auth.user;
    },
  },
  watch: {},
  methods: {
    selectJob(job) {
      this.selectedJob = job;
      this.$notify({
        title: "Job selected",
        message: "Job selected",
        type: "success",
      });
      console.log("AAA");
    },
  },
  components: { ProductCard, Multiselect, JobDetail, JobFullDetail },
  //   middleware: ["auth", "customer"],
};
</script>
<template>
  <div>
    <div class="big-text hoverable page-header">
      Job board
      <!--  -->
      <JobCreate />
    </div>
    <div class="layout">
      <div class="jobs-card mb-2" v-if="jobsMock && jobsMock.length">
        <div class="header">
          Showing 1-12 of 34 results
        </div>
        <JobDetail
          v-for="job of jobsMock"
          :job="job"
          @openCardModal="selectJob"
        />
      </div>
      <div class="no-jobs-card" v-else>
        <div class="no-jobs-header">
          <div>There are no job posts yet</div>
          <div class="no-jobs-subheader">Be the first to add job post!</div>
        </div>
        <div>
          <img src="~/assets/images/products/NoPosts.svg" alt="" class="" />
        </div>
      </div>
      <JobFullDetail :job="selectedJob" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.layout {
  display: inline-flex;
  align-items: flex-start;
  gap: var(--space-2xl, 32px);
}
.page-header {
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.no-jobs-card {
  display: flex;
  width: 420px;
  padding: 36px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--space-2xl, 32px);
  flex-shrink: 0;
  border-radius: var(--border-radius-default, 12px);
  border: 1px solid #e4e4e7;
  background: var(--background-primary, #fff);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.04);
}
.no-jobs-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--space-xs, 8px);
  color: #000;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px; /* 100% */
}

.no-jobs-subheader {
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px; /* 150% */
}

.no-jobs-card img {
  max-width: 321.37px;
  max-height: 265.101px;
}

.jobs-card {
  display: flex;
  max-width: 420px;
  padding: var(--space-xl, 24px) 36px var(--space-xl, 24px)
    var(--space-xl, 24px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2xl, 32px);
  flex-shrink: 0;
  border-radius: var(--border-radius-default, 12px);
  border: 1px solid #e4e4e7;
  background: var(--background-primary, #fff);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.04);

  .header {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
}

//
//
.big-text {
  color: #0d0d0d;
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
}
.name-text {
  color: #0d0d0d;
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
}
.info-text {
  color: #0d0d0d;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.hoverable:hover {
  cursor: pointer;
}

.card-modal-body {
  padding: 24px 32px !important;
}

.product-name {
  color: var(--base-900-light, #1a1a1a);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  margin-bottom: 16px;
}

.product-price {
  color: rgba(26, 26, 26, 0.5);
  font-weight: 500;
  font-size: 18px;
  font-style: normal;
  line-height: 24px;
  line-height: 30px;
  margin-bottom: 8px;
}

.product-description {
  color: #1a1a1a;
  font-weight: 500;
  font-size: 18px;
  font-style: normal;
  line-height: 30px;
}

.input-fields {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-m, 16px);

  align-self: stretch;
}

.name {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
}
.edit-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-m, 16px);
  width: 100%;
}

.label-text {
  color: var(--local-secondary, #706b8c);
  font-size: 18px;
  font-weight: 700;
  line-height: 38px;
  width: 115px;
}

.form-control {
  border-radius: 8px;
  border: 1px solid var(--border-default, #d6d5dd);
  display: flex;
  padding: var(--space-2xs, 4px) var(--space-m, 16px);

  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
}
</style>
