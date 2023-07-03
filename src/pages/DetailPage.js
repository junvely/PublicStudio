import { getPostAxios } from "../api/posts";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AirBox from "../components/common/AirBox";
import Button from "../components/common/Button";
import Footer from "../components/common/Footer";
import Post from "../components/Post";
import { StButtonCon, StModifyCon } from "styles/Components";
import {
	ErrorMessage,
	StDetailCon,
	StFlexCenter,
	StFlexCon,
	StPositionSec,
} from "styles/GlobalStyles";
import ModifyPost from "../components/UpdatePost";
import { useQuery } from "react-query";

function DetailPage() {
	const [modalToggle, setModalToggle] = useState(false);

	const { id } = useParams();

	const { isLoading, isError, data } = useQuery(`/posts/post:${id}`, () =>
		getPostAxios(id),
	);

	const onClickModifyButton = () => {
		setModalToggle(!modalToggle);
	};

	return (
		<>
			{data ? (
				<>
					<StPositionSec position={true}>
						<StFlexCon padding="1% 0 1% 15%">
							{/* Post 가져오기*/}
							<Post post={data} width="30%" />
							<AirBox width="50px" />
							{/* 게시글 내용 */}
							<StDetailCon height="430px">
								<StModifyCon>
									<div>
										<span> Date : </span>
										<p>{data.date}</p>
									</div>
									<div>
										<span> User Name : </span>
										<p>{data.userName}</p>
									</div>
									<div>
										<span> Title : </span>
										<p>{data.title}</p>
									</div>
									<div>
										<span>Contents :</span>
										<p>{data.contents}</p>
									</div>
								</StModifyCon>
								{/* Modify버튼 */}
								<StButtonCon>
									<Button width="40%" onClick={onClickModifyButton}>
										Update
									</Button>
								</StButtonCon>
							</StDetailCon>
						</StFlexCon>
						{/* Modal */}
						{modalToggle && (
							<ModifyPost
								id={id}
								modalToggle={onClickModifyButton}
							></ModifyPost>
						)}
					</StPositionSec>
					<Footer />
				</>
			) : (
				/* 에러 페이지 처리 */
				(!data || isLoading || isError) && (
					<StFlexCenter>
						<ErrorMessage>
							{!data
								? "❗Not Found :해당하는 페이지 정보가 없습니다."
								: isLoading
								? "🔵 Loading . . ."
								: "❗Error : 서버 Error발생으로 인하여 데이터를 가져올 수 없습니다."}
						</ErrorMessage>
						<Footer />
					</StFlexCenter>
				)
			)}
		</>
	);
}

export default DetailPage;
