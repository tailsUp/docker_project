import axios from 'axios'
const prodURL = 'https://cicd-repo.onrender.com/:3001/api/login'
const devURL = 'https://cicd-repo.onrender.com/api/login'

const login = async credentials => {
  console.log('loginService: ', credentials)
  if(process.env.NODE_ENV === 'development')
  {
    console.log('YMPÄRISTÖNÄ DEVELOPMENT')
    const response = await axios.post(devURL, credentials).catch(error => {
      console.log('Error in logging in. ' ,error)
    })
    return response.data
  }
  else
  {
    console.log('YMPÄRISTÖNÄ TUOTANTO')
    const response = await axios.post(prodURL, credentials).catch(error => {
      console.log('Error in logging in. ' ,error)
    })
    return response.data
  }
}

export default { login }