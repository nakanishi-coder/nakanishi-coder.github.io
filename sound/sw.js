// Service Worker for PWA functionality (タブレット最適化版 v0.26.2)
const CACHE_NAME = 'audio-analyzer-v0.26.2'
const urlsToCache = [
  './',
  './index.html',
  './src/main.js',
  './src/style.css',
  './manifest.json',
  './icon-192.svg',
  './vite.svg'
]

// Install event
self.addEventListener('install', (event) => {
  console.log('🔧 Service Worker v0.26.2 installing...')
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('📦 キャッシュにリソースを保存中...')
        return cache.addAll(urlsToCache)
      })
      .then(() => {
        console.log('✅ リソースのキャッシュ完了')
        return self.skipWaiting() // 即座にアクティブ化
      })
  )
})

// Fetch event（タブレット向け最適化）
self.addEventListener('fetch', (event) => {
  // タブレットでの高速応答を優先
  if (event.request.destination === 'document' || 
      event.request.destination === 'script' || 
      event.request.destination === 'style') {
    
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            // キャッシュがあれば即座に返す（タブレットの高速化）
            console.log('⚡ キャッシュから高速配信:', event.request.url)
            return cachedResponse
          }
          
          // キャッシュがない場合はネットワークから取得
          return fetch(event.request)
            .then((response) => {
              // 正常なレスポンスをキャッシュに保存
              if (response.status === 200) {
                const responseToCache = response.clone()
                caches.open(CACHE_NAME)
                  .then((cache) => {
                    cache.put(event.request, responseToCache)
                  })
              }
              return response
            })
            .catch(() => {
              // オフライン時のフォールバック
              console.log('📴 オフライン: キャッシュから配信を試行')
              return caches.match('./index.html')
            })
        })
    )
  } else {
    // その他のリクエストは通常処理
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request)
      })
    )
  }
})

// Activate event
self.addEventListener('activate', (event) => {
  console.log('🚀 Service Worker v0.26.2 activating...')
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ 古いキャッシュを削除:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    }).then(() => {
      console.log('✅ Service Worker アクティブ化完了')
      return self.clients.claim() // 既存のクライアントも制御下に
    })
  )
})

// Background sync（タブレットでのオフライン対応）
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('🔄 バックグラウンド同期実行')
    event.waitUntil(
      // 必要に応じてオフライン時のデータ同期処理を追加
      Promise.resolve()
    )
  }
})

// Push notifications（将来の拡張用）
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json()
    console.log('📳 プッシュ通知受信:', data)
    
    const options = {
      body: data.body || '音響解析アプリからの通知',
      icon: './icon-192.svg',
      badge: './icon-192.svg',
      tag: 'audio-analyzer-notification',
      requireInteraction: false,
      actions: [
        {
          action: 'open',
          title: 'アプリを開く'
        }
      ]
    }
    
    event.waitUntil(
      self.registration.showNotification(data.title || '音響解析アプリ', options)
    )
  }
})
