import axios from "axios";
//import useAuthStore from "../stores/auth"

const api = axios.create({ baseURL: "http://localhost:8000" });

//api.interceptors.request.use(()=>{
//    const { token } = useAuthStore.getState();
//})

export default api;