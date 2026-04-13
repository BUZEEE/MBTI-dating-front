import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
})

api.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem(import.meta.env.VITE_TOKEN_NAME);
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    function (error) {

        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    function (response) {
        if (response.data) {
            return response.data;
        }
        return response;
    },
    function (error) {
        const { response, config } = error;

        if (import.meta.env.DEV) {
            console.group(`[API Error] ${config?.method?.toUpperCase()} ${config?.url}`);
            console.log("Status:", response?.status);
            console.log("Message:", response?.data?.message || error.message);
            console.log("Debug Info:", response?.data);
            console.groupEnd();
        }

        if (response) {
            switch (response.status) {
                case 401:
                    localStorage.removeItem(import.meta.env.VITE_TOKEN_NAME);
                    window.location.href = '/login';
                    break;
                case 403:
                    alert("해당 기능에 대한 권한이 없습니다.");
                    break;
                case 500:
                    alert("서버가 폭발했습니다. 백엔드 개발자에게 알리세요!");
                    break;
            }
        } else {
            alert("서버와 통신할 수 없습니다. 네트워크 연결을 확인하세요.");
        }

        return Promise.reject(error);
    }
)

export default api;