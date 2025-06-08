// Mock user database - in a real application, this would be stored in a database
let users = [];

// Load users from localStorage if available
const loadUsers = () => {
  const storedUsers = localStorage.getItem('users');
  if (storedUsers) {
    users = JSON.parse(storedUsers);
  }
};

// Initialize users from localStorage
loadUsers();

/**
 * Register a new user
 * @param {object} userData - User registration data
 * @returns {Promise<{success: boolean, message: string, user?: object}>} - Registration result
 */
export const registerUser = async (userData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Reload users to ensure we have the latest data
  loadUsers();
  
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
    subscribeToOffers: userData.subscribeToOffers,
    password: userData.password, // In a real app, this would be hashed
    isPremium: false, // By default, new users are not premium
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
  
  // Reload users to ensure we have the latest data
  loadUsers();
  
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

/**
 * Verify payment with payment processor
 * @param {string} paymentReference - Payment reference from payment processor
 * @returns {Promise<{success: boolean, verified: boolean}>} - Verification result
 */
export const verifyPayment = async (paymentReference) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // In a real app, this would make an API call to the payment processor
  // to verify the payment status using the payment reference
  
  // For demo purposes, we'll simulate a successful verification
  return {
    success: true,
    verified: true
  };
};

/**
 * Update user premium status
 * @param {string} userId - User ID
 * @param {boolean} isPremium - Premium status
 * @returns {Promise<{success: boolean, message: string, user?: object}>} - Update result
 */
export const updatePremiumStatus = async (userId, isPremium) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Reload users to ensure we have the latest data
  loadUsers();
  
  // Find user by ID
  const userIndex = users.findIndex(user => user.id === userId);
  
  if (userIndex === -1) {
    return {
      success: false,
      message: 'Utilizatorul nu a fost găsit!'
    };
  }
  
  // Update premium status
  users[userIndex].isPremium = isPremium;
  
  // Update in localStorage
  localStorage.setItem('users', JSON.stringify(users));
  
  // If this is the current user, update current user in localStorage
  const currentUser = getCurrentUser();
  if (currentUser && currentUser.id === userId) {
    const updatedUser = { ...currentUser, isPremium };
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
  }
  
  return {
    success: true,
    message: isPremium ? 'Statut premium activat!' : 'Statut premium dezactivat!',
    user: { ...users[userIndex], password: undefined }
  };
};

/**
 * Save premium settings for a user
 * @param {string} userId - User ID
 * @param {object} settings - Premium settings
 * @returns {Promise<{success: boolean, message: string}>} - Save result
 */
export const savePremiumSettings = async (userId, settings) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Reload users to ensure we have the latest data
  loadUsers();
  
  // Find user by ID
  const userIndex = users.findIndex(user => user.id === userId);
  
  if (userIndex === -1) {
    return {
      success: false,
      message: 'Utilizatorul nu a fost găsit!'
    };
  }
  
  // Check if user is premium
  if (!users[userIndex].isPremium) {
    return {
      success: false,
      message: 'Utilizatorul nu are un cont premium activ!'
    };
  }
  
  // Update premium settings
  users[userIndex].premiumSettings = settings;
  
  // Update in localStorage
  localStorage.setItem('users', JSON.stringify(users));
  
  // If this is the current user, update current user in localStorage
  const currentUser = getCurrentUser();
  if (currentUser && currentUser.id === userId) {
    const updatedUser = { ...currentUser, premiumSettings: settings };
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
  }
  
  return {
    success: true,
    message: 'Preferințele premium au fost salvate cu succes!'
  };
};
