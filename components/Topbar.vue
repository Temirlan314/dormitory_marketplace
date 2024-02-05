<script>
import CreatePostButton from "~/components/products/CreatePostButton.vue";
import { mapGetters } from "vuex";

/**
 * Topbar component
 */
export default {
  data() {
    return {
      showDropdown: false,
      search: null,
      selectedCategory: null,
      languages: [
        {
          flag: require("~/assets/images/flags/us.jpg"),
          language: "en",
          title: "English",
        },
        {
          flag: require("~/assets/images/flags/french.jpg"),
          language: "fr",
          title: "French",
        },
        {
          flag: require("~/assets/images/flags/spain.jpg"),
          language: "es",
          title: "Spanish",
        },
        {
          flag: require("~/assets/images/flags/china.png"),
          language: "zh",
          title: "Chinese",
        },
        {
          flag: require("~/assets/images/flags/arabic.png"),
          language: "ar",
          title: "Arabic",
        },
      ],
      current_language: this.$i18n.locale,
      categories: [],
      text: null,
      flag: null,
      value: null,
    };
  },
  async mounted() {
    try {
      const categories = await this.$axios.get("rest/category/list");
      this.categories = categories.data;
    } catch (e) {
      console.log(e);
    }
  },
  computed: {
    user() {
      return this.$auth.user;
    },
  },
  methods: {
    /**
     * Toggle menu
     */
    async searchProduct() {
      if (this.$route.name == "main___en") {
        // const reponse = await this.$axios.get(`rest/post/search?priceMax=50000000&priceMin=0&queryText=${this.search}&limit=2&offset=0`);
        const reponse = await this.$axios.get("rest/post/list", {
          params: {
            title: this.search,
            categoryId: this.selectedCategory?.id,
          },
        });
        this.$store.dispatch("posts/setPosts", reponse.data);
      } else {
        this.$router.push(`/main?search=${this.search}`);
      }
    },
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    logoutUser() {
      this.$auth.strategy.token.reset();
      this.$router.push("/auth/login");
    },
    /**
     * Full screen
     */
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    /**
     * Toggle rightbar
     */
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    /**
     * Set languages
     */
    setLanguage(locale, country, flag) {
      this.$i18n.locale = locale;
      this.current_language = locale;
      this.text = country;
      this.flag = flag;
    },
    /**
     * Horizontal-toggle menu
     */
    horizonalmenu() {
      let element = document.getElementById("topnav-menu-content");
      element.classList.toggle("show");
    },
    /**
     * Logout user
     */
  },
  components: { CreatePostButton },
};
</script>

<template>
  <!-- Topbar Start -->
  <div
    class="navbar-custom"
    style="
font-size: 16px;
font-weight: 600;
line-height: normal;
display: flex;
padding: 20px 64px;
justify-content: space-between;
align-items: center;
background: #FFF;
box-shadow: 0px 4px 52px 0px rgba(0, 0, 0, 0.10);"
  >
    <div class="d-flex">
      <div
        style="display: flex;
width: 808.5px;
align-items: center;
gap: var(--space-3xl, 40px);
flex-shrink: 0;"
      >
        <router-link to="/main">
          <img src="~/assets/images/kiosk.svg" alt=""
        /></router-link>
        <div
          style="display: flex;
align-items: flex-end;
gap: 24px;"
        >
          <div class="d-flex">
            <div>
              <b-dropdown
                class="input-group-prepend"
                variant="light"
                style="border-radius: 24px;"
                v-model="selectedCategory"
              >
                <template v-slot:button-content>
                  <div
                    style="        max-width: 168px;  overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;"
                  >
                    {{ selectedCategory ? selectedCategory.name : "Category" }}
                    <i
                      class="mdi mdi-chevron-down "
                      style="margin-left: 83px; font-size: 20px;
line-height: 20px;"
                    ></i>
                  </div>
                </template>

                <b-dropdown-item
                  v-for="category in categories"
                  :key="category.id"
                  @click="selectedCategory = category"
                  >{{ category.name }}</b-dropdown-item
                >
              </b-dropdown>
            </div>
            <div>
              <input
                type="search"
                class="form-control"
                :placeholder="$t('navbar.search.text')"
                id="top-search"
                style="  border-radius:0px 24px 24px 0px;
  height: 46px;
  border: #e2e1e8;
  background-color: #F1F1F4;"
                v-model="search"
                @keyup.enter="searchProduct"
              />
              <!-- <div class="input-group-append">
          <button class="btn" type="submit">
            <i class="fe-search"></i>
          </button>
        </div> -->
            </div>
          </div>
          <!-- <div
            class="btn btn-dark"
            style="width: 162px;
          margin-left: 24px;
height: 48px;
padding: 0px 24px;
display: flex;
justify-content: center;
align-items: center;
gap: 4px;
border-radius: 24px;
background:  #1F1F1F;"
          >
            Create post
          </div> -->
          <CreatePostButton />
        </div>
      </div>
      <div></div>
    </div>
    <div class="d-flex text-dark" v-if="user && user.roles[0] == 'CUSTOMER'">
      <div style="margin-right: 48px; " class="align-self-center">
        Chats
      </div>
      <div style="margin-right: 48px;  " class="align-self-center">
        Auctions
      </div>
      <div style="margin-right: 48px; " class="align-self-center">
        Job Board
      </div>

      <b-nav-item-dropdown
        style="list-style-type: none;"
        right
        class="notification-list topbar-dropdown"
        menu-class="profile-dropdown"
        toggle-class="p-0"
      >
        <template slot="button-content" class="nav-link dropdown-toggles">
          <div class="nav-user mr-0">
            <b-avatar
              size="md"
              class="bg-soft-danger text-dark font-20 hoverable"
              @click=""
              ><span class="" v-if="user"
                >{{ user.firstname[0] }}{{ user.secondName[0] }}</span
              ></b-avatar
            >
          </div>
        </template>

        <router-link tag="a" to="/account/profile" class="dropdown-item mr-4">
          <i class="fe-user mr-1"></i>
          <span>Profile</span>
        </router-link>
        <a
          class="dropdown-item text-danger"
          @click="logoutUser"
          href="javascript: void(0);"
        >
          <i class="fe-log-out mr-1"></i>
          <span>{{ $t("logOut") }}</span>
        </a>
      </b-nav-item-dropdown>
    </div>
    <div class="d-flex text-dark" v-else-if="user && user.roles[0] == 'STORE'">
      <div style="margin-right: 48px; " class="align-self-center">
        Chats
      </div>
      <div style="margin-right: 48px;  " class="align-self-center">
        Analytics
      </div>

      <b-nav-item-dropdown
        style="list-style-type: none;"
        right
        class="notification-list topbar-dropdown"
        menu-class="profile-dropdown"
        toggle-class="p-0"
      >
        <template slot="button-content" class="nav-link dropdown-toggles">
          <div class="nav-user mr-0">
            <b-avatar
              size="md"
              class="bg-soft-danger text-dark font-20 hoverable"
              ><span class="">{{ user.storeInfo.name[0] }}</span></b-avatar
            >
          </div>
        </template>

        <router-link tag="a" to="/account/profile" class="dropdown-item mr-4">
          <i class="fe-user mr-1"></i>
          <span>Profile</span>
        </router-link>
        <a
          class="dropdown-item text-danger"
          @click="logoutUser"
          href="javascript: void(0);"
        >
          <i class="fe-log-out mr-1"></i>
          <span>{{ $t("logOut") }}</span>
        </a>
      </b-nav-item-dropdown>
    </div>
  </div>
  <!-- end Topbar -->
</template>
<style lang="scss">
.hoverable:hover {
  cursor: pointer;
}
.btn.dropdown-toggle.btn-light {
  border-radius: 24px 0px 0px 24px;
  height: 46px;
  background-color: #f1f1f4;
  border: #e2e1e8;
}
.dropdown-btn {
  display: none;
}
.li {
  list-style-type: none;
}
</style>
