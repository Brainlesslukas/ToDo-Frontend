import { defineStore } from "pinia";
import axiosInstance from "@/utils/axiosInstance";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        isAuthenticated: false,
        username: null,
        profilePicture: null,
        errorMessage: "",
        responseMessage: "",
        isLoading: false,
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
                    headers: { Authorization: `Bearer ${token}` },
                });

                const profilePictureResponse = await axiosInstance.get(`${apiUrl}/profile-picture`, {
                    responseType: "blob",
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
            this.errorMessage = "";
            this.responseMessage = "";
            this.isLoading = true;

            try {
                const apiUrl = process.env.VUE_APP_API_DOMAIN;
                const response = await axios.post(`${apiUrl}/auth/login`, credentials);

                if (response.data.token) {
                    localStorage.setItem("jwtToken", response.data.token);
                    this.responseMessage = "Successfully logged in!";
                    await this.checkAuth();
                } else {
                    this.errorMessage = "Login failed. No token received.";
                }
            } catch (error) {
                console.error("Login error:", error);
                this.errorMessage = error.response?.data?.message || "An unexpected error occurred during login.";
            } finally {
                this.isLoading = false;
            }
        },

        async signUp(credentials) {
            this.errorMessage = "";
            this.responseMessage = "";
            this.isLoading = true;

            try {
                const apiUrl = process.env.VUE_APP_API_DOMAIN;
                const response = await axios.post(`${apiUrl}/auth/signup`, credentials);

                localStorage.setItem("jwtToken", response.data.token);
                this.responseMessage = "Successfully registered!";

            } catch (error) {
                console.error("Registration error:", error);

                if (error.response) {
                    this.errorMessage = error.response.data?.message || "Registration failed.";
                } else {
                    this.errorMessage = "An unexpected error occurred during registration.";
                }
            } finally {
                this.isLoading = false;
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