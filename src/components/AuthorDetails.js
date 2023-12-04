import { useFetchAuthorQuery } from "../store";

function AuthorDetails({ userId }) {
  const { data, isFetching, error } = useFetchAuthorQuery(userId);

  if (error) {
    return <div>Error occured when fetching author data</div>;
  }
  if (isFetching) {
    return <div>Loading details about user...</div>;
  }
  return <div>Author:{data.name}</div>;
}

export default AuthorDetails;
