import { atom } from 'jotai'
import { Location } from '../types'

export const locationsAtom = atom<Location[] | []>([]);
export const isLoadingAtom = atom(true);
export const isErrorAtom = atom(false);