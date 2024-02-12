import React, {useEffect} from 'react';
import useWebSocket, {ReadyState} from 'react-native-use-websocket';

const user = {
  id: '617b7510-e061-70d0-1a9c-ae135d4e4dcc',
  wsId: '12345wdqwdqwdqwdqwdqwdqwd',
};
// controll the route/lambda you want with action param
const action = {
  action: '$connect',
  user: user,
};
const action2 = {
  action: 'test',
  user: user,
};
const WebSocketComponent = () => {
  const {readyState, sendMessage} = useWebSocket(
    'wss://uuuwibeb89.execute-api.us-east-2.amazonaws.com/Alpha/',
  );
  console.log('readyState', readyState);
  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      sendMessage(JSON.stringify(action));
      sendMessage(JSON.stringify(action2));

      console.log('WebSocket connected');
    }
  }, [readyState, sendMessage]);

  return null;
};

export default WebSocketComponent;
