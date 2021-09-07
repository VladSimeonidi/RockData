import { config } from "@/config/config";
import axios from "axios";
export const namespaced = true;

export const state = () => ({
  list: [],
  currentItem: null,
});

export const actions = {
  async ACTION_GET_LIST({ commit }) {
    return axios
      .get(config.API.BASE_URL + config.API.PRODUCTS.LIST)
      .then((res) => {
        commit("SET_LIST", res.data);
        console.log(res);
        return res;
      })
      .catch((e) => {
        console.log(e);
        return e.response;
      });
  },
  async ACTION_CURRENT_ITEM({ commit }, ID) {
    return axios
      .get(config.API.BASE_URL + config.API.PRODUCTS.LIST + "/" + ID)
      .then((res) => {
        commit("SET_CURRENT_ITEM", res.data);
        console.log(res);
        return res;
      })
      .catch((e) => {
        console.log(e);
        return e.response;
      });
  },
  async ACTION_DELETE_ITEM({ commit }, ID) {
    return axios
      .delete(config.API.BASE_URL + config.API.PRODUCTS.LIST + "/" + ID)
      .then((res) => {
        commit("SET_DELETE_CURRENT_ITEM", ID);
        console.log(res);
        return res;
      })
      .catch((e) => {
        console.log(e);
        return e.response;
      });
  },
  ACTION_SAVE_ITEM({ commit, state }) {
    return axios
      .post(
        config.API.BASE_URL + config.API.PRODUCTS.CURRENT_ITEM,
        state.currentItem
      )
      .then((res) => {
        commit("SET_CURRENT_ITEM", res.data);
        return res;
      })
      .catch((e) => {
        console.log(e);
        return e.response;
      });
  },
  ACTION_EDIT_ITEM({ commit, state }, ID) {
    return axios
      .put(
        config.API.BASE_URL + config.API.PRODUCTS.CURRENT_ITEM + "/" + ID,
        state.currentItem
      )
      .then((res) => {
        commit("SET_CURRENT_ITEM", res.data);
        return res;
      })
      .catch((e) => {
        console.log(e);
        return e.response;
      });
  },
};

export const mutations = {
  SET_LIST(state, payload) {
    state.list = payload;
  },
  SET_CURRENT_ITEM(state, payload) {
    state.currentItem = payload;
  },
  SET_DELETE_CURRENT_ITEM(state, payload) {
    const index = state.list
      .map(function(el) {
        return el.id;
      })
      .indexOf(payload);
    state.list.splice(index, 1);
  },
  SET_ADD_NEW_ITEM(state) {
    const ID = state.list.length === 0 ? 0 : state.list.length + 1;
    const emptyForm = {
      id: `${ID}`,
      title: "",
      body: "",
    };
    state.currentItem = emptyForm;
  },
  SetName(state, payload) {
    state.currentItem.title = payload;
  },
  SetBody(state, payload) {
    state.currentItem.body = payload;
  },
};
