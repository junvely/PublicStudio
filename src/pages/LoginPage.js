import { loginAxios } from "api/auth";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import LabelInput from "redux/components/LabelInput";
import AirBox from "redux/components/common/AirBox";
import Button from "redux/components/common/Button";
import { useInputs } from "redux/hooks/useInputs";
import {
  StButtonCon,
  StFormCon,
  StGotoSignup,
  StLoginTitle,
  StModifyCon,
} from "styles/Components";

function LoginPage() {
  const navigate = useNavigate();
  const mutation = useMutation(loginAxios, {
    onSuccess: (result) => {
      if (result.isSuccess) {
        // 토큰 저장
        alert("로그인 성공");
        resetForm();
        navigate("/");
      } else {
        alert(result.message);
      }
    },
  });

  const initialState = {
    id: "",
    pw: "",
  };

  const [userAuth, handleInputChange, resetForm] = useInputs(initialState);

  const handleSubmitForm = (e) => {
    if (!userAuth.id || !userAuth.pw) {
      alert("아이디와 비밀번호를 모두 입력해 주세요");
      return;
    }
    mutation.mutate(userAuth); // 서버에 로그인 요청
  };

  return (
    <>
      <StFormCon>
        <StModifyCon>
          <StLoginTitle>LOGIN</StLoginTitle>
          <LabelInput
            name="id"
            value={userAuth.id}
            onChange={handleInputChange}
          >
            ID
          </LabelInput>
          <LabelInput
            name="pw"
            value={userAuth.pw}
            onChange={handleInputChange}
          >
            PW
          </LabelInput>
        </StModifyCon>
        <AirBox height="10px"></AirBox>
        <StGotoSignup>
          <Link to="/account/signup"> Go to Signup</Link>
        </StGotoSignup>
        <StButtonCon>
          <Button onClick={handleSubmitForm}>Login</Button>
        </StButtonCon>
      </StFormCon>
    </>
  );
}

export default LoginPage;
