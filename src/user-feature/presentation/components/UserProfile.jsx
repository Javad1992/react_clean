import { useQuery } from "react-query";
import AsyncValueComponent from "../../../shared/components/AsyncValueComponent";
import getUserProfile from "../../application/user-service";
// import UserController from "../controllers/UserController";

const UserProfile = () => {

  const userProfileQuery = useQuery(['user-profile'], getUserProfile)

    return (
      <div>
        <AsyncValueComponent state={userProfileQuery}>
          {(data) => {
          return (<div className="bg-red">{data?.name}</div>)
          }}
        </AsyncValueComponent>
      </div>
    );
  };
  
  export default UserProfile;