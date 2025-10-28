import { axiosInstance } from "./axios";

export const signup = async (SignUpData) => {
  // console.log(SignUpData)
  const response = await axiosInstance.post("/auth/signup", SignUpData);
  return response.data;
};

export const getAuthUser = async () => {
  const res = await axiosInstance.get("/auth/me");
//   console.log(res.data);
  return res.data;
};
export const completeOnboarding = async (userData) => {
  const res = await axiosInstance.post("/auth/onboarding", userData);
//   console.log(res.data);
  return res.data;
};
