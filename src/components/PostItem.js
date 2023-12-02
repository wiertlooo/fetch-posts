import { useFetchAuthorQuery } from "../store";

function PostItem({ post }) {
  const { data, error, isFetching } = useFetchAuthorQuery(post.userId);
  return (
    <div>
      <div>{data && data.name}</div>
      <div>{post.title}</div>
    </div>
  );
}
export default PostItem;
