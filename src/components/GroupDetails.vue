<template>
  <div class="user-msg-settings">
    <v-app-bar app>
      <v-btn icon v-on:click="goBack()" color="#000000DE">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="headline">
        <h2>Group Details</h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <div>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item :key="index">
            <v-list-item-avatar color="primary">
              <v-icon dark> mdi-bell-outline </v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <v-list flat>
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
      <div class="ma-2">
        <v-btn block outlined color="primary"> Clear Chat History </v-btn>
      </div>
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
    items: [
      {
        title: "Jackpot",
        subtitle: `ID23955`,
      },
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
      this.$router.push("/groups");
    },
    goToStaffList() {
      this.$router.push("/staffList");
    },
  },
};
</script>
