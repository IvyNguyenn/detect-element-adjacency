import { NavigationRoute, registerRoute } from 'workbox-routing';
import { precacheAndRoute } from 'workbox-precaching';
import { NetworkFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';
precacheAndRoute(self.__WB_MANIFEST);
const CURRENT_CACHES = {
  resource_cache: "resource_cache-v1",
};

const navigationRoute = new NavigationRoute(({ url: { pathname } }) =>
  pathname.toLowerCase().startsWith("/static/"),
  new NetworkFirst({
    cacheName: CURRENT_CACHES.resource_cache,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 3600, //1h
      }),
    ],
  }),
  {
    blacklist: [/^\/connect/, /^\/api/, /^\/identity/, /^\/authentication/]
  });
registerRoute(navigationRoute);
