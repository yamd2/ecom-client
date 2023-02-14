import { toast } from "react-toastify";
import { loginAdmin } from "../../helper/axios";
import { requestPending, requestSuccess } from "./authSlice";

export const loginAction = (FormData) => async (dispatch) => {
  try {
    dispatch(requestPending());
    console.log(FormData);

    //call axios-helper / api
    const pendingResp = loginAdmin(FormData);

    toast.promise(pendingResp, { pending: "Please wait!" });

    const { status, message, user } = await pendingResp;
    toast[status](message);

    status === "success"
      ? dispatch(requestSuccess(user))
      : dispatch(requestSuccess({}));
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
