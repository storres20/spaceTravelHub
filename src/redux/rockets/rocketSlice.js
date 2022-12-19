import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getRockets = createAsyncThunk('rocket/getRockets', async () => fetch('https://api.spacexdata.com/v3/rockets')
  .then((res) => res.json())
  .then((data) => {
    const rockets = data.map((rocket) => ({
      id: rocket.id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      flickr_images: rocket.flickr_images[0],
    }));
    return rockets;
  })
  .catch((error) => {
    throw new Error(error);
  }));

const rocketSlice = createSlice({
  name: 'rocket',
  initialState: { rockets: [], loading: false, refresh: true },
  extraReducers: {
    [getRockets.pending]: (state) => ({ ...state, isloading: true }),
    [getRockets.fulfilled]: (state, action) => ({
      ...state,
      rockets: action.payload,
      isloading: false,
    }),
    [getRockets.rejected]: (state) => ({ ...state, isloading: false }),
  },
});
export default rocketSlice.reducer;
