<script>
import vue2Dropzone from "vue2-dropzone";
import Multiselect from "vue-multiselect";
import objectToFormData from "~/helpers/objectToFormData";

/**
 * Product Card component
 */
export default {
  components: {
    vueDropzone: vue2Dropzone,
    Multiselect,
  },
  data() {
    return {
      createModal: false,
      title: "",
      price: null,
      description: "",
      categories: [],
      category: null,
      files: [],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: {
          "My-Awesome-Header": "header value",
        },
        previewTemplate: this.template(),
      },
    };
  },
  props: {},
  computed: {},
  async mounted() {
    try {
      const categories = await this.$axios.get("rest/category/list");
      this.categories = categories.data;
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    template: function() {
      return ` <div class="dropzone-previews mt-3">
            <div class="card mt-1 mb-0 shadow-none border">
                <div class="p-2">
                    <div class="row align-items-center">
                        <div class="col-auto">
                            <img data-dz-thumbnail src="#" class="avatar-sm rounded bg-light" alt="">
                        </div>
                        <div class="col pl-0">
                            <a href="javascript:void(0);" class="text-muted font-weight-bold" data-dz-name></a>
                            <p class="mb-0" data-dz-size></p>
                        </div>
                        <div class="col-auto">
                            <!-- Button -->
                            <a href="" class="btn btn-link btn-lg text-muted" data-dz-remove>
                                <i class="fe-x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    },
    customLabel(item) {
      return `${item.name}`;
    },
    async createPost() {
      if (this.title && this.price && this.description && this.category) {
        try {
          let params = {
            title: this.title,
            price: parseInt(this.price),
            description: this.description,
            categoryId: this.category.id,
          };
          let body = objectToFormData(params);
          await this.$axios.post("rest/post/create", body);
          this.createModal = false;
        } catch (e) {
          console.log(e);
        }
      }
    },
  },
};
</script>
<template>
  <div>
    <div
      class="btn btn-dark"
      style="width: 162px;
height: 48px;
padding: 0px 24px;
display: flex;
justify-content: center;
align-items: center;
gap: 4px;
border-radius: 24px;
background:  #1F1F1F;"
      @click="createModal = true"
    >
      Create post
    </div>
    <b-modal
      v-model="createModal"
      hide-header
      hide-footer
      size="md"
      body-class="card-modal-body"
      style="padding: 32px !important;"
      centered
    >
      <div class="modalbox">
        <vue-dropzone
          id="dropzone"
          ref="myVueDropzone"
          :use-custom-slot="true"
          :options="dropzoneOptions"
          style="width: 100%;"
          v-model="files"
        >
          <div class="dz-message needsclick">
            <i
              class="h1 mdi mdi-file-upload-outline"
              style="color: #10083F"
            ></i>
            <div
              style="color: #000;
text-align: center;
font-size: 20px;
font-weight: 600;
line-height: normal;"
            >
              Drop files here or click to upload.
            </div>
          </div>
        </vue-dropzone>
        <div class="input-fields">
          <div class="edit-input">
            <div class="name">
              <div class="label-text">
                Naming*
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Naming*"
                v-model="title"
              />
            </div>
          </div>
          <div class="edit-input">
            <div class="name">
              <div class="label-text">
                Price*
              </div>
              <input
                type="number"
                class="form-control"
                placeholder="Price*"
                v-model="price"
              />
            </div>
          </div>
          <div class="edit-input">
            <div class="name">
              <div class="label-text">
                Price*
              </div>
              <multiselect
                v-model="category"
                :options="categories"
                placeholder="Select category"
                trackBy="name"
                :customLabel="customLabel"
                class="custom-multiselect"
              ></multiselect>
            </div>
          </div>
          <div class="edit-input">
            <div class="name">
              <div class="label-text">
                Description*
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Description*"
                v-model="description"
              />
            </div>
          </div>
        </div>
        <div
          style="display: flex;
padding-top: var(--space-m, 16px);
justify-content: flex-end;
align-items: flex-start;
gap: var(--space-m, 16px);
align-self: stretch;"
        >
          <div
            class="btn btn-secondary"
            style="display: flex;
height: 44px;
padding: 7px 16px;
justify-content: center;
align-items: center;
gap: 12px;
flex: 1 0 0;
border-radius: 24px;
border: 1px solid var(--tertiary-gray-200-light, #E4E4E7);
background: var(--tertiary-gray-100-light, #F4F4F5);
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);

color: var(--base-900-light, #1A1A1A);
text-align: center;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 30px;"
            @click="createModal = false"
          >
            Back
          </div>
          <div
            class="btn btn-secondary"
            style="display: flex;
height: 44px;
padding: 7px 16px;
justify-content: center;
align-items: center;
gap: 12px;
flex: 1 0 0;
border-radius: 24px;
border: 1px solid var(--tertiary-gray-200-light, #E4E4E7);
background: var(--action-accent-accent, #0D0D0D);
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
text-align: center;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 30px;"
            @click="createPost()"
          >
            Create post
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<style lang="scss" scoped>
.card-modal-body {
  padding: 24px 32px !important;
}

.modalbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
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
