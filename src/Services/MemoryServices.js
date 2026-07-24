import api from '../API/axios.js'

export const createScrapbook = async(formData) =>{
  const data = new FormData();

  data.append("title", formData.title);
  data.append("desc", formData.desc);
  data.append("theme", formData.theme);
  data.append("coverImg", formData.coverImg);
  data.append("isPublic", formData.isPublic);

  const response = await api.post(
    "/scrapbook/createscrap",
    data
  );
  return response
}

export const getScrapbooks = async()=>{
  const response = await api.get('/scrapbook/getscrapbook');
  return response;
}