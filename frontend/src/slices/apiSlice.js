import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_URL } from "@/constants/constants";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

async function fetchBaseQueryWithAuth(args, api, extra) {
  const result = await baseQuery(args, api, extra);
  return result;
}

export const apiSlice = createApi({
  baseQuery: fetchBaseQueryWithAuth,
  tagTypes: ["User", "Post"],
  endpoints: (builder) => ({}),
});
