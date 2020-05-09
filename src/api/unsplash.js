import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID ry4JibrweupUFQfbKWAIf9MNvR3hwyclr_v_OU4L6t4"
      }
})