// ============================================================
//  InvTrack Pro — Firebase Cloud Messaging Service Worker
//  Archivo: firebase-messaging-sw.js  (raíz del repositorio)
// ============================================================
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBwQ2NKvIiwSfjxvDWcCN7xMNqPUPfLTXs",
  authDomain: "app-de-inventario-96d5a.firebaseapp.com",
  databaseURL: "https://app-de-inventario-96d5a-default-rtdb.firebaseio.com",
  projectId: "app-de-inventario-96d5a",
  storageBucket: "app-de-inventario-96d5a.firebasestorage.app",
  messagingSenderId: "307761953774",
  appId: "1:307761953774:web:8575aaea648961aae56cff"
});

const messaging = firebase.messaging();

// ── Notificaciones en SEGUNDO PLANO (navegador cerrado / tab oculto)
messaging.onBackgroundMessage(function(payload) {
  const { title, body, icon, tag, data } = payload.notification || {};
  const notifTitle = title || '🔔 InvTrack Pro';
  const notifOpts = {
    body:    body  || 'Tienes una nueva notificación',
    icon:    icon  || '/icon-192.png',
    badge:   '/icon-192.png',
    tag:     tag   || 'invtrack-' + Date.now(),
    data:    data  || {},
    vibrate: [200, 80, 200],
    requireInteraction: true,
    actions: [
      { action: 'open', title: '📱 Abrir app' },
      { action: 'close', title: 'Cerrar' }
    ]
  };
  return self.registration.showNotification(notifTitle, notifOpts);
});

// ── Al tocar la notificación, abrir / enfocar la app
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if (event.action === 'close') return;
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(list) {
      for (const client of list) {
        if (client.url && 'focus' in client) return client.focus();
      }
      return clients.openWindow('/');
    })
  );
});
