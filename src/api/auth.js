import axios from "axios";

const AxiosAuth = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// 회원가입 => 아이디 중복여부도 같이 확인
const signupAxios = async (payload) => {
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

// 로그인 => id 존재 여부 및 패스워드가 일치하는지 확인
const loginAxios = async (payload) => {
  try {
    // users 데이터를 가져와 id 존재여부 확인
    const { data } = await AxiosAuth.get("/users");
    const findId = data.find((user) => user.id == payload.id);

    // id 존재여부 확인, id 존재시 비밀번호 일치 여부 확인
    if (findId) {
      return findId.pw == payload.pw
        ? { isSuccess: true, accessToken: "" }
        : { isSuccess: false, message: "비밀번호가 일치하지 않습니다." };
    } else {
      return { isSuccess: false, message: "존재하지 않는 아이디 입니다." };
    }
  } catch (error) {
    throw error;
  }
};

export { signupAxios, loginAxios };
