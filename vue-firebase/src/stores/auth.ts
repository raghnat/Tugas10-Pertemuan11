// src/stores/auth.ts
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import router from "@/router";
import { auth } from "@/utils/firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
  User,
} from "firebase/auth";
import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
import { alertController } from "@ionic/vue";

export const useAuthStore = defineStore("auth", () => {
  // Variabel User
  const user = ref<User | null>(null);

  // Variabel isAuth mengembalikan true or false
  // Cek jika user sudah login atau belum
  const isAuth = computed(() => user.value !== null);

  // Sign In with Google
  const loginWithGoogle = async () => {
    try {
      await GoogleAuth.initialize({
        clientId: "977822476916-af51a04l8b8hk677jr1ds893mvtqj19t",
        scopes: ["profile", "email"],
        grantOfflineAccess: true,
      });

      const googleUser = await GoogleAuth.signIn();

      const idToken = googleUser.authentication.idToken;

      const credential = GoogleAuthProvider.credential(idToken);

      const result = await signInWithCredential(auth, credential);

      user.value = result.user;

      router.push("/home");
    } catch (error) {
      console.error("Google sign-in error:", error);

      const alert = await alertController.create({
        header: "Login Gagal!",
        message: "Terjadi kesalahan saat login dengan Google. Coba lagi.",
        buttons: [
          {
            text: "OK",
            handler: () => {
              // Kode yang dijalankan saat tombol OK ditekan
              // Berikan nilai jika diperlukan
              console.log("Tombol OK ditekan");

              // Lakukan reload pada halaman
              window.location.reload();
            },
          },
        ],
      });

      await alert.present();

      throw error;
    }
  };

  // Logout
  const logout = async () => {
    try {
      await signOut(auth);
      await GoogleAuth.signOut();
      user.value = null;
      await router.push("/login");
      if (router.currentRoute.value.path === "/login") {
        // Refresh halaman jika sudah di /login
        window.location.reload();
      }
    } catch (error) {
      console.error("Sign-out error:", error);
      throw error;
    }
  };

  // Fungsi bawaan firebase/auth untuk menyimpan informasi autentikasi pengguna
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
  });

  return { user, isAuth, loginWithGoogle, logout };
});
