import { Link } from "react-router-dom";
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
  const initialState = {
    id: "",
    password: "",
  };

  const [inputs, handleInputChange] = useInputs(initialState);

  const handleSubmitForm = (e) => {
    if (!inputs.id || !inputs.password) {
      alert("아이디와 비밀번호를 모두 입력해 주세요");
      return;
    }
    alert("로그인 성공");
    // 데이터 통신 로직
  };

  return (
    <>
      <StFormCon>
        <StModifyCon>
          <StLoginTitle>LOGIN</StLoginTitle>
          <LabelInput name="id" value={inputs.id} onChange={handleInputChange}>
            ID
          </LabelInput>
          <LabelInput
            name="password"
            value={inputs.password}
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
