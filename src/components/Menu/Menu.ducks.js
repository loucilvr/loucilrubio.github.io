import { createAction, createReducer } from "@reduxjs/toolkit";

const namespace = "[Menu]";
const setViewType = `${namespace} Set Content View`;

export const setView = createAction(setViewType);

export const menuReducer = createReducer("HOME", {
  [setView]: (state, { payload }) => payload,
});

export const getSelectedContent = (state) => state.selectedContent;
