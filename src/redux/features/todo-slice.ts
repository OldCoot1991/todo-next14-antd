import { createSlice } from '@reduxjs/toolkit';

type Site = {
};

type SiteState = {
  site: Site[];
};

const initialState: SiteState = {
  site: [],
};

export const site = createSlice({
  name: 'site',
  initialState,
  reducers: {},
});

export const {} = site.actions;
export default site.reducer;
