export function getUserLogged(): { isLogged: boolean; user: any } {
  const user = localStorage.getItem("@user");
  if (user)
    return {
      isLogged: true,
      user: JSON.parse(user),
    };

  return { isLogged: false, user: {} };
}
