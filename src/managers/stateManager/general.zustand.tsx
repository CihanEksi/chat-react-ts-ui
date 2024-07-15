import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { User } from "../../models/User.model";
import { generalStorage } from "../../constants/state.keys";
const storageName = generalStorage;

interface GeneralState {
  me: User | null;
  token: string | null;
  setMe: (me: User | null) => void; // Define type for setMe function
  setToken: (token: string | null) => void; // Define type for setToken function
}

const initialState: GeneralState = {
  me: null,
  token: null,
  setMe: () => {},
  setToken: () => {},
};

const generalFunction = (
  set: (fn: (state: GeneralState) => GeneralState) => void
) => ({
  ...initialState,
  setMe: (me: User | null) => set((state) => ({ ...state, me })),
  setToken: (token: string | null) => set((state) => ({ ...state, token })),
});

const useGeneralStore = create<GeneralState>()(
  devtools(
    persist((set) => generalFunction(set), {
      name: storageName,
    })
  )
);

export default useGeneralStore;
