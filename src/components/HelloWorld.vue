<template>
  <v-container fluid>
    <v-layout
      text-center
      wrap
    >
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
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
      <template v-for="(item, i) in items">
        
        <v-list-item
          :key="i"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
            <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider :key="i" :inset="true"></v-divider>
      </template>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    form: {
      name: '',
      position: '',
    },
    isLogin: false,
    alert: false,
    selectedItem: 1,
      items: [
        { text: 'Real-Time', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', },
        { text: 'Audience', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', },
        { text: 'Conversions', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', },
      ],
  }),
  methods: {
    storeIt() {
      this.$store.commit('change', this.form);
      this.isLogin = this.$store.getters.isLogin;
      this.alert = false;
      if (this.isLogin) {
        this.$router.push('/view');
      } else {
        this.alert = true;
      }
    },
  },
};
</script>
