import Api from "./Api";

const fetchApk = async () => {
  const response = await Api.get("api/apk").catch((error) => {
    throw error;
  });
  return response.data.data;
};

export default fetchApk;
