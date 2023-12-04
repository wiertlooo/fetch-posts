import { useFetchAuthorQuery } from "../store";

function AuthorDetails({ userId }) {
  const { data, isFetching, error } = useFetchAuthorQuery(userId);

  if (error) {
    return <div>Error occured when fetching author data</div>;
  }
  if (isFetching) {
    return <div>Loading details about user...</div>;
  }
  return <h2 className="py-2 px-2">Author: {data.name}</h2>;
}

export default AuthorDetails;
