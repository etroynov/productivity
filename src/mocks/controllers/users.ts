import store from 'store2';

import { rest } from 'msw';

const index = rest.get('/users', (req, res, ctx) => {
  const users = store.get('users');
  const usersTimeTracks = store.get('time_tracks');

  const users_with_time_tracks = users.map((user: any) => {
    const time_tracks: any[] = usersTimeTracks[user.id];

    const total = time_tracks.reduce((acc: any, curr) => {
      const [productiveTime, unproductiveTime] = curr;

      acc.totalProductiveTime += productiveTime;
      acc.totalUnproductiveTime += unproductiveTime;

      return acc;
    }, {
      totalProductiveTime: 0,
      totalUnproductiveTime: 0
    });

    return {
      ...user,
      ...total,
      time_tracks,
    }
  });

  return res(
    ctx.delay(500),
    ctx.json(users_with_time_tracks)
  );
});

export const users = {
  index,
};
