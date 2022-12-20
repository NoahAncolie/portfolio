function Store(key: string, value: string): void {
  return localStorage.setItem(key, value);
}

function Get(key: string): string | null {
  return localStorage.getItem(key);
}

export function GetColorMode(): boolean {
  if (Get("is_dark") === null) return false;
  return JSON.parse(Get("is_dark")!)
}

export function SetColorMode(value: boolean): void {
    Store("is_dark", JSON.stringify(value))
}