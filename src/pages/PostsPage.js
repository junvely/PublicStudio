import { getPostsAxios } from "../api/posts";
import Post from "../components/Post";
import Footer from "../components/common/Footer";
import { StPostsCon } from "styles/Components";
import { ErrorMessage, StFlexCenter, StPositionSec } from "styles/GlobalStyles";
import { useQuery } from "react-query";

function PostsPage() {
	const { isLoading, isError, data } = useQuery("posts", getPostsAxios);

	return (
		<div>
			<StPositionSec>
				<StPostsCon>
					{data
						? data?.map((post) => {
								return <Post key={post.id} post={post} isActive={true}></Post>;
						  })
						: /* 에러 페이지 처리 */
						  (isLoading || isError) && (
								<StFlexCenter>
									<ErrorMessage>
										{isLoading
											? "🔵 Loading . . ."
											: "❗Error : 서버 Error발생으로 인하여 데이터를 가져올 수 없습니다."}
									</ErrorMessage>
								</StFlexCenter>
						  )}
				</StPostsCon>
			</StPositionSec>
			<Footer isActive={true}></Footer>
		</div>
	);
}

export default PostsPage;
