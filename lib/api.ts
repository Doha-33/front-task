
const BASE_URL = 'https://tinytales.trendline.marketing/api';

export const api = {
  async post(endpoint: string, body: any, token?: string) {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers,
    });
    return response.json();
  },
  async get(endpoint: string, token?: string) {
    const headers: HeadersInit = {
      'Accept': 'application/json',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'GET',
      headers,
    });
    return response.json();
  }
};
