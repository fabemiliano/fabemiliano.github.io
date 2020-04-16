const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      resolve(users[id]);
    }

    reject({ error: 'x' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

test('Teste findusers', () => {

  return getUserName(4).then(user => {
    expect(user).toBe('Mark')
  })
});

test('Teste findusers com catch', () => {

  return getUserName(4).catch(err => {
    expect(err).toBe({ error: 'x' })
  })
});


/* const getUserName = (userID) => {
  return findUserById(userID)
}


test('Teste findusers', () => {
  return getUserName(4).then(user => {
    expect(user.name).toBe('Mark')
  })
});
 */