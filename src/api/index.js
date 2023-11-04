import axios from "@/api/request";

export const getHotLists = (type, isNew) => {
  return axios({
    method: "GET",
    url: `/${type}${isNew ? "/new" : "/"}`,
  });
};
