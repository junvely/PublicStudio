import { AxiosAuth } from "./instance";

// 회원가입 => 아이디 중복여부도 같이 확인
export const signupAxios = async (payload) => {
  try {
    // users 데이터를 가져와 id 중복여부 확인
    const { data } = await AxiosAuth.get("/users");
    const idDuplicate = data.find((user) => user.id == payload.id);
    // id 중복여부에 따라 회원가입 성공, 실패 결과값 전달
    if (idDuplicate) {
      return { isSuccess: false };
    } else {
      await AxiosAuth.post("/users", payload);
      return { isSuccess: true };
    }
  } catch (error) {
    throw error;
  }
};
