const STORAGE_BASE_URL = "https://storage.googleapis.com/";

export function getStorageImageUrl(path?: string | null): string | null {
  if (!path) return null;
  if (/^https?:\/\//.test(path)) return path;
  return `${STORAGE_BASE_URL}${path.replace(/^\//, "")}`;
}
