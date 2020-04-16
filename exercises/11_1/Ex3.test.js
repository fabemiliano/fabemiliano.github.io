const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      resolve(users[id]);
    }
    reject({ error: 'x'});
  });
}

const getUserName = (userID) => {
  return findUserById(userID);
}


test('Teste findusers', async () => {
  try {
    const animal = await getUserName(6)
  expect(animal.name).toBe('Mark')
  }
  catch (err) {
    expect(err).toEqual({ error: 'x'})
  }
});


