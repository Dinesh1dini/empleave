import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2Y2MjYyNjUxZmRlNzJlMGRkMzY0NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NzMxMjQ3MCwiZXhwIjoxNjg3NTcxNjcwfQ.qMW6VNc8HxReA8Sn9uOkxwbtLlNwk3XhSExKXMNe87g";

export const publicRequest = axios.create({
        baseURL:BASE_URL,
})



export const userRequest = axios.create({      
  baseURL:BASE_URL,
  header:{token:`Bearer ${TOKEN}`},
  
})

