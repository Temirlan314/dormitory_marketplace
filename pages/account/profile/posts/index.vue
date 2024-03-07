<script>
import ProductCard from "~/components/products/ProductCard.vue";

import Multiselect from "vue-multiselect";
import objectToFormData from "~/helpers/objectToFormData";

/**
 * Login component
 */
export default {
  head() {
    return {
      title: `My posts`,
    };
  },
  async asyncData({ $axios, $auth }) {
    try {
      const posts = await $axios.get(
        `rest/post/list?ownerId=${$auth.user.id}`,
        {
          ownerId: $auth.user.id,
        }
      );
      const categories = await $axios.get("rest/category/list");

      return { categories: categories.data, posts: posts.data };
    } catch (e) {
      console.log(e);
    }
  },
  data() {
    return {
      title: "",
      price: null,
      description: "",
      categories: [],
      category: null,

      submitted: false,
      authError: null,
      tryingToLogIn: false,
      isAuthError: false,
      cardModalShow: false,
      product: null,
      currency: "Tenge",
      editShow: false,
    };
  },
  computed: {
    user() {
      return this.$auth.user;
    },
  },
  watch: {
    cardModalShow(val) {
      if (!val) {
        this.editShow = false;
      }
    },
  },
  methods: {
    openCardModal(post) {
      this.product = post;
      this.cardModalShow = true;
    },
    customLabel(item) {
      return `${item.name}`;
    },
    openEdit() {
      this.editShow = true;
      this.title = this.product.name;
      this.price = this.product.price;
      this.description = this.product.description;
      // this.category = this.categories.find((x) => x.id == this.product.categoryId);
    },
    async update(){
      try {
        let params = {
          title: this.title,
          price: parseInt(this.price),
          description: this.description,
          categoryId: this.category.id,
        };
        let body = objectToFormData(params);
        await this.$axios.put(`rest/post/update/${this.product.id}`, body);
        this.editShow = false;
        this.cardModalShow = false;
      } catch (e) {
        console.log(e);
      }
      this.cardModalShow = false;
    }
  },
  components: { ProductCard, Multiselect },
  middleware: ["auth", "customer"],
};
</script>
<template>
  <div>
    <div style="margin-bottom: 24px;">
      <router-link to="/account/profile"> Profile </router-link>/ My posts
    </div>
    <div class="big-text hoverable" style="margin-bottom: 32px;">
      My posts
    </div>
    <div class="d-flex" v-if="posts && posts.length">
      <div
        v-for="post in posts"
        style="margin-right: 24px;"
        @click="openCardModal(post)"
      >
        <ProductCard :product="post" />
      </div>
    </div>
    <div
      v-else
      class="d-flex justify-content-center align-content-center"
      style="width:100%; height: 100%;"
    >
      <div
        style="display: inline-flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 48px;"
      >
        <img src="~/assets/images/products/NoPosts.svg" alt="" />
        <div
          class=""
          style="
color:  #0D0D0D;
font-size: 32px;
font-weight: 700;
line-height: normal;
letter-spacing: 1.92px;

display: flex;
flex-direction: column;
align-items: center;
gap: 24px;"
        >
          <div>No posts yet, create your first one!</div>
          <div
            class="btn btn-dark"
            style="
display: flex;
justify-content: center;
align-items: center;
width: 162px;
height: 48px;
padding: 0px 24px;
gap: 4px;
border-radius: 24px;
background:  #1F1F1F;"
          >
            Create post
          </div>
        </div>
      </div>
    </div>
    <b-modal
      v-model="cardModalShow"
      hide-header
      hide-footer
      size="md"
      body-class="card-modal-body"
      style="padding: 32px !important;"
      centered
    >
      <div v-if="!editShow">
        <img
          src="~/assets/local_images/Image 2.png"
          alt="No image"
          style="width: 100%; margin-bottom: 32px;"
        />
        <div
          class="card-text text-center"
          v-if="product"
          style="margin-bottom: 24px;"
        >
          <div class="product-name">{{ product.name }}</div>
          <div class="product-price">{{ product.price }} {{ currency }}</div>
          <div class="product-price">
            Seller: {{ user.firstname }} {{ user.secondName }}
          </div>
          <div class="product-description">{{ product.description }}</div>
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
            @click="cardModalShow = false"
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
            @click="openEdit()"
          >
            Edit
          </div>
        </div>
      </div>
      <div v-else>
        <img
          src="~/assets/local_images/Image 2.png"
          alt="No image"
          style="width: 100%; margin-bottom: 32px;"
        />
        <div class="input-fields">
          <div class="edit-input">
            <div class="name">
              <div class="label-text">
                Naming
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Naming"
                v-model="title"
              />
            </div>
          </div>
          <div class="edit-input">
            <div class="name">
              <div class="label-text">
                Price
              </div>
              <input
                type="number"
                class="form-control"
                placeholder="Price"
                v-model="price"
              />
            </div>
          </div>
          <div class="edit-input">
            <div class="name">
              <div class="label-text">
                Category
              </div>
              <multiselect
                v-model="category"
                :options="categories"
                placeholder="Select category"
                class="custom-multiselect"
                trackBy="name"
                :customLabel="customLabel"
              ></multiselect>
            </div>
          </div>
          <div class="edit-input">
            <div class="name">
              <div class="label-text">
                Description
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Description"
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
            @click="editShow = false"
          >
            Discard changes
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
            @click="update()"
          >
            Update
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<style lang="scss" scoped>
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
