import axios from "axios";
import {
  POST_ALL_LIST_FAIL,
  POST_ALL_LIST_REQUEST,
  POST_ALL_LIST_SUCCESS,
  POST_CREATE_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_DELETE_FAIL,
  POST_DELETE_REQUEST,
  POST_DELETE_SUCCESS,
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_UPDATE_FAIL,
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
} from "../constants/postsConstants";

export const allListPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_ALL_LIST_REQUEST,
    });

    const config = {
      headers: {
        Authorization: `No Auth`,
      },
    };

    const { data } = await axios.get(`/api/posts`, config);

    dispatch({
      type: POST_ALL_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: POST_ALL_LIST_FAIL,
      payload: message,
    });
  }
};

export const listPosts = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_LIST_REQUEST,
    });

    const {
      userSignin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/posts/getbyuser`, config);

    dispatch({
      type: POST_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: POST_LIST_FAIL,
      payload: message,
    });
  }
};

export const createPostAction =
  (
    component,
    dept,
    emaill,
    title,
    category,
    costEstimated,
    outline,
    abstract
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: POST_CREATE_REQUEST,
      });

      const {
        userSignin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/posts/create`,
        {
          component,
          dept,
          emaill,
          title,
          category,
          costEstimated,
          outline,
          abstract,
        },
        config
      );

      dispatch({
        type: POST_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: POST_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const updatePostAction =
  (
    id,
    component,
    dept,
    emaill,
    title,
    category,
    costEstimated,
    outline,
    abstract
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: POST_UPDATE_REQUEST,
      });

      const {
        userSignin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/posts/${id}`,
        {
          component,
          dept,
          emaill,
          title,
          category,
          costEstimated,
          outline,
          abstract,
        },
        config
      );

      dispatch({
        type: POST_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: POST_UPDATE_FAIL,
        payload: message,
      });
    }
  };

export const deletePostAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_DELETE_REQUEST,
    });

    const {
      userSignin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/posts/${id}`, config);

    dispatch({
      type: POST_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: POST_DELETE_FAIL,
      payload: message,
    });
  }
};
