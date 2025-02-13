import { getCurrentUser } from "@/services/AuthService";

const HomePage = async () => {
  const user =await getCurrentUser();
  console.log(user);
  return <div>this is home project</div>;
};

export default HomePage;
