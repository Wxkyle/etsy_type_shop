import { atom } from "jotai";

export const mainScreenSwitcherAtom = atom<string | number>('HomePage');
export const mobileModeSwitchAtom = atom(false);
export const selectedItemIdAtom = atom<number>(0)