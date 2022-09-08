export const authBody = {
  email: 'john_doe@gmail.com',
  password: '123456',
};

export const userData = {
  id: 'US-UMDM-T4TL',
  email: 'john_doe@gmail.com',
  name: 'john_doe',
  role: { id: 2, role: 'user' },
};

export const authData = {
  password_hash: '$2b$10$BmuDKCgUXlpNFmPd2GYwW.CgrLGrVKOEo2FIADsS.3iVsFvab/3OW',
  user: userData,
};

export const loginDalData = {
  id: userData.id,
  email: userData.email,
  name: userData.name,
  role: userData.role.role,
  password_hash: authData.password_hash,
};

export const loginData = {
  id: userData.id,
  email: userData.email,
  name: userData.name,
  role: userData.role.role,
};
