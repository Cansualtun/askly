import { create } from "zustand";
import { clientApi } from "~/services/http.client";
import type { Root } from "./type";

type AppState = {
  posts: Root;
  loading: boolean;
  fetchSurveys: () => Promise<void>;
};

export const useSurveyStore = create<AppState>((set, get) => ({
  posts: {} as Root,
  loading: false,

  fetchSurveys: async () => {
    set({ loading: true });
    try {
      const res = await clientApi.get("/surveys");
      set({ posts: res.data, loading: false });
      console.log(res, "res");
      return res.data;
    } catch (e) {
      set({ loading: false });
    }
  },
}));
