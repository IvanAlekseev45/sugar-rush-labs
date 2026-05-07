import axios from 'axios';

export const getBestsellers = async page => {
  const url = `https://deserts-store.b.goit.study/api`;

  const { data } = await axios.get(`${url}/desserts?type=popular`, {
    params: {
      page,
      limit: 3,
    },
  });

  return data;
};
