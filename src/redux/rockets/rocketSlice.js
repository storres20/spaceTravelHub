import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getRockets = createAsyncThunk('rocket/getRockets', async () => fetch('https://api.spacexdata.com/v3/rockets')
  .then((res) => res.json())
  .then((data) => {
    const rockets = data.map((rocket) => ({
      id: rocket.id,
      rocketName: rocket.rocket_name,
      description: rocket.description,
      flickrImages: rocket.flickr_images[0],
    }));
    return rockets;
  })
  .catch((error) => {
    throw new Error(error);
  }));

export const reserveRocket = (id) => ({
  type: 'rocket/reserveRocket',
  payload: id,
});

const rocketSlice = createSlice({
  name: 'rocket',
  initialState: { rockets: [], loading: false, refresh: true },
  reducers: {
    reserveRocket: (state, action) => {
      const rockets = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      return { ...state, rockets };
    },
  },
  extraReducers: {
    [getRockets.pending]: (state) => ({ ...state, loading: true }),
    [getRockets.fulfilled]: (state, action) => ({
      ...state,
      rockets: action.payload,
      loading: false,
    }),
    [getRockets.rejected]: (state) => ({ ...state, loading: false }),
  },
});
export default rocketSlice.reducer;
