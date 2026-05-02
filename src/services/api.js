const BASE_URL = "https://backend.azeemshah.com/api";

// 🔹 Normalize data (main magic)
const normalizeData = (res) => {
  if (res?.data?.data) return res.data.data;
  if (res?.data?.about) return [res.data.about]; 
  if (res?.data) return res.data;
  return res;
};


// 🔹 Handle error nicely
const handleError = async (res) => {
  let message = "Something went wrong";

  try {
    const errorData = await res.json();
    message = errorData?.message || message;
  } catch (e) {
     console.error("Error parsing error response:", e);
  }

  throw new Error(message);
};

// 🔹 Main fetch function
export const fetchData = async (endpoint, options = {}) => {
  const { method = "GET", body, headers = {}, raw = false } = options;

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    await handleError(res);
  }

  const json = await res.json();

  return raw ? json : normalizeData(json);
};


export const getHomeData = () => fetchData("/hero-section-data");
export const getPortfolioData = () => fetchData("/service-data");
export const getExpertiseData = () => fetchData("/expertise-data");
export const getAwardsAchievements = () => fetchData("/award-data");
export const getReviewData = () => fetchData("/review-data");
export const getAboutData = () => fetchData("/about-data");



