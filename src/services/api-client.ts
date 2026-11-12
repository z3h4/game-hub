import axios from "axios";

// Rawg
// export default axios.create({
//   baseURL: "https://api.rawg.io/api",
//   timeout: 5000,
//   params: {
//     key: import.meta.env.VITE_RAWG_API_KEY,
//   },
// });

// Rails
export default axios.create({
  baseURL: "api", // proxied to Rails by Vite in dev
  timeout: 5000,
});
