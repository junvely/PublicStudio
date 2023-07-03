import { getPostsAxios } from "../api/posts";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { StNewPostList, StNewPostsCon } from "styles/Components";
import { StFlexCon } from "styles/GlobalStyles";

function NewPostsList({ isActive }) {
	const { data } = useQuery("posts", getPostsAxios);
	// data가 할당되기 전 undefined일 경우 에러가 발생하지 않도록 핸들링
	if (!data) {
		return;
	}

	const postList = [...data].slice(0, 4);
	// Posts최신순으로 변경하고 싶을 경우
	// const newList = [...postList].reverse().slice(0, 4);

	return (
		<StNewPostsCon>
			{/* News active? */}
			{isActive ? (
				<StFlexCon>
					{postList?.map((post) => {
						return (
							<StNewPostList key={post.id}>
								<Link to={`/posts/${post.id}`}>'{post.title}'</Link>
							</StNewPostList>
						);
					})}
				</StFlexCon>
			) : (
				<p> Public Studio에서 당신의 감성을 공유해 보세요. </p>
			)}
		</StNewPostsCon>
	);
}

export default NewPostsList;
