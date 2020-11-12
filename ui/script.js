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
    to: 'Yuliya Philippova',
  },
  {
    id: '12',
    text: 'JavaScript supports much of the structured programming syntax from C.',
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
    id, text, author, isPersonal, to,
  }) {
    this._id = id || `${+new Date()}`;
    this._createdAt = new Date();
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
    return this.isPersonal;
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
    this._collection = [];
    this._user = 'Yuliya Philippova';
    messages.forEach((item) => this.add(item));
  }

  get user() {
    return this._user;
  }

  get(id) {
    return this._collection.find((item) => item.id === id);
  }

  getPage(skip = 0, top = 10, filterConfig = {}) {
    const filterObj = {
      author: (item, author) => (author && item.author.toLowerCase().includes(author.toLowerCase())) || author === this._user,
      text: (item, text) => text && item.text.toLowerCase().includes(text.toLowerCase()),
      dateFrom: (item, dateFrom) => dateFrom && item.createdAt.getTime() > Date.parse(dateFrom),
      dateTo: (item, dateTo) => dateTo && item.createdAt.getTime() < Date.parse(dateTo),
      to: (item) => (item.isPersonal && item.to === this._user) || !item.isPersonal,
    };

    let result = this._collection.slice(); 

    Object.keys(filterConfig).forEach((key) => {
      result = result.filter((item) => filterObj[key](item, filterConfig[key]));
    });
    result = result.sort((a, b) => a.createdAt - b.createdAt);
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
        text: msg.text, 
        author: msg.author || this._user, 
        isPersonal: msg.isPersonal, 
        to: msg.to,
      });
      this._collection.push(newMessage);
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
    console.log(temp);
    console.log('Edit was successful');
    return true;
  }

  remove(id) {
    if (!this.get(id)) {
      console.log('Id is not existed');
      return false;
    }
    this._collection.splice(this._collection.findIndex((item) => item.id === id), 1);
    console.log(`Messages after removing - ${this._collection.length} `);
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

const myList = new MessageList(messages);

console.log(myList);