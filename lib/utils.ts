// ajout automatique avec l'install de shadcn/ui. Cette fonction permet de fusionner/ajouter des valeurs tailwind via des props sans créer de conflits sur des éléments ex Button size/color ou la Sidebar avec des className (Voir tuto 1h17)

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
