import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/constants";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials:"include"
});

async function fetchBaseQueryWithAuth(args, api, extra) {
  const result = await baseQuery(args, api, extra);
  if (result.error && result.error.status === 401) {
    // write logic for logout to logut user
  }
  return result;
}

export const apiSlice = createApi({
  baseQuery: fetchBaseQueryWithAuth,
  tagTypes: ["User", "Post"],
  endpoints: (builder) => ({}),
});
