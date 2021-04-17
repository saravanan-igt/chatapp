<template>
  <div class="chat-box">
    <v-app-bar app>
      <v-btn icon v-on:click="goBack()" color="#000000DE">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="headline">
        <h2>A1</h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon color="#000000DE">
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-btn>
    </v-app-bar>
    <v-container fluid class="chat-message-area">
      <v-row no-gutter>
        <v-col cols="10" xs="10">
          <v-card outlined class="chat-bubble task-msg">
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-0 text-uppercase">
                  AA-re-rs
                </v-list-item-title>
                <v-list-item-subtitle> 123126-aa </v-list-item-subtitle>
                <v-list-item-subtitle>
                  Sanitize Machine @ 16:25
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action class="ml-0 details-btn">
                <v-btn text color="primary" class="text-uppercase">
                  Details
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-card>
        </v-col>
        <v-col cols="2" xs="2">
          <v-avatar v-on:click="goToDetails()">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </v-col>
      </v-row>

      <v-row no-gutter>
        <v-col cols="12" xs="12">
          <div class="chat-bubble user-msg right-msg">
            <p class="user-msg-text">Hello，please deal with this task.</p>
            <v-avatar v-on:click="goToDetails()">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </div>
        </v-col>
      </v-row>

      <v-row no-gutter>
        <v-col cols="12" xs="12">
          <div class="chat-bubble user-msg left-msg">
            <p class="user-msg-text">Hello</p>
            <v-avatar v-on:click="goToDetails()">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-footer padless class="messaging-footer">
      <div class="chat-field">
        <v-btn fab color="primary" x-small dark>
          <v-icon>mdi-access-point</v-icon>
        </v-btn>
        <v-text-field outlined></v-text-field>
        <div>
          <v-btn icon color="primary">
            <v-icon>mdi-emoticon-happy-outline</v-icon>
          </v-btn>
          <v-btn icon color="primary">
            <v-icon>mdi-plus-circle-outline</v-icon>
          </v-btn>
        </div>
      </div>
      <div class="chat-btn-group">
        <v-btn color="primary" fab large dark>
          <v-icon>mdi-image</v-icon>
        </v-btn>
        <v-btn color="primary" fab large dark>
          <v-icon>mdi-camera</v-icon>
        </v-btn>
        <v-btn color="primary" fab large dark>
          <v-icon>mdi-folder</v-icon>
        </v-btn>
      </div>
    </v-footer>
  </div>
</template>

<script>
import apiService from "../services";

export default {
  data: () => ({
    candidate: {
      name: "",
      position: "",
    },
    isValid: false,
    posts: [],
    headers: [
      {
        text: "Id",
        align: "right",
        value: "id",
      },
      { text: "Title", value: "title", align: "left" },
      { text: "Description", value: "body", align: "left" },
    ],
  }),
  mounted() {
    // this.$store.dispatch('GET_LOGIN');
    // this.isValid = this.$store.getters.isLogin;
    // if (this.isValid) {
    //   this.candidate = this.$store.getters.login;
    // } else {
    //   this.$router.push('/');
    // }
    this.listPosts();
  },
  methods: {
    clearAndBack() {
      this.$store.commit("change", "{}");
      this.$router.push("/");
    },
    listPosts() {
      apiService
        .getPosts()
        .then((response) => response.data)
        .then((response) => {
          this.posts = response;
        });
    },
    goBack() {
      this.$router.push("/");
    },
    goToDetails() {
      this.$router.push("/userDetails");
    },
  },
};
</script>
