import React from "react";

async function apiCall({ url, method = "get", body, headers }) {
  try {
    //method, body i headers són opcionals.
    const response = await fetch(url, { method, body, headers });

    return response.json();
  } catch (error) {
    Promise.reject(error);
  }
}

export default apiCall;
