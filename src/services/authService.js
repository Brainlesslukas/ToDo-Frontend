import axios from 'axios';

export async function checkAuth() {
    const token = localStorage.getItem("authToken");
    if (!token) {
        console.log("Kein Token gefunden");
        return false;
    }

    try {
        const response = await axios.get("https://api.brainlesslukas.xyz/auth/validate", {
            headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Token validiert:", response.data);
        return response.data.valid ? response.data.user : false;
    } catch (error) {
        console.error("Fehler bei der Tokenvalidierung:", error);
        return false;
    }
}
