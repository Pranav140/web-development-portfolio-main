/**
 * api.js - Shared API utility for the frontend.
 * All requests go through this module so the base URL is managed in one place.
 * Set VITE_API_URL in your .env file (defaults to http://localhost:5000 for local dev).
 */

export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

/**
 * Generic GET request
 * @param {string} path - API path, e.g. "/api/projects"
 * @returns {Promise<any>}
 */
export const apiFetch = async (path) => {
  const res = await fetch(`${API_URL}${path}`);
  if (!res.ok) throw new Error(`API error ${res.status}: ${path}`);
  return res.json();
};

/**
 * Generic POST request
 * @param {string} path - API path, e.g. "/api/contact"
 * @param {object} body - Request body
 * @returns {Promise<any>}
 */
export const apiPost = async (path, body) => {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || `API error ${res.status}`);
  return data;
};
