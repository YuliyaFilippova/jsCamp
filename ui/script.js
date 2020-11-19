const messages = [
  {
    id: '0',
    text: 'Hello everyone!',
    createdAt: new Date('2020-10-12T12:00:00'),
    author: 'John Smitt',
    isPersonal: true,
    to: 'John Smitt',
  },
  {
    id: '1',
    text: 'How to will learn programming fundamentals and basic object-oriented concepts using the latest JavaScript syntax?',
    createdAt: new Date('2020-10-12T12:01:00'),
    author: 'John Smitt',
    isPersonal: false,
    to: '',
  },
  {
    id: '2',
    text: 'Hi, When is a closeable question also a “very low quality” question?',
    createdAt: new Date('2020-10-12T13:00:00'),
    author: 'Иванов Иван',
    isPersonal: true,
    to: 'John Smitt',
  },
  {
    id: '3',
    text: 'Pellentesque id nibh tortor id aliquet lectus.',
    createdAt: new Date('2020-10-12T23:00:00'),
    author: 'Anna Lebedeva',
    isPersonal: false,
    to: '',
  },
  {
    id: '4',
    text: 'Various levels of sessions with different target groups and featuring some of the experts in the field. Join professionals and enthusiasts, learn something new and do some networking.',
    createdAt: new Date('2020-10-12T23:00:00'),
    author: 'Anna Lebedeva',
    isPersonal: true,
    to: 'Yuliya Philippova',
  },
  {
    id: '5',
    text: 'After being part of the organization of the first ever JavaScript Saturday in Bulgaria and organizing the first conference in Bulgaria dedicated to jQuery, with the extremely ',
    createdAt: new Date('2020-10-12T23:00:00'),
    author: 'Yuliya Philippova',
    isPersonal: false,
    to: '',
  },
  {
    id: '6',
    text: 'Lorem Purus in massa tempor nec feugiat nisl pretium.',
    createdAt: new Date('2020-10-12T23:00:00'),
    author: 'Yuliya Philippova',
    isPersonal: true,
    to: 'John Smitt',
  },
  {
    id: '7',
    text: 'Lorem Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdAt: new Date('2020-10-12T23:00:00'),
    author: 'John Smitt',
    isPersonal: true,
    to: 'Yuliya Philippova',
  },
  {
    id: '8',
    text: 'Although there are similarities between JavaScript and Java, including language name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design.',
    createdAt: new Date('2020-10-12T23:00:00'),
    author: 'John Smitt',
    isPersonal: true,
    to: 'Yuliya Philippova',
  },
  {
    id: '9',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    createdAt: new Date('2020-10-13T23:00:00'),
    author: 'Serge Chiteenashvilli',
    isPersonal: false,
    to: '',
  },
  {
    id: '10',
    text: 'The use of JavaScript has expanded beyond its web browser roots.',
    createdAt: new Date('2020-10-12T23:00:00'),
    author: 'John Smitt',
    isPersonal: true,
    to: 'Yuliya Philippova',
  },
  {
    id: '11',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    createdAt: new Date('2020-10-13T23:00:00'),
    author: 'Vlad Ivanov',
    isPersonal: true,
    to: 'John Smitt',
  },
  {
    id: '12',
    text: 'Lorem JavaScript supports much of the structured programming syntax from C.',
    createdAt: new Date('2020-10-14T23:00:00'),
    author: 'John Smitt',
    isPersonal: true,
    to: 'Yuliya Philippova',
  },
  {
    id: '13',
    text: 'JavaScript is weakly typed, which means certain types are implicitly cast depending on the operation used',
    createdAt: new Date('2020-10-15T23:00:00'),
    author: 'Vlad Ivanov',
    isPersonal: false,
    to: '',
  },
  {
    id: '14',
    text: 'Hi.',
    createdAt: new Date('2020-10-16T23:00:00'),
    author: 'John Smitt',
    isPersonal: true,
    to: 'Yuliya Philippova',
  },
  {
    id: '15',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    createdAt: new Date('2020-10-17T23:00:00'),
    author: 'Irina Poddubnaya',
    isPersonal: false,
    to: '',
  },
  {
    id: '16',
    text: 'How are you?',
    createdAt: new Date('2020-10-18T23:00:00'),
    author: 'John Smitt',
    isPersonal: true,
    to: 'Yuliya Philippova',
  },
  {
    id: '17',
    text: 'Values are casted to numbers by casting to strings and then casting the strings to numbers. These processes',
    createdAt: new Date('2020-10-19T23:00:00'),
    author: 'Irina Poddubnaya',
    isPersonal: false,
    to: '',
  },
  {
    id: '18',
    text: 'Other objects are converted to the string [object Object] where Object is the name of the constructor of the object',
    createdAt: new Date('2020-10-20T23:00:00'),
    author: 'Artur King',
    isPersonal: false,
    to: '',
  },
  {
    id: '19',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    createdAt: new Date('2020-10-21T23:00:00'),
    author: 'Lesley Knife',
    isPersonal: false,
    to: '',
  },
  {
    id: '20',
    text: 'In JavaScript, an object is an associative array, augmented with a prototype (see below); each string key provides the name ',
    createdAt: new Date('2020-10-22T23:00:00'),
    author: 'Yuliya Philippova',
    isPersonal: false,
    to: '',
  },
  {
    id: '21',
    text: 'Functions double as object constructors, along with their typical role.',
    createdAt: new Date('2020-10-23T23:00:00'),
    author: 'Irvin Wood',
    isPersonal: false,
    to: '',
  },
];
class Message {
  constructor({
    id, createdAt, text, author, isPersonal, to,
  }) {
    this._id = id || `${+new Date()}`;
    this._createdAt = createdAt || new Date();
    this._author = author;
    this.text = text;
    this.isPersonal = isPersonal || false;
    this.to = to || '';
  }

  get id() {
    return this._id;
  }

  get createdAt() {
    return this._createdAt;
  }

  get author() {
    return this._author;
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
  }

  get isPersonal() {
    return this._isPersonal;
  }

  set isPersonal(isPersonal) {
    this._isPersonal = isPersonal;
  }

  get to() {
    return this._to;
  }

  set to(to) {
    this._to = to;
  }
}
class MessageList {
  constructor(messages) {
    this._collection = messages;
    this._user = 'Yuliya Philippova';
  }

  get user() {
    return this._user;
  }

  set user(currentUser) {
    this._user = currentUser;
  }

  get(id) {
    return this._collection.find((item) => item.id === id);
  }

  getPage(skip = 0, top = 10, filterConfig = {}) {
    const filterObj = {
      author: (item, author) => author && item.author.toLowerCase().includes(author.toLowerCase()),
      text: (item, text) => text && item.text.toLowerCase().includes(text.toLowerCase()),
      dateFrom: (item, dateFrom) => dateFrom && new Date(item.createdAt) > new Date(dateFrom),
      dateTo: (item, dateTo) => dateTo && new Date(item.createdAt) < new Date(dateTo),
    };

    // возвращаем все сообщения для текущего юзера
    let result = this._collection.filter(item => !item.isPersonal 
        || item.to === this._user 
        ||  item.author === this._user); 
    Object.keys(filterConfig).forEach((key) => {
      result = result.filter((item) => filterObj[key](item, filterConfig[key]));
    });
    
    result = result.sort((a, b) => a.createdAt - b.createdAt);
    console.log(result);
    return result.slice(skip, skip + top); 
  }

  static validate(msg) {
    const validateObj = {
      text: (msg) => msg.text && msg.text.length <= 200,
      isPersonal: (msg) => {
        if ((msg.isPersonal === false && !msg.to)
                    || (msg.isPersonal && msg.to && typeof (msg.to) === 'string')) {
          return true;
        }
      },
    };

    return Object.keys(validateObj).every((key) => validateObj[key](msg));
  }

  add(msg) {
    if (MessageList.validate(msg)) {
      const newMessage = new Message({
        id: msg.id,
        createdAt: msg.createdAt || new Date(),
        text: msg.text, 
        author: msg.author || this._user, 
        isPersonal: msg.isPersonal, 
        to: msg.to,
      });
      this._collection.push(newMessage);
      console.log(`Messages after add - ${this._collection.length} `);
      console.log(newMessage);
      return true;
    }
    console.log('Incorrect paraeters');
    return false;
  }

  edit(id, msg) {
    const temp = this.get(id);
    if (!this.get(id)) {
      console.log('Id is not existed');
      return false;
    }
    if (msg.text && msg.text.length > 200) {
      console.log('Text exceeds the limit');
      return false;
    }
    if (msg.isPersonal && !msg.to) {
      console.log('Enter who the message is addressed to');
      return false;
    }
    if (!msg.isPersonal && !msg.to) {
      msg.to = '';
    }
    Object.assign(temp, msg);
    this._collection.splice(this._collection.findIndex((item) => item.id === id), 1, temp);
    console.log(temp);
    console.log('Edit was successful');
    return true;
  }

  remove(id) {
    if (!this.get(id)) {
      console.log('Id is not existed');
      return false;
    }
    console.log(this._collection);
    this._collection.splice(this._collection.findIndex((item) => item.id === id), 1);
    console.log(this._collection);
    return true;
  }

  addAll(messages = []) {
    return messages.filter((item) => !this.add(item));
  }

  clear() {
    this._collection = [];
    return this._collection;
  }
}
class UserList {
  constructor(users, activeUsers) {
    this._users = users;
    this._activeUsers = activeUsers || false;
  }

  get users() {
    return this._users;
  }

  get activeUsers() {
    return this._activeUsers;
  }
}
class HeaderView {
  constructor(currentUser) {
    this.currentUser = currentUser;
    this.user = document.getElementById('username');
  }

  display() {
    this.user.textContent = this.currentUser;
  }
}
class MessageView {
  constructor(messages) {
    this.messages = messages;
    this.list = document.getElementById('message-list');
    this.msgTpl = document.getElementById('msg-template');
  }

  display(currentUser) {
    this.list.innerHTML = "";
    const fragment = new DocumentFragment();
    this.messages.forEach(item => {
      const elem = this.msgTpl.content.cloneNode(true);
      elem.querySelector('.message-text').textContent = item.text;
      if (item.isPersonal === true && item.to === currentUser) {
        elem.querySelector('.message-from').textContent = `${item.author} to me`; 
        elem.querySelector('.message-actions').innerHTML = `
          <i class="fas fa-star"></i>`; 
      } else {
        elem.querySelector('.message-from').textContent = item.author;
      }

      if (item.author === currentUser) {
        elem.querySelector('.message').className = "my-message"; 
        elem.querySelector('.message-actions').innerHTML = `
          <a href="" title="Edit message"><i class="fas fa-marker"></i></a>
          <a href="" title="Delete message"><i class="far fa-trash-alt"></i></a>
        `;
        elem.querySelector('.message-actions').classList.add('my-actions');
      }
      if (item.author === currentUser && item.isPersonal) {
        elem.querySelector('.message-from').textContent = `${item.author} to ${item.to}`
      }
      elem.querySelector('.message-date').textContent = `${item.createdAt.toLocaleDateString()}   ${item.createdAt.toLocaleTimeString()}`;
      fragment.appendChild(elem);
    });

    this.list.appendChild(fragment);
  }
}
class ActiveUsersView extends UserList {
  constructor(users, activeUsers) {
    super(users, activeUsers);
    this.userTpl = document.getElementById('user-template');
    this.usersTo = document.getElementById('users');
  }

  displayActive() {
    const fragment = new DocumentFragment();
    this.activeUsers.forEach(item => {
      const elem = this.userTpl.content.cloneNode(true);
      elem.querySelector('.user-item a').textContent = item;
      elem.querySelector('.status').className = "status active";
      fragment.appendChild(elem);
    });
    this.usersTo.appendChild(fragment);
  }

  displayInactive() {
    const inactiveUsers = this.users.filter(item => !this.activeUsers.includes(item));
    const fragment = new DocumentFragment();
    inactiveUsers.forEach(item => {
      const elem = this.userTpl.content.cloneNode(true);
      elem.querySelector('.user-item a').textContent = item;
      elem.querySelector('.status').className = "status away";
      fragment.appendChild(elem);
    });
    this.usersTo.appendChild(fragment);
  }
}
class FilterView extends UserList {
  constructor(users, activeUsers) {
    super(users, activeUsers);
    this.findUser = document.getElementById('find-user');
  }

  display() {
    let index = 1; 
    this.users.forEach(item => {
      this.findUser.innerHTML += `<option value="${++index}">${item}</option>`;
    });
    console.log(this.findUser);
  }
}


const currentUser = 'Yuliya Philippova';
const users = ['Maroon Horse', 'Pink Raccoon', 'Anna Kardash', 'Nata Beresneva', 'Lavender Ferret', 'Violet Cheetah', 'Blue Lama', 'Beige Unicorn ']; 
const activeUsers = ['Nata Beresneva', 'Lavender Ferret', 'Violet Cheetah', 'Blue Lama', 'Beige Unicorn']; 

const model = new MessageList(messages);
const filterView = new FilterView(users);
filterView.display();
const activeUsersView = new ActiveUsersView(users, activeUsers); 
const messageView = new MessageView(messages);
messageView.display(currentUser);

function setCurrentUser(user) {
  const headerView = new HeaderView(user);
  headerView.display();
  model.user = user;
}

function addMessage(msg) {
  if (model.add(msg)) {
    messageView.display(currentUser);
  }
}

function editMessage(id, msg) {
  if (model.edit(id, msg)) {
    messageView.display(currentUser);
  }
}

function removeMessage(id) {
  if (model.remove(id)) {
    messageView.display(currentUser);
  }
}

function showMessages(skip = 0, top = 10, filterConfig = {}) {
  let result = model.getPage(skip, top, filterConfig); 
  console.log(result);
  const filteredMessages = new MessageView(result); 
  filteredMessages.display(currentUser);
}

function showActiveUsers() {
  activeUsersView.displayActive();
  activeUsersView.displayInactive();
}

setCurrentUser(currentUser);
showActiveUsers()