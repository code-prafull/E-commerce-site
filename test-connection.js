const axios = require('axios');

async function testConnection() {
    console.log("Testing connection to backend server...");
    
    try {
        console.log("Testing health endpoint...");
        const healthResponse = await axios.get('http://localhost:8000/health', { timeout: 5000 });
        console.log("Health check successful:", healthResponse.data);
    } catch (error) {
        console.log("Health check failed:", error.message);
        if (error.code === 'ECONNREFUSED') {
            console.log("Connection refused - server may not be running");
        } else if (error.code === 'ENOTFOUND') {
            console.log("Host not found - check if localhost resolves correctly");
        }
    }
    
    try {
        console.log("Testing auth ping endpoint...");
        const pingResponse = await axios.get('http://localhost:8000/api/auth/ping', { timeout: 5000 });
        console.log("Ping check successful:", pingResponse.data);
    } catch (error) {
        console.log("Ping check failed:", error.message);
    }
}

testConnection();