import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const likeSlice = createSlice({
  name: "likes",
  initialState: JSON.parse(localStorage.getItem("wishes")) || [],
  reducers: {
    addToLikes(state, action) {
      const exists = state.find((el) => el.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
        localStorage.setItem("wishes", JSON.stringify(state));
        toast.success("Tabriklayman! — Tanlandi!");
      }
    },
    removeFromLikes(state, action) {
      const updatedState = state.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("wishes", JSON.stringify(updatedState));
      toast.error("Tabriklayman! — Tanlanganlardan o'chirildi!");
      return updatedState;
    },
  },
});

export const { addToLikes, removeFromLikes } = likeSlice.actions;
export default likeSlice.reducer;
