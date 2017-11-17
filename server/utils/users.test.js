var expect = require('expect');

var {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'test1',
      room: 'test13'
    }, {
      id: '2',
      name: 'test2',
      room: 'test2'
    }, {
      id: '3',
      name: 'test3',
      room: 'test13'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: 1234,
      name: 'Sander',
      room: 'test123'
    }
    res = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

    it('should remove a user', () => {
      toBeRemovedUser = users.users[0];
      res = users.removeUser('1');

      expect(res).toBe(toBeRemovedUser);
      expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
      res = users.removeUser('123456');

      expect(res).toBe(undefined);
      expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
      res = users.getUser('3');

      expect(res).toBe(users.users[2]);
    });

    it('should not find a user', () => {
      res = users.getUser('3456789');

      expect(res).toBe(undefined);
    });

    it('should return names for test13', () => {
      var userList = users.getUserList('test13');

      expect(userList).toEqual(['test1', 'test3']);
    });

    it('should return names for test2', () => {
      var userList = users.getUserList('test2');

      expect(userList).toEqual(['test2']);
    });
});
