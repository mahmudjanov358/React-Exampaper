import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("cart")) || [],
  },

  reducers: {
    incCart(state, { payload }) {
      let index = state.value.findIndex((el) => el.id === payload.id);

      if (index < 0) {
        state.value.push({ ...payload, quantity: 1 }); // push ishlatish mumkin
      } else {
        state.value[index].quantity += 1;
      }

      localStorage.setItem("cart", JSON.stringify(state.value));
      toast.success("Mahsulot qo‘shildi!");
    },

    decCart(state, { payload }) {
      let index = state.value.findIndex((el) => el.id === payload.id);

      if (index >= 0 && state.value[index].quantity > 1) {
        state.value[index].quantity -= 1;
      } else {
        state.value = state.value.filter((item) => item.id !== payload.id);
      }

      localStorage.setItem("cart", JSON.stringify(state.value));
      toast.error("Mahsulot kamaytirildi!");
    },

    removeCart(state, { payload }) {
      state.value = state.value.filter((item) => item.id !== payload.id);
      localStorage.setItem("cart", JSON.stringify(state.value));
      toast.error("Mahsulot savatdan o‘chirildi!");
    },

    removeAllCart(state) {
      state.value = [];
      localStorage.setItem("cart", JSON.stringify(state.value));
      toast.error("Savat bo'shatildi!");
    },
  },
});

export const { incCart, decCart, removeCart, removeAllCart } =
  cartSlice.actions;
export default cartSlice.reducer;
