<script>
import JobDetail from "~/components/jobs/JobDetail.vue";
import JobFullDetail from "~/components/jobs/JobFullDetail.vue";
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
          offset: 0,
          limit: 12,
        },
      });
      const units = await $axios.get("rest/job/payUnits");
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

      loading: false,
      tableLoading: false,

      selectedJob: null,

      currentPage: 1,
      perPage: 12,
      query: "",
    };
  },
  watch: {
    async currentPage() {
      await this.getJobs((this.currentPage - 1) * this.perPage);
    },
  },
  methods: {
    async selectJob(job) {
      if (this.selectedJob == job) {
        this.selectedJob = null;
        return;
      }
      this.loading = true;
      try {
        const response = await this.$axios.get(`rest/job/${job.id}`);
        this.selectedJob = response.data;
      } catch (e) {
        this.$notify({
          title: "Job could not be loaded",
          variant: "error",
        });
        console.log(e);
        this.selectedJob = null;
      }
      this.loading = false;
    },
    async getJobs(offset = 0, query = null) {
      this.tableLoading = true;
      try {
        const jobs = await this.$axios.get("rest/job/search", {
          params: {
            queryText: query || this.query,
            payUnitId: null,
            payMin: null,
            payMax: null,
            offset: offset,
            limit: this.perPage,
          },
        });
        this.jobs = jobs.data;
      } catch (e) {
        console.log(e);
      }
      this.tableLoading = false;
    },
  },
  components: { JobDetail, JobFullDetail },
  middleware: ["authenticate"],
};
</script>
<template>
  <div>
    <div class="page-header">
      <div class="title-search">
        Job board
        <input
          class="search-input"
          type="text"
          placeholder="Search jobs"
          v-model="query"
          @keyup.enter="getJobs()"
        />
      </div>
      <JobCreate :units="units" @jobCreated="getJobs()" />
    </div>
    <div class="layout w-100">
      <div class="jobs-card mb-2" v-if="(jobs && jobs.length) || tableLoading">
        <div class="header">Showing 1-{{ perPage }} of 34 results</div>
        <div style="" class="jobs-list" v-if="!tableLoading">
          <JobDetail
            v-for="(job, index) of jobs"
            :job="job"
            @openCardModal="selectJob"
            :key="job.name + index"
            :style="
              index == jobs.length - 1
                ? 'border-bottom: none'
                : 'border-bottom: 1px solid #e4e4e7'
            "
          />
        </div>
        <b-spinner v-else />
        <b-pagination
          v-model="currentPage"
          :total-rows="100"
          :per-page="perPage"
          first-number
          last-number
          next-class="pagination-btn"
          prev-class="pagination-btn"
          page-class="pagination-page"
          class="custom-pagination"
          ellipsis-class="pagination-page"
        >
          <template #prev-text>
            <i class="mdi  mdi mdi-chevron-left"></i>
          </template>
          <template #next-text>
            <i class="mdi  mdi mdi-chevron-right"></i>
          </template>
        </b-pagination>
      </div>
      <div class="no-jobs-card" v-else>
        <div class="header">
          <div>There are no job posts yet</div>
          <div class="subheader">Be the first to add job post!</div>
        </div>
        <img src="~/assets/images/products/NoPosts.svg" alt="" class="" />
      </div>
      <JobFullDetail :job="selectedJob" :loading="loading" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.layout {
  display: inline-flex;
  align-items: flex-start;
  gap: 32px;
}

.page-header {
  margin-bottom: 32px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #0d0d0d;
  font-size: 32px;
  font-weight: 600;
  line-height: normal;

  .title-search {
    display: flex;
    align-items: center;
    gap: 36px;
  }
}

.no-jobs-card {
  width: 420px;
  padding: 36px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  border-radius: 12px;
  border: 1px solid #e4e4e7;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.04);

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    color: #000;
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
  }
  .subheader {
    font-size: 16px;
    font-weight: 400;
  }
  img {
    max-width: 321.37px;
    max-height: 265.101px;
  }
}

.jobs-card {
  display: flex;
  max-width: 420px;
  max-height: 900px;
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

.jobs-list {
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: thin;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2xl, 32px);
}

.search-input {
  display: flex;
  width: 456px;
  height: 46px;
  padding: 11px 16px;
  justify-content: center;
  align-items: center;
  gap: 809px;
  border-radius: 24px;
  background: var(--Light-UI-Background-Mid-Gray, #f1f1f4);
  border: none;
  color: var(--label-secondary, #706b8c);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
</style>
