/* eslint-disable no-underscore-dangle */
/* eslint-disable comma-dangle */
import axios from 'axios';
import { config } from 'dotenv';

config();

const { API_URL } = process.env;

class LeaveRepo {
  constructor(response) {
    this.response = response;
  }

  async post(url, obj) {
    const { data } = await axios.post(url, obj);
    this.response = data;
    return this.response;
  }

  async get(url, params) {
    const { data } = await axios.get(url, { params });
    this.response = data;
    return this.response;
  }

  async put(url, obj, options) {
    const { data } = await axios.put(url, obj, options);
    this.response = data;
    return this.response;
  }

  async delete(url, params) {
    const { data } = await axios.delete(url, { params });
    this.response = data;
    return this.response;
  }

  async getOneUserDepartmentAffiliationWithPopulate(params, options) {
    try {
      const res = await this.get(
        `${API_URL}/api/user-department/with-populate`,
        { params },
        options
      );
      return res;
    } catch (err) {
      return err;
    }
  }

  async getOneUserDepartmentAffiliation(params, options) {
    try {
      const res = await this.get(
        `${API_URL}/api/user-department/one`,
        { params },
        options
      );
      return res;
    } catch (err) {
      return err;
    }
  }

  async getDepartment(params) {
    try {
      const res = await this.get(`${API_URL}/api/department/one-department`, {
        params,
      });
      return res;
    } catch (err) {
      return err;
    }
  }

  async createLeave(data) {
    try {
      const res = await this.post(`${API_URL}/api/leave`, data);
      return res;
    } catch (err) {
      return err;
    }
  }

  async getAllLeaves(params, options) {
    try {
      const res = await this.get(`${API_URL}/api/leave/`, { params }, options);
      return res;
    } catch (err) {
      return err;
    }
  }

  async getOneLeave(params, options) {
    try {
      const res = await this.get(
        `${API_URL}/api/leave/with-populate`,
        { params },
        options
      );
      return res;
    } catch (err) {
      return err;
    }
  }

  async updateLeave(params, body) {
    try {
      const res = await this.put(`${API_URL}/api/leave/${params._id}`, body);
      return res;
    } catch (err) {
      return err;
    }
  }
}

export default new LeaveRepo();
