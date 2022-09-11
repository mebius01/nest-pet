export const getUserAuth = `
select
  u.id,
  u."name",
  u.email,
  ur."role",
  a.password_hash from users u 
inner join users_rols ur on u.role_id = ur.id 
inner join auth a on u.id = a."userId" 
where u.email = $1
`;
