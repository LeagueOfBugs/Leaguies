import axios from 'axios';

const FORGET_ENDPOINT =
  'https://bcvrht92wl.execute-api.us-east-2.amazonaws.com/Alpha/forget';

const resetPasswordAPI = async (
  username: string,
  password?: string,
  verification?: string,
) => {
  try {
    const response = await axios.post(FORGET_ENDPOINT, {
      username,
      password,
      verification,
    });
    if (response.data.statusCode === 200) {
      return response.data;
    } else {
      throw new Error('something went wrong');
    }
  } catch (error) {
    console.log(error);
  }
};

export default resetPasswordAPI;
