import { defineStore } from "pinia";
import axiosInstance from "@/utils/axiosInstance";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        isAuthenticated: false,
        username: null,
        profilePicture: null,
    }),
    actions: {
        async checkAuth() {
            const token = localStorage.getItem("jwtToken");
            if (!token) {
                this.isAuthenticated = false;
                return;
            }

            try {
                const apiUrl = process.env.VUE_APP_API_DOMAIN;
                const response = await axiosInstance.get(`${apiUrl}/profil`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                const profilePictureResponse = await axiosInstance.get(`${apiUrl}/profile-picture`, {
                    responseType: 'blob'
                });
                this.profilePicture = URL.createObjectURL(profilePictureResponse.data);

                this.isAuthenticated = true;
                this.username = response.data.name;
            } catch (error) {
                this.isAuthenticated = false;
                console.error("Fehler beim Abrufen der API-Daten:", error);
            }
        },

        async login(credentials) {
            try {
                const apiUrl = process.env.VUE_APP_API_DOMAIN;
                const response = await axiosInstance.post(`${apiUrl}/auth/login`, credentials);

                localStorage.setItem("jwtToken", response.data.token);
                this.isAuthenticated = true;
                this.username = response.data.user.name;
                this.profilePicture = response.data.user.profilePicture;
            } catch (error) {
                console.error("Fehler beim Login:", error);
                this.isAuthenticated = false;
            }
        },

        async uploadProfilePicture(file) {
            const formData = new FormData();
            formData.append("file", file);

            try {
                const apiUrl = process.env.VUE_APP_API_DOMAIN;
                await axiosInstance.post(`${apiUrl}/profile-picture/upload`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                this.profilePicture = URL.createObjectURL(file);
            } catch (error) {
                console.error("Fehler beim Hochladen des Bildes:", error);
            }
        },
    },
});
