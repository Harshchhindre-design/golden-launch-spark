
/**
 * Set a cookie with the given name, value, and expiration days
 */
export const setCookie = (name: string, value: string, days: number): void => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
};

/**
 * Get the value of a cookie by its name
 */
export const getCookie = (name: string): string | null => {
  const cookieName = `${name}=`;
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  
  return null;
};

/**
 * Check if this is the first visit within the last 24 hours
 */
export const isFirstVisit = (): boolean => {
  const visitedCookie = getCookie('visited');
  
  if (!visitedCookie) {
    setCookie('visited', 'true', 1); // Set cookie for 1 day
    return true;
  }
  
  return false;
};
