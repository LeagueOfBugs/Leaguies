import axios from 'axios';

const REGISTER_USER_ENDPOINT =
  'https://bcvrht92wl.execute-api.us-east-2.amazonaws.com/Alpha/register';

const registerUserAPI = async (username, email, password) => {
  try {
    const response = await axios.post(REGISTER_USER_ENDPOINT, {
      username,
      email,
      password,
    });
    console.log(response);
    if (response.data.statusCode === 200) {
      return 'user registered';
    } else {
      throw new Error('Somethig went wrong');
    }
  } catch (error) {
    console.log(error);
  }
};

export default registerUserAPI;
