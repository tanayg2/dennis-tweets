import { Messaging } from "firebase/messaging";
import { create,  } from "zustand";
import { useShallow } from "zustand/react/shallow"

type FirebaseMessagingStore = {
  messaging: Messaging | null;
  setMessaging: (messaging: Messaging) => void;
};

const useFirebaseMessagingStore = create<FirebaseMessagingStore>((set) => ({
  messaging: null,
  setMessaging: (messaging: Messaging) => set({ messaging }),
}));

export const useSetFirebaseMessaging = () => useFirebaseMessagingStore(useShallow((state) => state.setMessaging));
export const useMessaging = () => useFirebaseMessagingStore(useShallow((state) => state.messaging))
