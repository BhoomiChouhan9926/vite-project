import api from '../API/axios.js'
export const createLetter = async (scrapId, data) => {
   const response =await api.post(`letter/createletter/${scrapId}`,data)
   return response
}

export const getLetter = async (scrapId) => {
   const response = await api.get(`letter/getletter/${scrapId}`);
   return response;
}

export const updateLetter = async (letterId, data) => {
   const response = await api.post(`letter/updateletter/${letterId}`,data)
   return response ;
}

export const deleteLetter = async (letterId) => {
   const response = await api.delete(`letter/deleteletter/${letterId}`)
   return response;

}