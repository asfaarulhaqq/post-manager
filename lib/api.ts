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
// pages/index.tsx or pages/api/some-api.ts
import db from '../lib/db';

const handler = async (req, res) => {
  try {
    const result = await db.any('SELECT * FROM your_table');
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
