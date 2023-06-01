import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSearchParams } from 'helpers';

export const getNotices = createAsyncThunk(
  'notices/getNotices',
  async (credentials, { rejectWithValue }) => {
    
  
    const { category, params } = credentials;
   
    try {
      const { data } = await axios.get(
        `/notices/category/${category}?${createSearchParams(params)}`
      );
      
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUsersNotices = createAsyncThunk(
  'notices/getUsersNotices',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/notices?${createSearchParams(params)}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getFavoriteNotices = createAsyncThunk(
  'notices/getFavoriteNotices',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/notices/favorites?${createSearchParams(params)}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getNoticesByQuery = createAsyncThunk(
  'notices/getNoticesByQuery',
  async (credentials, { rejectWithValue }) => {
    const { category, ...params } = credentials;
    try {
      const { data } = await axios.get(
        `/notices/search/${category}?${createSearchParams(params)}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getNoticeById = createAsyncThunk(
  'notices/getNoticeById',
  async (_id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/notices/notice/${_id}`);

      return data.result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const addNotice = createAsyncThunk(
  'notices/addNotice',
  async ({ category, newFormData }, { rejectWithValue }) => {
    try {
      await axios.post(`/notices/${category}`, newFormData);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateNotice = createAsyncThunk(
  'notices/updateNotice',
  async (credentials, { rejectWithValue }) => {
    const { _id, ...params } = credentials;
    try {
      await axios.put(`/notices/${_id}`, params);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeNotice = createAsyncThunk(
  'notices/removeNotice',
  async (_id, { rejectWithValue }) => {
    try {
      await axios.delete(`/notices/notice/${_id}`);

      return { _id };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addFavoriteNotice = createAsyncThunk(
  'notices/addFavoriteNotice',
  async (pet, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/notices/favorite/${pet._id}`);

      return data.result.updatedNotice;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeFavoriteNotice = createAsyncThunk(
  'notices/removeFavoriteNotice',
  async (pet, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/notices/favorite/${pet._id}`);

      return data.result.updatedNotice;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeFavoriteNoticeOnFavoritepage = createAsyncThunk(
  'notices/removeFavoriteNoticeOnFavoritepage',
  async (pet, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/notices/favorite/${pet._id}`);

      return data.result.updatedNotice;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

