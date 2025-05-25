// Mock admin credentials - in a real application, this would be stored securely in a database
const adminCredentials = {
  username: 'admin',
  password: 'admin123', // In a real app, this would be hashed
};

// Store authentication state
let isAuthenticated = false;
let currentUser = null;

/**
 * Attempts to log in with the provided credentials
 * @param {string} username - The username to authenticate with
 * @param {string} password - The password to authenticate with
 * @returns {Promise<{success: boolean, message: string, user?: object}>} - Authentication result
 */
export const login = async (username, password) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  if (username === adminCredentials.username && password === adminCredentials.password) {
    isAuthenticated = true;
    currentUser = { username, role: 'admin' };
    
    // Store authentication in session storage
    sessionStorage.setItem('isAuthenticated', 'true');
    sessionStorage.setItem('user', JSON.stringify(currentUser));
    
    return {
      success: true,
      message: 'Autentificare reușită!',
      user: currentUser
    };
  }
  
  return {
    success: false,
    message: 'Nume de utilizator sau parolă incorectă!'
  };
};

/**
 * Logs out the current user
 * @returns {Promise<{success: boolean}>} - Logout result
 */
export const logout = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  isAuthenticated = false;
  currentUser = null;
  
  // Clear authentication from session storage
  sessionStorage.removeItem('isAuthenticated');
  sessionStorage.removeItem('user');
  
  return {
    success: true
  };
};

/**
 * Checks if the user is authenticated
 * @returns {boolean} - Whether the user is authenticated
 */
export const isUserAuthenticated = () => {
  // Check session storage first (for page refreshes)
  const storedAuth = sessionStorage.getItem('isAuthenticated');
  const storedUser = sessionStorage.getItem('user');
  
  if (storedAuth === 'true' && storedUser) {
    isAuthenticated = true;
    currentUser = JSON.parse(storedUser);
  }
  
  return isAuthenticated;
};

/**
 * Gets the current authenticated user
 * @returns {object|null} - The current user or null if not authenticated
 */
export const getCurrentUser = () => {
  // Check session storage first (for page refreshes)
  if (!currentUser) {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      currentUser = JSON.parse(storedUser);
    }
  }
  
  return currentUser;
};
