import React from "react";
import axios from "axios";

export default async function usePost(data) {
  const response = await axios.post(
    "https://fitness-tracker-system-backend.onrender.com/api/auth/register",
    data
  );
  return response;
}
