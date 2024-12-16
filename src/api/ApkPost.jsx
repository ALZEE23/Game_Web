import Api from "./Api";
import Cookies from "js-cookie";

export const postApk = async (
  name,
  cover,
  title,
  description,
  game,
  footage
) => {
  try {
    const token = Cookies.get("token");
    const headers = {
      Accept: "application/json",
      Authorization: `${token}`,
      "Content-Type": "multipart/form-data",
    };

    const formData = new FormData();
    formData.append("name", name);
    formData.append("cover", cover);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("game", game);
    formData.append("footage", footage);

    const response = await Api.post("api/secured/apk", formData, { headers });

    return response;
  } catch (error) {
    console.error(error.response);
    throw error;
  }
};
