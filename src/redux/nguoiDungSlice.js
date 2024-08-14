import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nguoiDungService } from "../service/nguoiDung.service";

export const getValueUserAPI = createAsyncThunk(
  "nguoiDung/getValueUserAPI",
  async (_, ThunkAPI) => {
    const result = await nguoiDungService.getAllUsers();
    console.log(result);
    return result.data.content;
  }
);
const initialState = {
  listUser: [],
};

const nguoiDungSlice = createSlice({
  name: "nguoiDung",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getValueUserAPI.fulfilled, (state, action) => {
      console.log(action);
      state.listUser = action.payload;
    });
    builder.addCase(getValueUserAPI.pending, (state, action) => {
      console.log("Tôi đang chở xữ lý");
    });
    builder.addCase(getValueUserAPI.rejected, (state, action) => {
      console.log("tôi bị lỗi");
    });
  },
});

export const {} = nguoiDungSlice.actions;

export default nguoiDungSlice.reducer;
