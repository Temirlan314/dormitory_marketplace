<script>
import { chatData, chatMessagesData } from "./data";
import { required } from "vuelidate/lib/validators";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

/**
 * Chat comoponent
 */
export default {
  head() {
    return {
      title: `${this.title} | Bueno.money`,
    };
  },
  data() {
    return {
      chatData: chatData,
      chatMessagesData: chatMessagesData,
      title: "Chat",
      items: [
        {
          text: "Minton",
        },
        {
          text: "Apps",
        },
        {
          text: "Chat",
          active: true,
        },
      ],
      submitted: false,
      form: {
        message: "",
      },
      username: "temirlan",
      selectedUserId: null,
      stompClient: null,
    };
  },
  validations: {
    form: {
      message: {
        required,
      },
    },
  },
  methods: {
    connect() {
      if (this.username) {
        const socket = new SockJS("/ws");
        this.stompClient = this.Stomp.over(socket);

        this.stompClient.connect({}, onConnected, onError);
      }
      event.preventDefault();
    },

    onConnected() {
      this.stompClient.subscribe(`/user/${this.username}/queue/messages`);
      // this.stompClient.subscribe(`/public/connected`, this.onMessageReceived);

      this.stompClient.send(
        "/app/public.addUser",
        {},
        JSON.stringify({ username: this.username, status: "ONLINE" })
      );
    },
    /**
     * Get the name of user
     */
    chatUsername(name, image) {
      this.username = name;
      this.usermessage = "Hello";

      this.chatMessagesData = [];
      const currentDate = new Date();
      this.chatMessagesData.push({
        image: image,
        name: this.username,
        message: this.usermessage,
        time: currentDate.getHours() + ":" + currentDate.getMinutes(),
      });
    },

    /**
     * Char form Submit
     */
    // eslint-disable-next-line no-unused-vars
    formSubmit(e) {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      } else {
        const message = this.form.message;
        const currentDate = new Date();
        this.chatMessagesData.push({
          align: "right",
          name: "Marcus",
          message,
          time: currentDate.getHours() + ":" + currentDate.getMinutes(),
          image: require("~/assets/images/users/avatar-1.jpg"),
        });
      }
      this.submitted = false;
      this.form = {};
    },
  },
  mounted() {
    // this.connect();
  },
};
</script>

<template>
  <div>
    <!-- <PageHeader :title="title" :items="items" /> -->

    <div class="row">
      <!-- start chat users-->
      <div class="col-xl-3 col-lg-4">
        <div class="card chats-card">
          <div class="card-body chats-body">
            <h6 class="chats-header">Chats</h6>
            <div
              class="text-body"
              v-for="(item, index) in chatData"
              :key="index"
              @click="chatUsername(item.name, item.image)"
            >
              <div class="position-relative">
                <img
                  :src="item.image"
                  class="mr-2 rounded-circle"
                  height="42"
                  alt="user"
                />
              </div>
              <div class="chats-message">
                <div class="chats-name">
                  {{ item.name }}
                </div>
                <div class="message">
                  {{ item.message }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- chat area -->
      <div class="col-xl-9 col-lg-8">
        <div class="card chats-card" style="background-color: #F3F3F5;">
          <div
            class="card-body py-2 px-3 border-bottom border-light"
            style="background-color: #fff; border-radius: 12px 12px 0px 0px;"
          >
            <div class="media py-1">
              <img
                src="~/assets/images/users/avatar-5.jpg"
                class="mr-2 rounded-circle"
                height="36"
                alt="Brandon Smith"
              />
              <div class="media-body">
                <h5 class="mt-0 mb-0 font-15">
                  <nuxt-link to="/contacts/profile" class="text-reset">
                    {{ username }}
                  </nuxt-link>
                </h5>
              </div>
            </div>
          </div>
          <div class="card-body chats-body">
            <simplebar data-simplebar style="max-height: 460px; width: 100%;">
              <ul class="conversation-list chat-app-conversation">
                <li
                  class="clearfix"
                  v-for="(data, index) in chatMessagesData"
                  :key="index"
                  :class="{ odd: data.align === 'right' }"
                >
                  <div class="chat-avatar">
                    <img :src="data.image" class="rounded" alt="James Z" />
                    <i>{{ data.time }}</i>
                  </div>
                  <div
                    style=""
                    :class="
                      data.name === username ? 'other-message' : 'other-message'
                    "
                  >
                    <div
                      class="ctext-wrap"
                      style="border-radius: 16px 16px 4px 16px;
                      
background: var(--surface-raspberry, #FFDFED);
display: flex;
padding: 10px var(--space-s, 12px);
justify-content: flex-end;
align-items: flex-end;
gap: 6px;
/* shadow/shadow-sm [light] */
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);"
                    >
                      <!-- <i>{{ data.name }}</i> -->
                      <p>{{ data.message }}</p>
                    </div>
                  </div>
                  <!-- <b-dropdown
                    class="conversation-actions"
                    toggle-class="btn-sm btn-link text-reset p-0"
                    variant="black"
                    right
                  >
                    <template v-slot:button-content>
                      <i class="mdi mdi-dots-vertical font-18"></i>
                    </template>
                    <a class="dropdown-item" href="#">Copy Message</a>
                    <a class="dropdown-item" href="#">Edit</a>
                    <a class="dropdown-item" href="#">Delete</a>
                  </b-dropdown> -->
                </li>
              </ul>
            </simplebar>
            <div class="row w-100">
              <div class="col">
                <div class="mt-2 p-1">
                  <form
                    class="needs-validation"
                    @submit.prevent="formSubmit"
                    name="chat-form"
                    id="chat-form"
                  >
                    <div class="row">
                      <div class="col mb-2 mb-sm-0">
                        <input
                          type="text"
                          v-model="form.message"
                          class="form-control border-0"
                          placeholder="Write a message..."
                        />
                        <div
                          v-if="submitted && $v.form.message.$error"
                          class="invalid-feedback"
                        >
                          <span v-if="!$v.form.message.required"
                            >Please enter your message</span
                          >
                        </div>
                      </div>
                      <div class="col-sm-auto">
                        <div class="btn-group">
                          <a href="#" class="btn btn-light">
                            <i class="fe-paperclip"></i>
                          </a>
                          <button
                            type="submit"
                            class="btn btn-success chat-send btn-block"
                          >
                            <i class="fe-send"></i>
                          </button>
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row-->
                  </form>
                </div>
              </div>
              <!-- end col-->
            </div>
            <!-- end row -->
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end chat area-->
    </div>
    <!-- end row-->
  </div>
</template>

<style scoped>
.my-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: var(--space-l, 20px);
  align-self: stretch;
}

.other-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: var(--space-l, 20px);
  align-self: stretch;
}

.chats-header {
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.text-body {
  display: flex;
  flex-direction: row;
  gap: 12px;
  padding-bottom: 12px;
}

.chats-card {
  border-radius: 12px;
  border: 1px solid #e4e4e7;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.04);
}

.chats-body {
  padding: 24px 36px 24px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-s, 12px);
  max-height: 648px;
  overflow: scroll;
  scrollbar-width: thin;
}

.chats-message {
  display: flex;
  flex-direction: column;
}

.chats-name {
  color: #000;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px; /* 150% */
}
.message {
  color: #000;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px; /* 200% */
}
</style>
