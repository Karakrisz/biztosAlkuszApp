<script setup>
import { ref, onMounted } from 'vue'

// Gomb megjelenítése Androidon
const showInstallButton = ref(false)
let deferredPrompt = null

// Detect iOS platform
const isIOS = ref(false)
const isInStandaloneMode = ref(false)

onMounted(() => {
  // Android: Figyeljük a 'beforeinstallprompt' eseményt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPrompt = e
    showInstallButton.value = true
  })

  // iOS detektálása
  const userAgent = window.navigator.userAgent
  isIOS.value = /iPhone|iPad|iPod/i.test(userAgent)
  isInStandaloneMode.value =
    'standalone' in window.navigator && window.navigator.standalone
})

// Telepítési prompt Androidon
const installPWA = async () => {
  if (deferredPrompt) {
    showInstallButton.value = false
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      console.log('User accepted the A2HS prompt')
    } else {
      console.log('User dismissed the A2HS prompt')
    }
    deferredPrompt = null
  }
}
</script>

<template>
  <div>
    <VitePwaManifest />
    <!-- Telepítési gomb Androidon és iOS-en -->
    <button class="pwa-btn" @click="installPWA">
      Telepítés Alkalmazásként
    </button>

    <!-- Üzenet iOS felhasználóknak -->
    <div v-if="isIOS && isInStandaloneMode === false" class="ios-install-guide">
      <p>
        Használd alkalmazásként! Koppints a "Megosztás" ikonra, majd válaszd a
        "Hozzáadás a Főképernyőhöz" lehetőséget.
      </p>
    </div>

    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<style scoped>
.ios-install-guide {
  background-color: #f9f9f9;
  padding: 10px;
  border: 1px solid #ddd;
  margin: 20px 0;
  text-align: center;
  font-size: 16px;
}

.ios-install-guide p {
  margin: 0;
}

.pwa-btn {
  background-color: #001647;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: fixed;
  bottom: 1em;
  z-index: 10;
  left: 3em;
}

button:hover {
  background-color: #001647;
}

@media screen and (max-width: 767px) {
  .pwa-btn {
    bottom: 5em;
  }
}
</style>
