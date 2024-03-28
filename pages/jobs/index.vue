<script>
import JobDetail from "~/components/jobs/JobDetail.vue";
import JobFullDetail from "~/components/jobs/JobFullDetail.vue";
import Multiselect from "vue-multiselect";
import JobCreate from "../../components/jobs/JobCreate.vue";

/**
 * Job board component
 */
export default {
  head() {
    return {
      title: this.title,
    };
  },
  async asyncData({ $axios, $auth }) {
    try {
      const jobs = await $axios.get("rest/job/search", {
        params: {
          queryText: null,
          payUnitId: null,
          payMin: null,
          payMax: null,
          offset: 0,
          limit: 10,
        },
      });
      const units = await $axios.get("rest/job/payUnits");
      console.log(jobs.data, units.data);
      return { jobs: jobs.data, units: units.data };
    } catch (e) {
      console.log(e);
    }
  },
  data() {
    return {
      title: "Job Board",

      jobs: null,
      units: null,
      selectedJob: null,
      loading: false,
      jobsMock: [
        {
          name: "Computer System Organization tutor",
          payPerUnit: "5000",
          payUnit: {
            id: 1,
            name: "hour",
          },
          description:
            "Looking for CSCI231 tutor to prepare for final exam and midterm. Expecting tutor have passed the course and got A/A- for the final grade",
          qualifications:
            "Expecting tutor have passed the course and got A/A- for the final grade, Has good communications skills, Clearly explains complex concepts",
          contactInfo: "Telegram: @lemontartaletka",
        },
        {
          name: "IELTS tutor",
          payPerUnit: "3000",
          payUnit: {
            id: 1,
            name: "hour",
          },

          description:
            "Looking for IELTS tutor to prepare school child for IELTS which will be next month",
          qualifications:
            "Expecting tutor have passed the IELTS exam with 7.5 or higher, Clearly explains complex concepts",
          contactInfo: "Telegram: @Temirlan_P",
        },
        {
          name: "SMM manager",
          payPerUnit: "80 000",
          payUnit: {
            id: 1,
            name: "hour",
          },
          description:
            "Online clothes shop looking for SMM manager with copywriting skills. You responsibilities will include creation of content for Instagram, TikTok, answering...",
          qualifications:
            "Expecting to have experience in SMM, Have experience in copywriting, Has good communications skills",
          contactInfo: "Telegram: @achorda",
        },
      ],
    };
  },
  watch: {},
  methods: {
    async selectJob(job) {
      this.loading = true;
      if (this.selectedJob == job) {
        this.selectedJob = null;
        return;
      }
      try {
        const response = await this.$axios.get(`rest/job/${job.id}`);
        this.selectedJob = response.data;
      } catch (e) {
        this.$notify({
          title: "Job could not be loaded",
          variant: "error",
        });
        this.loading = false;
        this.selectedJob = null;
        console.log(e);
      }
      this.loading = false;
    },
  },
  components: { Multiselect, JobDetail, JobFullDetail },
  middleware: ["authenticate"],
};
</script>
<template>
  <div>
    <div class="big-text hoverable page-header">
      Job board
      <JobCreate :units="units" />
    </div>
    <div class="layout w-100">
      <div class="jobs-card mb-2" v-if="jobsMock && jobsMock.length">
        <div class="header">
          Showing 1-12 of 34 results
        </div>
        <JobDetail
          v-for="(job, index) of jobs"
          :job="job"
          @openCardModal="selectJob"
          :key="job.name + index"
        />
        <b-pagination> </b-pagination>
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
      <JobFullDetail :job="selectedJob" :loading="loading" />
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
  max-height: 700px;
  overflow-y: scroll;
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
