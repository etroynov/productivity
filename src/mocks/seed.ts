import faker from 'faker';
import { differenceInMilliseconds } from 'date-fns';

const generateClockedTime = () => {
  const items = [];

  for (let i = 1; i < 4; i++) {
    const date = new Date();
    const dayStart = new Date(date.getFullYear(), date.getMonth(), i, 9);
    const dayEnd = new Date(date.getFullYear(), date.getMonth(), i, 18);

    const userIn = faker.date.between(
      dayStart,
      new Date(date.getFullYear(), date.getMonth(), i, 10)
    );
    const userOut = faker.date.between(userIn, dayEnd);
    const checkpoint = faker.date.between(userIn, userOut);
    const productivity_time = differenceInMilliseconds(
      checkpoint,
      userIn,
    );
    const unproductivity_time = differenceInMilliseconds(
      userOut,
      checkpoint,
    );

    items.push([productivity_time, unproductivity_time, 60000]);
  }

  return items;
};

const users = () => {
  const users = [];
  const time_tracks = {} as any;

  for (let i = 0; i < 10500; i++) {
    const user = {
      id: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      role: 'employee',
      status: true,
    };

    time_tracks[user.id] = generateClockedTime();

    users.push(user);
  }

  return { users, time_tracks };
};

export const seed = {
  users,
};
