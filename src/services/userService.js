// Mock user database - in a real application, this would be stored in a database
let users = [];

/**
 * Register a new user
 * @param {object} userData - User registration data
 * @returns {Promise<{success: boolean, message: string, user?: object}>} - Registration result
 */
export const registerUser = async (userData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Check if email already exists
  const existingUser = users.find(user => user.email === userData.email);
  if (existingUser) {
    return {
      success: false,
      message: 'Această adresă de email este deja înregistrată!'
    };
  }
  
  // Create new user
  const newUser = {
    id: Date.now().toString(),
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    offerFrequency: userData.offerFrequency,
    password: userData.password, // In a real app, this would be hashed
    createdAt: new Date().toISOString()
  };
  
  // Add to users array
  users.push(newUser);
  
  // Store in local storage for persistence
  localStorage.setItem('users', JSON.stringify(users));
  
  // Return success without password
  const { password, ...userWithoutPassword } = newUser;
  return {
    success: true,
    message: 'Înregistrare reușită!',
    user: userWithoutPassword
  };
};

/**
 * Login a user
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<{success: boolean, message: string, user?: object}>} - Login result
 */
export const loginUser = async (email, password) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Load users from localStorage if available
  const storedUsers = localStorage.getItem('users');
  if (storedUsers) {
    users = JSON.parse(storedUsers);
  }
  
  // Find user by email
  const user = users.find(user => user.email === email);
  
  if (!user || user.password !== password) {
    return {
      success: false,
      message: 'Email sau parolă incorectă!'
    };
  }
  
  // Store authentication in local storage
  const { password: _, ...userWithoutPassword } = user;
  localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
  localStorage.setItem('isUserLoggedIn', 'true');
  
  return {
    success: true,
    message: 'Autentificare reușită!',
    user: userWithoutPassword
  };
};

/**
 * Logout the current user
 * @returns {Promise<{success: boolean}>} - Logout result
 */
export const logoutUser = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Clear authentication from local storage
  localStorage.removeItem('currentUser');
  localStorage.removeItem('isUserLoggedIn');
  
  return {
    success: true
  };
};

/**
 * Check if a user is logged in
 * @returns {boolean} - Whether a user is logged in
 */
export const isUserLoggedIn = () => {
  return localStorage.getItem('isUserLoggedIn') === 'true';
};

/**
 * Get the current logged in user
 * @returns {object|null} - The current user or null if not logged in
 */
export const getCurrentUser = () => {
  const userJson = localStorage.getItem('currentUser');
  return userJson ? JSON.parse(userJson) : null;
};
