import api from "../API/axios";


const createMemory =async (scrapbookId , data)=>{
    const response = await api.post(`memory/${scrapbookId}`,data)
    return response ;

}