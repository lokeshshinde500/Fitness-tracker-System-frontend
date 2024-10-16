import axios from "axios";

export default async function useLogin(data) {
  const response = await axios.post(
    "https://fitness-tracker-system-backend.onrender.com/api/auth/login",
    data
  );
  return response;
}
