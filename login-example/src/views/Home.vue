<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>Home Page</p>
    <Button type="error" @click="logout" size="large">Logout</Button>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    logout() {
      localStorage.removeItem("isLogin");
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
