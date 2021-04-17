<template>
  <div class="user-msg-settings">
    <v-app-bar app>
      <v-btn icon v-on:click="goBack()" color="#000000DE">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="headline">
        <h2>Staff Lists</h2>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="primary"> Invite </v-btn>
    </v-app-bar>
    <div class="select-all-btn">
      <v-btn text color="primary">
        <v-icon left> mdi-content-copy </v-icon>
        Select All
      </v-btn>
    </div>
    <v-list flat class="user-list">
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
        class="staff-list-group"
      >
        <template v-for="(item, i) in items">
          <v-list-item :key="'userlist' + i">
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox
                  color="primary"
                  off-icon=""
                  on-icon="mdi-check"
                  :input-value="active"
                ></v-checkbox>
              </v-list-item-action>
              <v-badge
                v-if="item.status"
                :class="'status-badge ' + item.status"
                bottom
                icon="mdi-check"
                :color="statusColors[item.status]"
                offset-x="10"
                offset-y="10"
              ></v-badge>
              <v-list-item-avatar color="primary" v-if="item.notification">
                <v-icon dark> mdi-bell-outline </v-icon>
              </v-list-item-avatar>
              <v-list-item-avatar v-if="!item.notification">
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content
                :class="item.notification ? 'notification-content' : ''"
              >
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
          <v-divider :key="i" :inset="true"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
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
    selectedItem: null,
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
        text: "Real-Time",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        status: "active",
        dot: true,
        action: "15 min",
      },
      {
        text: "Audience",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        dot: true,
        action: "15 min",
        status: "active",
      },
      {
        text: "Conversions",
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        status: "active",
        action: "15 min",
      },
    ],
    statusColors: {
      active: "#57DB28",
      busy: "#db2828",
    },
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
      this.$router.push("/userDetails");
    },
  },
};
</script>
