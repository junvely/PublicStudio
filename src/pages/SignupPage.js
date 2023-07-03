import { signupAxios } from "../api/auth/register";
import React, { useMemo } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import LabelInput from "../components/LabelInput";
import AirBox from "../components/common/AirBox";
import Button from "../components/common/Button";
import { useInputs } from "../hooks/useInputs";
import {
	StButtonCon,
	StFormCon,
	StLoginTitle,
	StSignupCon,
} from "styles/Components";

function SignupPage() {
	const navigate = useNavigate();
	const mutation = useMutation(signupAxios, {
		onSuccess: (result) => {
			if (result.isSuccess) {
				alert("회원가입이 완료되었습니다.");
				resetForm();
				navigate("/account/login");
			} else {
				alert("중복되는 아이디가 존재합니다.");
			}
		},
		onError: () => {
			alert("Error : 서버 에러 발생");
		},
	});

	const initialState = {
		userName: "",
		id: "",
		pw: "",
		pwCheck: "",
	};

	const [userInfo, handleInputChange, resetForm] = useInputs(initialState);

	const idMessage = useMemo(() => {
		if ((userInfo.id && userInfo.id.length < 5) || userInfo.id.length >= 10) {
			return "ID는 5글자 이상 10글자 이하 입니다.";
		} else {
			return "";
		}
	}, [userInfo.id]);

	const pwMessage = useMemo(() => {
		if (userInfo.pw && userInfo.pw.length < 5) {
			return "PW는 5글자 이상입니다.";
		} else {
			return "";
		}
	}, [userInfo.pw]);

	const pwCheckMessage = useMemo(() => {
		if (userInfo.pw !== userInfo.pwCheck) {
			return "PW가 일치하지 않습니다.";
		} else {
			return "";
		}
	}, [userInfo.pwCheck]);

	const validation = () => {
		if (
			!userInfo.userName ||
			!userInfo.id ||
			!userInfo.pw ||
			!userInfo.pwCheck
		) {
			alert("입력란을 모두 입력해 주세요");
			return false;
		} else if (idMessage || pwMessage || pwCheckMessage) {
			return false;
		}
		return true;
	};

	const handleClickSubmitForm = (e) => {
		if (validation()) {
			mutation.mutate({
				// 서버에 유저정보 전송
				userName: userInfo.userName,
				id: userInfo.id,
				pw: userInfo.pw,
			});
		}
	};

	return (
		<>
			<StFormCon>
				<StSignupCon>
					<StLoginTitle>SIGNUP</StLoginTitle>
					<LabelInput
						name="userName"
						value={userInfo.userName}
						onChange={handleInputChange}
					>
						UserName
					</LabelInput>
					<LabelInput
						name="id"
						value={userInfo.id}
						onChange={handleInputChange}
						message={idMessage}
					>
						ID
					</LabelInput>
					<LabelInput
						type="password"
						name="pw"
						value={userInfo.pw}
						onChange={handleInputChange}
						message={pwMessage}
					>
						PW
					</LabelInput>
					<LabelInput
						type="password"
						name="pwCheck"
						value={userInfo.pwCheck}
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
