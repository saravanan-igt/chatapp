<template>
  <div class="user-msg-settings">
    <v-app-bar app class="search-bar">
      <v-text-field placeholder="Search" outlined clearable></v-text-field>
      <v-spacer></v-spacer>
      <v-btn text color="primary"> Cancel </v-btn>
    </v-app-bar>
    <v-card flat>
      <v-tabs v-model="tab" background-color="transparent" color="primary" grow>
        <v-tab v-for="item in tabs" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in tabs" :key="item">
          <v-list flat class="user-list">
            <v-list-item-group v-model="selectedItem" color="primary">
              <template v-for="(item, i) in items">
                <v-list-item :key="'userlist' + i">
                  <template>
                    <v-badge
                      v-if="item.status"
                      :class="'status-badge ' + item.status"
                      bottom
                      icon="mdi-check"
                      :color="statusColors[item.status]"
                      offset-x="10"
                      offset-y="10"
                    ></v-badge>
                    <v-list-item-avatar
                      color="primary"
                      v-if="item.notification"
                    >
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
        </v-tab-item>
      </v-tabs-items>
    </v-card>
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
    tab: null,
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
    tab: null,
    tabs: ["Contact", "Message"],
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
