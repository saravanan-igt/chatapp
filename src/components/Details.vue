<template>
  <div class="user-msg-settings">
    <v-app-bar app>
      <v-btn icon v-on:click="goBack()" color="#000000DE">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="headline">
        <h2>Details</h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <div>
      <div class="user-msg-settings-btn-group">
        <v-avatar size="58">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
        <v-btn
          class="ma-2"
          outlined
          fab
          color="primary"
          v-on:click="goToStaffList()"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
      <v-list flat>
        <v-list-item>
          <template>
            <v-list-item-content>
              <v-list-item-title>Search Chat History</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon>
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider class="d-separator"></v-divider>

        <v-list-item>
          <template>
            <v-list-item-content>
              <v-list-item-title>Mute Notifications</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-switch color="primary" value="chatHistory"></v-switch>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item>
          <template>
            <v-list-item-content>
              <v-list-item-title>Sticky on Top</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-switch color="primary" value="chatHistory"></v-switch>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </div>
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
    // this.listPosts();
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
      this.$router.push("/view");
    },
    goToStaffList() {
      this.$router.push("/staffList");
    },
  },
};
</script>
