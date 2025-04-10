export const setLocalStorageItem = (key: string, value: unknown): void => {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
};

export const getLocalStorageItem = <T>(key: string): T | null => {
  const jsonData = localStorage.getItem(key);
  return jsonData ? JSON.parse(jsonData) as T : null;
};

export const removeLocalStorageItem = (key: string): void => {
  localStorage.removeItem(key);
};