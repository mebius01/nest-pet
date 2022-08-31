export const getUserAuth = `
select u.*, a.password_hash from users u 
inner join auth a on u.id = a."userId" 
where u.email = $1
`;
