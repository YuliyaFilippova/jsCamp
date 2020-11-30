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
    author: 'John Smitt',
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
    author: 'test',
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
    author: 'Anna Lebedeva',
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
    author: 'Anna Lebedeva',
    isPersonal: false,
    to: '',
  },
  {
    id: '20',
    text: 'In JavaScript, an object is an associative array, augmented with a prototype (see below); each string key provides the name ',
    createdAt: new Date('2020-10-22T23:00:00'),
    author: 'Yuliya Philippova',
    isPersonal: true,
    to: 'Anna Lebedeva',
  },
  {
    id: '21',
    text: 'Functions double as object constructors, along with their typical role.',
    createdAt: new Date('2020-10-23T23:00:00'),
    author: 'Irvin Wood',
    isPersonal: false,
    to: '',
  },
  {
    id: '22',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    createdAt: new Date('2020-10-21T23:00:00'),
    author: 'Anna Lebedeva',
    isPersonal: false,
    to: '',
  },
  {
    id: '23',
    text: 'In JavaScript, an object is an associative array, augmented with a prototype (see below); each string key provides the name ',
    createdAt: new Date('2020-10-22T23:00:00'),
    author: 'Yuliya Philippova',
    isPersonal: false,
    to: '',
  },
  {
    id: '24',
    text: 'JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages.',
    createdAt: new Date('2020-10-23T23:00:00'),
    author: 'Irvin Wood',
    isPersonal: false,
    to: '',
  },
];
const currentUser = '';
const users = [{ user: 'Yuliya Philippova', pwd: '12345' }, { user: 'Anna Lebedeva', pwd: '123' }, { user: 'John Smitt', pwd: '123' }, {user: "test", pwd: "123"}];
class Message {
  constructor({
    id, createdAt, text, author, isPersonal, to,
  }) {
    this._id = id || `${+new Date()}`;
    this._createdAt = Date.parse(createdAt) || new Date();
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
class Model {
  constructor(messages) {
    this._collection = messages;
    this._user = 'Yuliya Philippova';
  }

  get collection() {
    return this._collection;
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
      dateFrom: (item, dateFrom) => dateFrom && new Date(item.createdAt) > new Date(dateFrom),
      dateTo: (item, dateTo) => dateTo && new Date(item.createdAt) < new Date(dateTo),
      text: (item, text) => text && item.text.toLowerCase().includes(text.toLowerCase()),
    };

    console.log('collection:', this._collection);
    // возвращаем все сообщения для текущего юзера
    let result = this._collection.filter((item) => !item.isPersonal
        || item.to === this._user
        || item.author === this._user);
    Object.keys(filterConfig).forEach((key) => {
      result = result.filter((item) => filterObj[key](item, filterConfig[key]));
    });
    result = result.sort((a, b) => b.createdAt - a.createdAt);
    result = result.slice(skip, skip + top);
    console.log('result:', skip, top, result);
    return result;
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
    if (Model.validate(msg)) {
      const newMessage = new Message({
        id: msg.id,
        createdAt: msg.createdAt || new Date(),
        text: msg.text,
        author: msg.author || this._user,
        isPersonal: msg.isPersonal,
        to: msg.to,
      });
      this._collection.push(newMessage);
      //console.log('Add msg: ', this._collection);
      return true;
    }
    console.log('Incorrect parameters');
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
}
class HeaderView {
  constructor(containerID) {
    this.user = document.getElementById(containerID);
  }

  display(username = 'Guest') {
    this.user.innerHTML = `<a title="Username" id="username">${username}</a><span>|</span>
                    <a title="Log Out" id="login-logout" onclick="ctrl.logout()">Log Out</a>`;

    document.querySelector('.typing-form').classList.remove('disable');
    document.querySelector('.typing-form button').removeAttribute('disabled', true);
    document.querySelector('textarea').removeAttribute('disabled', true);
    document.querySelector('.messageto').classList.remove('disable');
    document.querySelector('#findUser').removeAttribute('disabled', true);

    if (username === 'Guest') {
      this.user.innerHTML = `<a title="Username" id="username">${username}</a><span>|</span>
                    <a title="Sign In" id="signup" onclick="ctrl.signupDisplay()">Sign Up</a><span>|</span>
                    <a title="Log In" id="login-logout" onclick="ctrl.loginDisplay()">Log In</a>`;
      document.querySelector('.typing-form').classList.add('disable');
      document.querySelector('.typing-form button').setAttribute('disabled', true);
      document.querySelector('textarea').setAttribute('disabled', true);
      document.querySelector('.messageto').classList.add('disable');
      document.querySelector('#findUser').setAttribute('disabled', true);
    }
  }
}
class MessageView {
  constructor(containerID) {
    this.list = document.getElementById(containerID);
  }

  display(messages, currentUser) {
    this.list.innerHTML = '';
    const msgTpl = document.getElementById('msg-template');
    const fragment = new DocumentFragment();
    messages.forEach((item) => {
      const elem = msgTpl.content.cloneNode(true);
      elem.querySelector('.message-text').textContent = item.text;
      if (item.isPersonal === true && item.to === currentUser) {
        elem.querySelector('.message-from').textContent = `${item.author} to me`;
        elem.querySelector('.message-actions').innerHTML = `
          <i class="fas fa-star"></i>`;
      } else {
        elem.querySelector('.message-from').textContent = item.author;
      }

      if (item.author === currentUser) {
        elem.querySelector('.message').className = 'my-message';
        elem.querySelector('.message-actions').innerHTML = `
          <a title="Edit message" data-message-id="${item.id}"onclick="ctrl.editMessage(this)"><i class="fas fa-marker"></i></a>
          <a title="Delete message" onclick="ctrl.removeMessage(${item.id})"><i class="far fa-trash-alt"></i></a>
        `;
        elem.querySelector('.message-actions').classList.add('my-actions');
      }
      if (item.author === currentUser && item.isPersonal) {
        elem.querySelector('.message-from').textContent = `${item.author} to ${item.to}`;
      }
      let date = new Date(+`${item.createdAt}`);
      elem.querySelector('.message-date').textContent = `${date.toDateString()},  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `;
      fragment.appendChild(elem);
    });

    this.list.appendChild(fragment);  
  }
}
class ActiveUsersView {
  constructor(containerID) {
    this.usersTo = document.getElementById(containerID);
  }

  display(users, currentUser) {
    this.usersTo.innerHTML = `<div class="user-item"><div class="status main-chat"></div><p>TO ALL</p></div>`;
    users.filter((item) => item.user !== currentUser).forEach((item) => {
      this.usersTo.innerHTML += `<div class="user-item"><div class="status active"></div><p>${item.user}</p></div>`;
    });
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

function loadStorage() {
  localStorage.setItem('messages', JSON.stringify(messages));
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  console.log(`load Storage`);
}
class ChatController {
  constructor() {
    this.messages = [];
    this.users = [];
    this.index = 1;
    this.model = new Model(this.restore());
    this.headerView = new HeaderView('login');
    this.messageView = new MessageView('message-list');
    this.signupBlock = document.querySelector('.signup');
    this.loginBlock = document.querySelector('.loginForm');
    this.activeUsers = new ActiveUsersView('users');

    this.signupLogin = document.getElementById('signupLogin'); 
    this.signupPwd = document.getElementById('signupPwd'); 
    this.confirmPwd = document.getElementById('confirm-pwd'); 
    this.signupAction = document.getElementById('signupAction');
    this.loginLogin = document.getElementById('loginLogin'); 
    this.loginPwd = document.getElementById('loginPwd'); 
    this.loginAction = document.getElementById('loginAction');

    this.messageText = document.querySelector('#message-text');
    this.displayTo = document.getElementById('displayTo'); 
    this.messageSubmit = document.querySelector('#messageSubmit');
    this.msg = {};
  }

  setCurrentUser(currentUser) {
    this.headerView.display(currentUser);
    this.model.user = currentUser;
    this.messageView.display(this.model.getPage(), currentUser);
    this.activeUsers.display(this.users, this.model.user);
    this.saveToLocal();
    console.log('model.user: ', this.model.user);

  }

  moreMessages() {
    const more = document.getElementById('more');
    more.addEventListener('click', () => {
      ++this.index;
      console.log('more click:', this.index);
      this.messageView.display(this.model.getPage(0, 10 * this.index), this.model.user);
    });
  }

  saveToLocal() {
    localStorage.setItem('messages', JSON.stringify(this.messages));
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('currentUser', JSON.stringify(this.model.user));
  }

  restore() {
    this.messages = JSON.parse(localStorage.getItem('messages')).map(item => new Message(item));
    this.users = JSON.parse(localStorage.getItem('users'));
    console.log(`restore`);
    return this.messages;
  }

  defaultPage() {
    this.signupBlock.style.display = 'none';
    this.loginBlock.style.display = 'none';
    document.querySelector('.actions-top').style.display = 'flex';
    document.querySelector('.content').style.display = 'flex';
    document.querySelector('.actions-bottom').style.display = 'flex';
  }

  logout() {
    this.setCurrentUser();
  }

  signupDisplay() {
    this.signupBlock.style.display = 'flex';
    this.loginBlock.style.display = 'none';
    document.querySelector('.actions-top').style.display = 'none';
    document.querySelector('.content').style.display = 'none';
    document.querySelector('.actions-bottom').style.display = 'none';
    this.signupLogin.value = '';
    this.signupPwd.value = '';
    this.confirmPwd.value = '';
    this.signupLogin.style.borderColor = 'var(--login-color)';
    this.signupPwd.style.borderColor = 'var(--login-color)';
    this.confirmPwd.style.borderColor = 'var(--login-color)';

    document.querySelector('#signupHome')
      .addEventListener('click', () => {
        this.setCurrentUser();
        this.defaultPage();
      });
    console.log('signupDisplay function');
  }

  signup() {
    this.signupAction.addEventListener('click', () => {
      console.log('login value - ', this.signupLogin.value);
      console.log('pwd value - ', this.signupPwd.value);
      console.log('confrm-pwd value - ', this.confirmPwd.value);
      console.log('before signup users ', this.users);

      if (!this.signupLogin.value || this.signupLogin.value === ' ') {
        this.signupDisplay();
        this.signupLogin.style.borderColor = 'var(--error-color)';
      }
      else if (this.users.filter((item) => item.user === this.signupLogin.value).length === 1) {
        this.loginDisplay();
      } 
      else if (!this.signupPwd.value 
          || !this.confirmPwd.value 
          || this.signupPwd.value !== this.confirmPwd.value) {
        this.signupLogin.style.borderColor = 'var(--login-color)';
        this.signupPwd.style.borderColor = 'var(--error-color)';
        this.confirmPwd.style.borderColor = 'var(--error-color)';
      } 
      else {
        this.signupLogin.style.borderColor = 'var(--login-color)';
        this.signupPwd.style.borderColor = 'var(--login-color)';
        this.confirmPwd.style.borderColor = 'var(--login-color)';
        const pair = {};
        pair.user = this.signupLogin.value;
        pair.pwd = this.signupPwd.value;
        console.log(pair);
        this.users.push(pair);
        this.defaultPage();
        this.model.user = this.signupLogin.value;
        this.setCurrentUser(this.model.user);
        this.saveToLocal();
      }
      console.log('after signup users ', this.users);
    });
  }

  loginDisplay() {
    this.loginBlock.style.display = 'flex';
    this.signupBlock.style.display = 'none';
    document.querySelector('.actions-top').style.display = 'none';
    document.querySelector('.content').style.display = 'none';
    document.querySelector('.actions-bottom').style.display = 'none';

    this.loginLogin.value = '';
    this.loginPwd.value = '';
    this.loginLogin.style.borderColor = 'var(--login-color)';
    this.loginPwd.style.borderColor = 'var(--login-color)';

    document.querySelector('#homeBtn')
      .addEventListener('click', () => {
        this.setCurrentUser();
        this.defaultPage();
      });
  }

  login() {
    this.loginAction.addEventListener('click', () => {
      console.log('login name value - ', this.loginLogin.value);
      console.log('password value - ', this.loginPwd.value);
      if (this.users.filter((item) => item.user === this.loginLogin.value).length !== 1) {
        this.loginDisplay();
        this.loginLogin.style.borderColor = 'var(--error-color)';
        console.log('login is not existed');
      }
      else if (this.users.filter((item) => item.user === this.loginLogin.value === 1)) {
        let pair = this.users.filter((item) => item.user === this.loginLogin.value);
        this.loginLogin.style.borderColor = 'var(--login-color)';
        console.log(pair[0]);
        if (pair[0].pwd === this.loginPwd.value) {
          console.log('match');
          this.model.user = this.loginLogin.value;
          this.setCurrentUser(this.model.user);
          this.defaultPage();
          this.saveToLocal();
        }
        else {
          this.loginPwd.style.borderColor = 'var(--error-color)';
          console.log('Incorrect password');
        }
      }
      console.log(this.users);
    });
  }

  addMessage() {
    const usersNode = document.getElementById('users');
    usersNode.addEventListener('click', (event) => {
      this.displayTo.innerHTML = event.target.textContent;
      this.msg.to = event.target.textContent;
      console.log('Choose whom: ', this.msg.to);
    });
    this.messageSubmit.onclick = this.addItem;
  }

  addItem = () => {
    this.msg.to = this.displayTo.innerHTML; 
    this.msg.text = this.messageText.value;
    if (!this.msg.to || this.msg.to === 'TO ALL') {
        this.msg.isPersonal = false;
        this.msg.to = '';
    }
      else {
        this.msg.isPersonal = true;
        this.msg.to = this.displayTo.innerHTML;
      }
      console.log('Ready to add', this.msg);
      if (this.model.add(this.msg)) {
        this.messageView.display(this.model.getPage(), this.model.user);
        console.log(this.msg);
        this.messageText.value = '';
        this.displayTo.innerHTML = '';
        localStorage.setItem('messages', JSON.stringify(this.messages));
      }
  }

  editMessage(e) {
    const id = e.dataset.messageId;
    console.log(e.dataset['messageId']); 
    console.log(e.dataset.messageId); 

    this.messageSubmit.onclick = null;
    const usersNode = document.getElementById('users');

    let editedMsg = this.messages.find(item => item.id === id.toString()); 
    console.log(editedMsg);
    this.messageText.value = editedMsg.text;
    if (editedMsg.isPersonal) {
      this.displayTo.innerHTML = editedMsg.to;
    }
    
    usersNode.addEventListener('click', (event) => {
      this.displayTo.innerHTML = event.target.textContent;
      this.msg.to = event.target.textContent;
      console.log('Choose whom: ', this.msg.to);
    });

    this.messageSubmit.onclick = () => {
      this.msg.to = this.displayTo.innerHTML;
      this.msg.text = this.messageText.value;
      if (!this.msg.to || this.msg.to === 'TO ALL') {
        this.msg.isPersonal = false;
        this.msg.to = '';
      }
      else {
        this.msg.isPersonal = true;
        this.msg.to = this.displayTo.innerHTML;
      }
      console.log('Ready to edit', this.msg);
      if (this.model.edit(id.toString(), this.msg)) {
        this.messageView.display(this.model.getPage(), this.model.user);
        this.messageText.value = '';
        this.displayTo.innerHTML = '';
        localStorage.setItem('messages', JSON.stringify(this.messages));
        
      }
      this.messageSubmit.onclick = this.addItem;
    }
    
  }

  filter() {
    const findUser = document.getElementById('findUser');
    const dateFrom = document.getElementById('dateFrom');
    const dateTo = document.getElementById('dateTo');
    const search = document.getElementById('search');

    let filterConfig = {}; 
    document.querySelector('#find').onclick = () => {
      filterConfig.author = findUser.value; 
      filterConfig.dateFrom = dateFrom.value; 
      filterConfig.dateTo = dateTo.value; 
      filterConfig.text = search.value;
      Object.keys(filterConfig).forEach( key => {
        if (filterConfig[key] === '') {
          delete filterConfig[key];
        }
      });
      console.log(filterConfig); 
      this.messageView.display(this.model.getPage(0, Infinity, filterConfig), this.model.user);
      findUser.value = '';
      dateFrom.value = '';
      dateTo.value = '';
      search.value = '';
    }
  }

  removeMessage(id) {
    console.log(id);
    if (window.confirm('Are you sure you want to delete message?')) {
      this.model.remove(id.toString());
      this.messageView.display(this.model.getPage(), this.model.user);
      this.saveToLocal();
    }
  }
}

// загружаем данные в LocalStorage
loadStorage();
const ctrl = new ChatController();
ctrl.setCurrentUser('Yuliya Philippova');
ctrl.moreMessages();
ctrl.signup();
ctrl.login();
ctrl.addMessage(); 
ctrl.filter();