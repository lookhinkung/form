import { defineStore } from "pinia";
import z from "zod";

export const userValidation = z.object({
  prefixName: z.string(),
  name: z.string(),
  stuCode: z.string().length(10).max(10),
  tel: z.string().length(10),
  civilId: z.string().length(13).max(13),
  cSelection: z.string(),
  facility: z.string(),
  major: z.string(),
  annotation: z.string(),
  gpa: z.string(),
});

export type UserType = z.infer<typeof userValidation>;

export const useUserState = defineStore("user", {
  state: () => {
    return { userState: <UserType[]>[] };
  },
  getters: {
    getState: (state) => state.userState,
    getCounter: (state) => state.userState.length,
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    pushState(user: UserType) {
      this.userState.push(user);
    },
    removeIndexState(index: number) {
      this.userState.splice(index, 1);
    },
  },
});
