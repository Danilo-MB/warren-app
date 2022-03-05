import { fetch } from './connector';

export const login = (email) =>
  fetch(`/api/pilots/login`, {
    method: 'POST',
    data: {
      email: email,
      password: 'miprimervuelo'
    },
});

export const loginWithError = (email) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Usuario o contraseña inválida');
    }, 500);
});

export const fetchUser = (userId) => (
  fetch(`/api/pilots/${userId}`, {
    method: 'GET',
  }
  )
);

