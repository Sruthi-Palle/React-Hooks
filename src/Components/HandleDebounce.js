import { useEffect, useState } from "react";
import { Users } from "../utils";
import { UseDebounce } from "../CustomHooks/UseDebounce";

export const HandleDebounce = () => {
  const [users, setUsers] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [loading, setLoading] = useState(false);
  const debounceValue = UseDebounce(inputVal);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      let userlist = await fetchUsers(debounceValue);
      setUsers(userlist);
      setLoading(false);
    };
    loadUsers();
  }, [debounceValue]);
  const fetchUsers = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return Users.filter((item) =>
      item.name.toLowerCase().includes(inputVal.toLowerCase().trim())
    );
  };
  // console.log(users);
  // console.log(debounceValue);

  return (
    <>
      <input
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
      {loading ? (
        <div>Loading...</div>
      ) : users.length > 0 ? (
        <ul>
          {users.map((item) => (
            <li style={{ listStyleType: "none" }}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <div>No data found ...</div>
      )}
    </>
  );
};
