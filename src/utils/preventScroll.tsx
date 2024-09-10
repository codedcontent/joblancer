export function preventScroll(): void {
  if (typeof window !== "undefined") {
    document.body.style.overflow = "hidden";
  }
}

export function allowScroll(): void {
  if (typeof window !== "undefined") {
    document.body.style.overflow = "";
  }
}
