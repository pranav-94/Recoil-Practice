import { atom } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
})

export const readValue = atom({
    key: "readOnly",
    default: 0
})
