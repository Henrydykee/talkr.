
import axios from 'axios';
import Config from '../config/config';

class ApiClient {
  private instance = axios.create({
    baseURL: Config.apiBaseUrl,
    timeout: 10000,
  });

  async get<T>(url: string): Promise<T> {
    const response = await this.instance.get<T>(url);
    return response.data;
  }

  async post<T>(url: string, data: unknown): Promise<T> {
    const response = await this.instance.post<T>(url, data);
    return response.data;
  }

  async put<T>(url: string, data: unknown): Promise<T> {
    const response = await this.instance.put<T>(url, data);
    return response.data;
  }

  async delete<T>(url: string): Promise<T> {
    const response = await this.instance.delete<T>(url);
    return response.data;
  }
}

export default new ApiClient();