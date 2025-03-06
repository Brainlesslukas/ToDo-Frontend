import axios from 'axios';

export async function checkAuth() {

    const apiUrl = process.env.VUE_APP_API_DOMAIN

    const token = localStorage.getItem("jwtToken");
    if (!token) {
        console.log("Kein Token gefunden");
        return false;
    }

    try {
        const response = await axios.get(`${apiUrl}/auth/validate`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data.valid ? response.data.user : false;
    } catch (error) {
        console.error("Fehler bei der Tokenvalidierung:", error);
        return false;
    }
}