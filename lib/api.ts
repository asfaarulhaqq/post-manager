// api.ts

// import axios from 'axios';

// const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// export const getPost = async () => {
//     try {
//         const response = await axios.get(`${API_BASE_URL}/posts`);
//         return response.data;
//         console.log(response.data)
//     } catch (error) {
//         throw new Error('Error fetching posts');
//     }
// };
// export const getPostById = async (id: number) => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/posts/1`);
//       return response.data[0];
//     } catch (error) {
//       throw new Error('Error fetching post');
//     }
//   };