import axios from 'axios';

const getDessertsById = async id => {
  const url = `https://deserts-store.b.goit.study/api`;

  const { data } = await axios.get(`${url}/desserts?category=${id}`, {
    params: {
      page: 1,
      limit: 8,
    },
  });

  return data;
};

export default getDessertsById;
