import { cookie } from "./cookie";
import { AxiosAuth } from "./instance";

// 로그인 => id 존재 여부 및 패스워드가 일치하는지 확인
export const loginAxios = async (payload) => {
  try {
    // users 데이터를 가져와 id 존재여부 확인
    const { data } = await AxiosAuth.get("/users");
    const findId = data.find((user) => user.id == payload.id);

    // id 존재여부 확인, id 존재시 비밀번호 일치 여부 확인
    if (findId) {
      if (findId.pw == payload.pw) {
        cookie.set("accessToken", "token");
        return { isSuccess: true, accessToken: "" };
      } else {
        return { isSuccess: false, message: "비밀번호가 일치하지 않습니다." };
      }
    } else {
      return { isSuccess: false, message: "존재하지 않는 아이디 입니다." };
    }
  } catch (error) {
    throw error;
  }
};
