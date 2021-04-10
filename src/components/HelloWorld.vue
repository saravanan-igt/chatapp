<template>
  <div>
    <v-app-bar app>
      <v-toolbar-title class="headline">
        <h2>Message</h2>
      </v-toolbar-title>
    </v-app-bar>
    <v-container fluid>
      <v-layout text-center wrap>
        <v-flex>
          <v-text-field
            label="Search"
            outlined
            dense
            class="user-list-search-input"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-list flat class="user-list">
        <v-list-item-group v-model="selectedItem" color="primary">
          <template v-for="(item, i) in items">
            <v-list-item :key="'userlist' + i" v-on:click="goToChat()">
              <v-badge
                class="avatar-dot"
                v-if="item.dot"
                bordered
                bottom
                dot
                offset-x="10"
                offset-y="10"
              ></v-badge>
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
                <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text
                  v-text="item.action"
                ></v-list-item-action-text>
                <v-icon
                  v-if="item.notification && item.mute"
                  color="grey lighten-1"
                >
                  mdi-bell-off
                </v-icon>
                <v-icon v-if="item.notification && !item.mute" color="primary">
                  mdi-volume-high
                </v-icon>
              </v-list-item-action>
            </v-list-item>
            <v-divider :key="i" :inset="true"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      name: "",
      position: "",
    },
    isLogin: false,
    alert: false,
    selectedItem: 1,
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
      },
      {
        text: "Conversions",
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        status: "busy",
        action: "15 min",
      },
      {
        text: "Conversions",
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        notification: true,
        action: "15 min",
        mute: true,
      },
      {
        text: "Conversions",
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        notification: true,
        action: "15 min",
        mute: false,
      },
    ],
    statusColors: {
      active: "#57DB28",
      busy: "#db2828",
    },
  }),
  methods: {
    storeIt() {
      this.$store.commit("change", this.form);
      this.isLogin = this.$store.getters.isLogin;
      this.alert = false;
      if (this.isLogin) {
        this.$router.push("/view");
      } else {
        this.alert = true;
      }
    },
    goToChat() {
      this.$router.push({ name: "ViewHello" });
    },
  },
};
</script>
