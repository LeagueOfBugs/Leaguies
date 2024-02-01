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
    return JSON.parse(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default resetPasswordAPI;
