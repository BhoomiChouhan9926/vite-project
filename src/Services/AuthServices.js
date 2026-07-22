import api from '../API/axios.js'


export const login = async (userData) =>{
   const response = await api.post("/auth/login", userData);
  return response.data;
}


export const register = async(userData)=>{
     const response = await api.post('/auth/register',userData)
     return response.data
}

export const logout = async (userData)=>{
    const response = await api.post("/auth/logout");
  return response.data;
}

export const getMe = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};