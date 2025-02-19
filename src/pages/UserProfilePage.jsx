import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../slices/userSlice";

const UserProfilePage = () => {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state)=> state.user);

    useEffect(() => {
      dispatch(fetchUser());
    }, [dispatch]);

    //
    if(loading) return <p>Loading data...</p>
    if(error) return <p>error</p>;
    if(!data) return null;
  return (
    <div>
      <h2>User Profile</h2>
      <img src={data.picture.large} alt="User Avatar" />
      <p>
        name: {data.name.first} {data.name.first}
      </p>
      <p>Email: {data.email}</p>
    </div>
  );
}

export default UserProfilePage