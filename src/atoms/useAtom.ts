import { atom } from 'jotai'
import { Character, Episode, Location } from '../types'

export const locationsAtom = atom<Location[] | []>([]);
export const charactersAtom = atom<Character[] | []>([]);
export const episodesAtom = atom<Episode[] | []>([]);
export const isLoadingAtom = atom(true);
export const isErrorAtom = atom(false);