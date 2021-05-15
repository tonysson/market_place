import axios from 'axios'

/**
 * @param {user} user 
 * @returns a registered user
 */
export const register = async (user) => (await axios.post(`/api/register` , user))


/**
 * @param {user} user 
 * @returns a loggin user
 */
export const login = async (user) => (await axios.post(`/api/login` , user))
