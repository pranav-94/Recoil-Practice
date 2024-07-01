import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
})

export const readValue = atom({
    key: "readOnly",
    default: 0
})

export const evenSelector = selector({
    key: "evenSel",
    get: ({get}) =>{
        const count = get(countAtom)
        return count % 2 
    }
})
