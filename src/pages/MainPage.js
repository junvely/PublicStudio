import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/common/Footer";
import { StMainTitle, StPosts } from "styles/Components";
import { StFlexCon, StInnerCon, StPositionSec } from "styles/GlobalStyles";

function MainPage() {
	const navigate = useNavigate();
	return (
		<>
			<StPositionSec>
				<StInnerCon padding="5% 13%">
					<StMainTitle>What's your Choice?</StMainTitle>
					<StPosts>
						<StFlexCon>
							<li
								onClick={() => {
									navigate("/posts");
								}}
							>
								<p>Studio</p>
							</li>
							<li
								onClick={() => {
									navigate("/form");
								}}
							>
								<p>Posting</p>
							</li>
						</StFlexCon>
					</StPosts>
				</StInnerCon>
				<Footer isActive={false}></Footer>
			</StPositionSec>
		</>
	);
}

export default MainPage;
