<script>
/**
 * Job create button component
 */
export default {
  props: {
    units: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      showModal: false,
      name: "",
      payPerUnit: 0,
      contactInfo: "",
      description: "",
      qualifications: "",
      unit: "",
      loading: false,
    };
  },
  computed: {},
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async submitJob() {
      this.loading = true;
      const job = {
        name: this.name,
        payPerUnit: this.payPerUnit,
        contactInfo: this.contactInfo,
        description: this.description,
        qualifications: this.qualifications,
        payUnitId: this.unit.id,
        id: null,
      };
      try {
        await this.$axios.post("rest/job", job);
        this.loading = false;
        this.$emit("jobCreated");
        this.showModal = false;
        this.$notify({
          title: "Job post has been successfully added!",
          variant: "success",
        });
      } catch (e) {
        console.log(e);
        this.$notify({
          title: "Error! Job post wasn’t added. Try again",
          variant: "error",
        });
        this.loading = false;
      }
    },
  },
};
</script>
<template>
  <div>
    <button class="add-btn" @click="openModal()">
      Add job
    </button>
    <b-modal
      v-model="showModal"
      title="Provide job details"
      hide-footer
      size="lg"
      centered
      content-class="custom-modal"
    >
      <div class="modal-layout">
        <div class="form-layout">
          <div class="input-layout">
            <div class="input-label">
              Job name*
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Job name"
              v-model="name"
            />
          </div>
          <div class="input-layout">
            <div class="input-label">
              Salary*
            </div>
            <input
              type="number"
              class="form-control"
              placeholder="9999"
              v-model="payPerUnit"
            />
            <select class="form-control w-50" v-model="unit">
              <option v-for="unit in units" :key="unit.id" :value="unit">
                {{ unit.name }}
              </option></select
            >
            <div class="align-self-center">
              {{ payPerUnit }} tg/ {{ unit.name }}
            </div>
          </div>
          <div class="input-layout">
            <div class="input-label">
              Contact info*
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Telegram: @example, Phone: +7 777 777 77 77"
              v-model="contactInfo"
            />
          </div>
          <div class="input-layout">
            <div class="input-label">
              Description*
            </div>
            <b-form-textarea
              class="form-control"
              placeholder="Description"
              v-model="description"
              rows="3"
            />
          </div>
          <div class="input-layout">
            <div class="input-label">
              Basic qualifications
            </div>
            <b-form-textarea
              class="form-control"
              placeholder="Basic qualifications"
              v-model="qualifications"
              rows="3"
            />
          </div>
        </div>
        <div class="action-buttons">
          <button @click="closeModal()">Back</button>
          <button @click="submitJob()" class="submit" :disabled="loading">
            Post job
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<style lang="scss" scoped>
.add-btn {
  display: flex;
  padding: 10px 50px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--action-accent-accent, #181818);

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
  color: var(--base-00-light-primary, #fff);
  text-align: center;

  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

.modal-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xl, 24px);
  align-self: stretch;
}

.form-layout {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-m, 16px);
  align-self: stretch;
}

.input-layout {
  display: flex;
  align-items: flex-start;
  gap: var(--space-l, 20px);
  align-self: stretch;
}

.input-label {
  width: 200px;
  color: var(--local-secondary, #706b8c);
  font-size: 18px;
  font-weight: 700;
  line-height: 38px; /* 211.111% */
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

.action-buttons {
  display: flex;
  gap: 16px;
  padding-top: 16px;
  flex-direction: row;
}

.action-buttons {
  button {
    min-width: 365px;
    display: flex;
    min-height: 44px;
    padding: 7px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    border: 1px solid var(--tertiary-gray-200-light, #e4e4e7);
    background: var(--tertiary-gray-100-light, #f4f4f5);

    /* shadow/shadow-sm [light] */
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);

    color: var(--base-900-light, #1a1a1a);
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
  }
  .submit {
    background: var(--action-accent-accent, #181818);
    color: #fff;
  }
}
</style>
