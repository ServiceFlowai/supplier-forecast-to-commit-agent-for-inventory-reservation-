import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    dateRange: null,
    supplierTier: '',
    supplierName: '',
    skuGroup: '',
    region: '',
  },
  kpis: {
    manualFollowUpTime: 0,
    otif: 0,
    activeReservations: 0,
    pendingConfirmations: 0,
  },
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
    },
    setKpis(state, action) {
      state.kpis = action.payload;
    },
  },
});

export const { setFilters, setKpis } = dashboardSlice.actions;
export default dashboardSlice.reducer;