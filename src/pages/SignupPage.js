import React, { useMemo } from "react";
import LabelInput from "redux/components/LabelInput";
import AirBox from "redux/components/common/AirBox";
import Button from "redux/components/common/Button";
import { useInputs } from "redux/hooks/useInputs";
import {
  StButtonCon,
  StFormCon,
  StLoginTitle,
  StSignupCon,
} from "styles/Components";

function SignupPage() {
  const initialState = {
    userName: "",
    id: "",
    pw: "",
    pwCheck: "",
  };

  const [inputs, handleInputChange, resetForm] = useInputs(initialState);

  const idMessage = useMemo(() => {
    if ((inputs.id && inputs.id.length < 5) || inputs.id.length >= 10) {
      return "ID는 5글자 이상 10글자 이하 입니다.";
    } else {
      return "";
    }
  }, [inputs.id]);

  const pwMessage = useMemo(() => {
    if (inputs.pw && inputs.pw.length < 5) {
      return "PW는 5글자 이상입니다.";
    } else {
      return "";
    }
  }, [inputs.pw]);

  const pwCheckMessage = useMemo(() => {
    if (inputs.pw !== inputs.pwCheck) {
      return "PW가 일치하지 않습니다.";
    } else {
      return "";
    }
  }, [inputs.pwCheck]);

  const validation = () => {
    if (!inputs.userName || !inputs.id || !inputs.pw || !inputs.pwCheck) {
      alert("입력란을 모두 입력해 주세요");
      return false;
    } else if (idMessage || pwMessage || pwCheckMessage) {
      return false;
    }
    alert("로그인 성공");
    resetForm();
    return true;
  };

  const handleClickSubmitForm = (e) => {
    if (validation()) {
      console.log("로그인 성공");
      // 데이터 통신 로직
    }
  };

  return (
    <>
      <StFormCon>
        <StSignupCon>
          <StLoginTitle>SIGNUP</StLoginTitle>
          <LabelInput
            name="userName"
            value={inputs.userName}
            onChange={handleInputChange}
          >
            UserName
          </LabelInput>
          <LabelInput
            name="id"
            value={inputs.id}
            onChange={handleInputChange}
            message={idMessage}
          >
            ID
          </LabelInput>
          <LabelInput
            type="password"
            name="pw"
            value={inputs.pw}
            onChange={handleInputChange}
            message={pwMessage}
          >
            PW
          </LabelInput>
          <LabelInput
            type="password"
            name="pwCheck"
            value={inputs.pwCheck}
            onChange={handleInputChange}
            message={pwCheckMessage}
          >
            PW Check
          </LabelInput>
        </StSignupCon>
        <AirBox height="10px"></AirBox>
        <StButtonCon>
          <Button onClick={handleClickSubmitForm}>SIGNUP</Button>
        </StButtonCon>
      </StFormCon>
    </>
  );
}

export default SignupPage;
