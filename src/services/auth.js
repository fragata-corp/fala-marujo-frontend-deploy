const SESSION = "@session";
export const getSession = () => sessionStorage.getItem(SESSION);
export const setSession = id => {
  sessionStorage.setItem(SESSION, id);
};
export const isAuthenticated = () => sessionStorage.getItem(SESSION) !== null;
export const logout = () => {
  sessionStorage.removeItem(SESSION);
};

//logica de validação de role deverá ser feita no backend

//logica de validação da ativação do usuario deverá ser feita no backend
