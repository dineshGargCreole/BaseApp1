import axios from 'axios';


export default {

    getUsers: async () => {
        let users = await axios.get('https://www.mecallapi.com/api/users')
        return users.data || [];
    }
}