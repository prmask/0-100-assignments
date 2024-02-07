import { useEffect, useState } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const debouncedValue = useDebounceHook(filter, 1);

  useEffect(() => {
    setLoading(true);

    const token = localStorage.getItem("token");

    if (token) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios
        .get(
          `http://localhost:3000/api/v1/user/search?filter=` + debouncedValue,
          config
        )
        .then((response) => {
          setUsers(response.data.user);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching users: ", error));
    }
  }, [debouncedValue]);

  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
      <div>
        {loading === false &&
          users.map((user, index) => <User key={index} user={user} />)}
      </div>
    </>
  );
};

const User = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full">
        <Button
          onClick={() => {
            navigate(`/send?id=${user._id}&name=${user.firstName}`);
          }}
          label={"Send Money"}
        />
      </div>
    </div>
  );
};

const useDebounceHook = (value, n) => {
  const [retVal, setRetVal] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setRetVal(value);
    }, n * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [n, value]);

  return retVal;
};
