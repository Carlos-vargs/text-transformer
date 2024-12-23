import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Normaliza un carácter eliminando los acentos y diacríticos.
 *
 * @param {string} char - El carácter a normalizar.
 * @returns {string} - El carácter normalizado sin acentos.
 */
export function normalizeCharacter(char: string) {
  return char.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
