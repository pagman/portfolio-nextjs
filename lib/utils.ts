import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Canonical host: the bare domain redirects to www
export const siteUrl = "https://www.mcubeddevlabs.gr"
