// Giriş yap
export const login = async (email, password) => {
  // TODO: return await api.post(`/api/auth/login`, { email, password })
  return {
    user: {
      id: 1,
      username: "aliekin",
      email,
      firstName: "Ali Ekin",
      lastName: "Ayhan",
    },
    token: "mock-token",
  };
};

// Kayıt ol
export const register = async (data) => {
  // TODO: return await api.post(`/api/auth/register`, data)
  return {
    user: {
      id: 1,
      username: data.username,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    },
    token: "mock-token",
  };
};

// Çıkış yap
export const logout = async () => {
  // TODO: return await api.post(`/api/auth/logout`)
  return { success: true };
};

// Token ile kullanıcıyı getir
export const getMe = async () => {
  // TODO: return await api.get(`/api/auth/me`)
  return null;
};
