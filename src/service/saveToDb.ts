import axios from 'axios';

const Dynamo_DB_ENDPOINT =
  'https://7tb5t3jpk7.execute-api.us-east-2.amazonaws.com/Alpha/dbActions';

const storeInDb = async (
  eventName: string,
  tableName: string,
  model: User | Team | League,
  iT: string,
) => {
  try {
    const response = await axios.post(
      Dynamo_DB_ENDPOINT,
      {
        eventName,
        tableName,
        model: model,
      },
      {
        headers: {
          Authorization: iT,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default storeInDb;
