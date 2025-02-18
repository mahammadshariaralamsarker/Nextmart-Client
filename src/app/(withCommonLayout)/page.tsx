 'use client'

import { useUser } from "@/context/UserContext";

const HomePage =  () => {
 const user =  useUser();
 console.log(user);
  return <div>this is home project</div>;
};

export default HomePage;
