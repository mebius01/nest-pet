export const sessionConfig = {
  name: 'auth',
  secret: process.env.SESSION_SECRET || 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: true,
    httpOnly: false,
    maxAge: 24 * 60 * 60 * 1000,
  },
};
