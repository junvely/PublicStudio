import axios from "axios";

const AxiosAuth = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// 회원가입
const signupAxios = async (payload) => {
  try {
    // users 데이터를 가져와 아이디 중복 여부 확인
    const { data } = await AxiosAuth.get("/users");
    const idDuplicate = data.find((user) => user.id == payload.id);
    // 중복 여부에 따라 회원가입 성공, 실패 결과값 전달
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

// 로그인
const loginAxios = async (payload) => {};
export { signupAxios, loginAxios };
