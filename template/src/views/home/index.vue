<template>
  <div>
    home
    <keep-alive :include="includeRoutes">
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      includeRoutes: [],
    };
  },
  watch: {
    $route: {
      handler(to = {}, from = {}) {
        const { keepAlive: fromKeepAlive, deepth: fromDeepth } =
          from.meta ?? {};
        const { keepAlive: toKeepAlive, deepth: toDeepth } = to.meta ?? {};
        // 收集缓存的路由
        if (toKeepAlive) {
          if (!this.includeRoutes.includes(to.name)) {
            this.includeRoutes.push(to.name);
          }
        }
        if (fromKeepAlive && toDeepth < fromDeepth) {
          this.includeRoutes = this.includeRoutes.filter(
            (routeName) => routeName !== from.name
          );
        }
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>