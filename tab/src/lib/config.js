const config = {
    initiateLoginEndpoint: "https://localhost:3000/auth-start.html",
    clientId: "e7aca8d0-9367-404e-9f88-29c9d1826cbf",
    apiEndpoint: process.env.REACT_APP_FUNC_ENDPOINT,
    scopes: [
        "https://graph.microsoft.com/User.Read",
        "https://graph.microsoft.com/Files.Read"
    ]
}

export default config;