import axios from "axios";

const api = axios.create({ //api externa que precisa de autenticação
    baseURL: "https://io.adafruit.com/api/v2/MariaClaraOliveira08/feeds",
    headers:{ //aqui no headers fizemos a autenticação
        accept: "application/json",
        "Content-Type" : "application/json",
        //sintaxe da api da adafruit
        "X-AIO-Key":""
    },
});

const sheets = {
    toggleLED: (stateLED) => api.post("botaoled/data", stateLED)
}

export default sheets;