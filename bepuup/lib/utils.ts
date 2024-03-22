import {clsx, type classValue} from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: classValue[]) {
    return twMerge(clsx(inputs))
}