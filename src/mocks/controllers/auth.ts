import store from 'store2';
import { rest } from 'msw';

const login = rest.post('/login', (req, res, ctx) => {
  const users = store.get('users');
  const { email, password } = req.body as any;
  const user = users.find((user: any) => user.email === email);

  try {
    if (user.password === password) {
      return res(
        ctx.delay(2000),
        ctx.json(user)
      );
    }

    return res(
      ctx.delay(2000),
      ctx.status(403),
    );
  } catch {
    return res(
      ctx.status(500),
    );
  }
});

export const auth = {
  login,
};