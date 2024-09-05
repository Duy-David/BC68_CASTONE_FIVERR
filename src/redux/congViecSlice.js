import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { quanLyCongViecService } from '../service/quanLyCongViec.sevice';

export const getValueJobAPI = createAsyncThunk(
    "congViec/getValueJobAPI",
    async (_, ThunkAPI) => {
      const result = await quanLyCongViecService.getCongViec();
      console.log(result.data.content);
      return result.data.content;
    }
  );
  
const initialState = {
    listJob: [],
}

const congViecSlice = createSlice({
  name: "congViecSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getValueJobAPI.fulfilled, (state, action) => {
      console.log(action);
      state.listJob = action.payload;
    });
    builder.addCase(getValueJobAPI.pending, (state, action) => {
      console.log("Tôi đang chở xữ lý");
    });
    builder.addCase(getValueJobAPI.rejected, (state, action) => {
      console.log("tôi bị lỗi");
    });
  },
});

export const {} = congViecSlice.actions

export default congViecSlice.reducer