import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Profile = () => {
  const { data, error, isLoading } = useSWR(
    "https://sum-server.100xdevs.com/todos",
    fetcher
  );

  if (error) return <div>Failed to load</div>;

  if (isLoading) return <div>Loading...</div>;

  return <div>Hello, you have {data.todos.length} todos!</div>;
};

export default Profile;
