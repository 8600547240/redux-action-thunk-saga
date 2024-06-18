import { ServerCall } from "../ServerCall/ServerCall";
import { appStore } from "../store/appStore";
export const userAction = () => {
  ServerCall.sendGetReq("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      appStore.dispatch({
        type: "USER_UPDATE",
        payload: res.data,
      });
    })
    .catch(() => {
      appStore.dispatch({
        type: "USER_UPDATE",
        payload: [],
      });
    });
};
