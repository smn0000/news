require('dotenv').config()
const axios = require('axios')


exports.handler = async (event, context) =>{
    try{
        const {data} = await axios.get(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.API_KEY}`)

        return{
            statusCode:200,
            body: JSON.stringify(data),
        }

    }
    catch(error){

        return{
            statusCode: 400,
            body: JSON.stringify({message: 'Error'})
        }
    }
    


}