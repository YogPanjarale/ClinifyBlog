import { gql } from "@apollo/client";
import { useEffect } from "react";
import client from "../src/apllo-client";
export interface AllPost {
	id: string;
	title: string;
	category: string;
	content: string;
	author: Author;
}

export interface Author {
	id: string;
	name: string;
}

export default function Test({ posts }: { posts: AllPost[] }) {
	useEffect(() => {
		console.log(posts);
	});
	// const data = posts[1];
	return posts.map( data=>(

		<div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
			<div>
    <h2 className="text-gray-800 text-3xl font-semibold">{data.title}</h2>
    <p className="mt-2 text-gray-600">{data.content}!</p>
  </div>
  <div className="flex justify-end mt-4">
    <a href="#" className="text-xl font-medium text-indigo-500">{data.author.name}</a>
  </div>
		</div>
	));
}

export async function getStaticProps() {
	const { data } = await client.query({
		query: gql`
			# Getting All Post
			{
				allPosts {
					id
					title
					# backgroundlink
					category
					# slug
					content
					author {
						id
						name
						# picture
					}
				}
			}
		`,
	});

	return {
		props: {
			posts: data.allPosts,
		},
	};
}
