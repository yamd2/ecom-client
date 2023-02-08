import axios from 'axios'

const rootUrl = "http://localhost:8000/api/v1"
const adminApi = rootUrl + "/admin/register":



const postNewAdmin = async(data) => {
  try {
    const res = await  axios.post (adminApi, data)
  }catch (error) {
    return {
      status: "error",
      message: error.message,
    }

  }

}