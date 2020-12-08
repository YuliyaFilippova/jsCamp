class Message {
  constructor({ id, createdAt, text, author, isPersonal, to }) {
    this._id = id || `${+new Date()}`;
    this._createdAt = Date.parse(createdAt) || new Date();
    this._author = author;
    this.text = text;
    this.isPersonal = isPersonal || false;
    this.to = to || "";
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
class HeaderView {
  constructor(containerID) {
    this.user = document.getElementById(containerID);
  }

  display(username, callbacks) {
    username = username || "Guest";

    if (username === "Guest") {
      this.user.innerHTML = `<span title="Username" id="username">${username}</span><span>|</span>
                    <span title="Sign In" id="signup">Sign Up</span><span>|</span>
                    <span title="Log In" id="loginHeader">Log In</span>`;

      document
        .getElementById("loginHeader")
        .addEventListener("click", callbacks.login);
      document
        .querySelector("#signup")
        .addEventListener("click", callbacks.signup);
      document.querySelector(".typing-form").classList.add("disable");
      document
        .querySelector(".typing-form button")
        .setAttribute("disabled", true);
      document.querySelector("textarea").setAttribute("disabled", true);
      document.querySelector(".messageto").classList.add("disable");
      document.querySelector("#findUser").setAttribute("disabled", true);
    } else {
      this.user.innerHTML = `<span title="Username" id="username">${username}</span><span>|</span>
                          <span title="Log Out" id="logout">Log Out</span>`;

      document
        .querySelector("#logout")
        .addEventListener("click", callbacks.logout);
      document.querySelector(".typing-form").classList.remove("disable");
      document
        .querySelector(".typing-form button")
        .removeAttribute("disabled", true);
      document.querySelector("textarea").removeAttribute("disabled", true);
      document.querySelector(".messageto").classList.remove("disable");
      document.querySelector("#findUser").removeAttribute("disabled", true);
    }
  }
}
class MessageView {
  constructor(containerID) {
    this.list = document.getElementById(containerID);
  }

  display(messages, currentUser) {
    this.list.innerHTML = "";
    const msgTpl = document.getElementById("msg-template");
    const fragment = new DocumentFragment();
    messages = messages.sort((a, b) => a.createdAt - b.createdAt);
    messages.forEach((item) => {
      const elem = msgTpl.content.cloneNode(true);
      elem.querySelector(".message-text").textContent = item.text;
      if (item.isPersonal === true && item.to === currentUser) {
        elem.querySelector(
          ".message-from"
        ).textContent = `${item.author} to me`;
        elem.querySelector(".message-actions").innerHTML = `
          <i class="fas fa-star"></i>`;
      } else {
        elem.querySelector(".message-from").textContent = item.author;
      }

      if (item.author === currentUser) {
        elem.querySelector(".message").className = "my-message";
        elem.querySelector(".message-actions").innerHTML = `
          <a title="Edit message" data-edit-id="${item.id}"onclick="api.put(this)"><i class="fas fa-marker"></i></a>
          <a title="Delete message" data-delete-id="${item.id}" onclick="api.del(this)"><i class="far fa-trash-alt"></i></a>
        `;
        elem.querySelector(".message-actions").classList.add("my-actions");
      }
      if (item.author === currentUser && item.isPersonal) {
        elem.querySelector(
          ".message-from"
        ).textContent = `${item.author} to ${item.to}`;
      }
      let date = new Date(+`${item.createdAt}`);
      elem.querySelector(
        ".message-date"
      ).textContent = `${date.toDateString()},  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `;
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
    let usersActive = users.filter((item) => item.isActive === true);
    usersActive.sort((a, b) => (a.name > b.name ? 1 : -1));
    let usersUnactive = users.filter((item) => item.isActive === false);
    usersUnactive.sort((a, b) => (a.name > b.name ? 1 : -1));
    console.log("Active users", usersActive);
    usersActive
      .filter((item) => item.name !== currentUser)
      .forEach((item) => {
        this.usersTo.innerHTML += `<div class="user-item"><div class="status active"></div><p>${item.name}</p></div>`;
      });
    /*usersUnactive
      .filter((item) => item.name !== currentUser)
      .forEach((item) => {
        this.usersTo.innerHTML += `<div class="user-item"><div class="status away"></div><p>${item.name}</p></div>`;
      });*/
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

class ChatApiService {
  constructor(url = "https://jslabdb.datamola.com") {
    this.url = url;
    this.messages = [];
    this.users = [];
    this.currentUser = localStorage.getItem("currentUser");
    this.index = 1;
    this.headerView = new HeaderView("login");
    this.messageView = new MessageView("message-list");
    this.activeUsers = new ActiveUsersView("users");
    this.intervalMsg = null;
    this.intervalUsers = null;

    this.signupBlock = document.querySelector(".signup");
    this.loginBlock = document.querySelector(".loginForm");
    this.errorPage = document.querySelector(".error");
    this.signupLogin = document.getElementById("signupLogin");
    this.signupPwd = document.getElementById("signupPwd");
    this.confirmPwd = document.getElementById("confirm-pwd");
    this.signupAction = document.getElementById("signupAction");
    this.loginLogin = document.getElementById("loginLogin");
    this.loginPwd = document.getElementById("loginPwd");
    this.loginAction = document.getElementById("loginAction");

    this.messageText = document.querySelector("#message-text");
    this.displayTo = document.getElementById("displayTo");
    this.messageSubmit = document.querySelector("#messageSubmit");
    this.msg = {};
  }

  start() {
    this.login();
    this.register();
    this.setCurrentUserApi(this.currentUser);
    this.polling();
    if (this.currentUser !== "Guest") {
      this.filterApi();
      this.moreMessagesApi();
      this.defaultPageApi();
    } else {
      this.filterApi();
      this.moreMessagesApi();
      this.loginDisplay();
    }
  }

  setCurrentUserApi(currentUser) {
    this.currentUser = currentUser;
    localStorage.setItem("currentUser", this.currentUser);
    this.getMessagesApi();
    this.getUsersApi();
    console.log("current user", currentUser);
    this.headerView.display(this.currentUser, {
      logout: () => this.logout(),
      signup: () => this.signupDisplay(),
      login: () => this.loginDisplay(),
    });
    this.activeUsers.display(this.users, this.currentUser);
    this.defaultPageApi();
  }

  saveToLocalApi() {
    localStorage.setItem("users", JSON.stringify(this.users));
    localStorage.setItem("tokenCamp", this.tokenCamp);
    if (this.currentUser) {
      localStorage.setItem("currentUser", this.currentUser);
    } else {
      localStorage.setItem("currentUser", "Guest");
    }
  }

  defaultPageApi() {
    this.errorPage.style.display = "none";
    this.signupBlock.style.display = "none";
    this.loginBlock.style.display = "none";
    document.querySelector(".actions-top").style.display = "flex";
    document.querySelector(".content").style.display = "flex";
    document.querySelector(".actions-bottom").style.display = "flex";
  }

  polling() {
    if (this.intervalMsg) {
      clearInterval(this.intervalMsg);
    }
    if (this.intervalUsers) {
      clearInterval(this.intervalUsers);
    }
    this.intervalMsg = setInterval(() => this.getMessagesApi(), 15 * 1000);
    this.intervalUsers = setInterval(() => this.getUsersApi(), 60 * 1000);
    console.log('polling');
  }

  loginDisplay() {
    this.errorPage.style.display = "none";
    this.loginBlock.style.display = "flex";
    this.signupBlock.style.display = "none";
    document.querySelector(".actions-top").style.display = "none";
    document.querySelector(".content").style.display = "none";
    document.querySelector(".actions-bottom").style.display = "none";

    this.loginLogin.value = "";
    this.loginPwd.value = "";
    this.loginLogin.style.borderColor = "var(--login-color)";
    this.loginPwd.style.borderColor = "var(--login-color)";

    document.querySelector("#homeBtn").addEventListener("click", () => {
      this.setCurrentUserApi(this.currentUser);
    });
  }

  signupDisplay() {
    this.errorPage.style.display = "none";
    this.signupBlock.style.display = "flex";
    this.loginBlock.style.display = "none";
    document.querySelector(".actions-top").style.display = "none";
    document.querySelector(".content").style.display = "none";
    document.querySelector(".actions-bottom").style.display = "none";
    this.signupLogin.value = "";
    this.signupPwd.value = "";
    this.confirmPwd.value = "";
    this.signupLogin.style.borderColor = "var(--login-color)";
    this.signupPwd.style.borderColor = "var(--login-color)";
    this.confirmPwd.style.borderColor = "var(--login-color)";

    document.querySelector("#signupHome").addEventListener("click", () => {
      this.setCurrentUserApi(this.currentUser);
    });
    console.log("signupDisplay function");
    console.log("before signup users ", this.users);
  }

  register() {
    this.signupAction.addEventListener("click", () => {
      console.log("login value - ", this.signupLogin.value);
      console.log("pwd value - ", this.signupPwd.value);
      console.log("confrm-pwd value - ", this.confirmPwd.value);

      if (!this.signupLogin.value || this.signupLogin.value === " ") {
        this.signupDisplay();
        this.signupLogin.style.borderColor = "var(--error-color)";
      } 
      else if (this.users.filter((item) => item.name === this.signupLogin.value).length === 1) {
        this.loginDisplay();
      } 
      else if (
        !this.signupPwd.value ||
        !this.confirmPwd.value ||
        this.signupPwd.value !== this.confirmPwd.value) 
      {
        this.signupLogin.style.borderColor = "var(--login-color)";
        this.signupPwd.style.borderColor = "var(--error-color)";
        this.confirmPwd.style.borderColor = "var(--error-color)";
      } else 
      {
        this.signupLogin.style.borderColor = "var(--login-color)";
        this.signupPwd.style.borderColor = "var(--login-color)";
        this.confirmPwd.style.borderColor = "var(--login-color)";

        const formdata = new FormData();
        let password = null;
        if (this.signupPwd.value === this.confirmPwd.value) {
          password = this.confirmPwd.value;
          formdata.append("name", this.signupLogin.value);
          formdata.append("pass", password);
        }

        fetch(`${this.url}/auth/register`, {
          method: "POST",
          body: formdata,
          redirect: "follow",
        })
          //.then((response) => response.json())
          .then((result) => {
            console.log(result);
            this.currentUser = this.signupLogin.value;
            this.setCurrentUserApi(this.currentUser);
            this.saveToLocalApi();
            this.defaultPageApi();
          })
          .catch((error) => console.log("error", error));
      }
      console.log("after signup users ", this.users);
    });
  }

  login() {
    this.loginAction.addEventListener("click", () => {
      console.log("login name value - ", this.loginLogin.value);
      console.log("password value - ", this.loginPwd.value);
      console.log("Api Users ", this.users);

      if (this.users.filter((item) => item.name === this.loginLogin.value).length !== 1) {
        this.loginDisplay();
        this.loginLogin.style.borderColor = "var(--error-color)";
        console.log("login is not existed");
      } 
        const formdata = new FormData();
        formdata.append("name", this.loginLogin.value);
        formdata.append("pass", this.loginPwd.value);

        fetch(`${this.url}/auth/login`, {
          method: "POST",
          body: formdata,
          redirect: "follow",
        })
          .then((response) => response.json())
          .then((result) => {
            console.log("Login Success:", result);
            if (!result.token) {
              this.errorDisplay();
              document.getElementById('textError').innerHTML = 'Please enter correct password2' ;
              throw Error('Please enter correct password2');
            }
            else {
              this.currentUser = this.loginLogin.value;
              this.tokenCamp = result.token;
              this.saveToLocalApi();
              this.setCurrentUserApi(this.currentUser);
              this.filterApi();
              this.moreMessagesApi();
              this.polling();
              this.defaultPageApi();
            }
            
          })
          .catch((error) => {
            this.errorDisplay();
            document.querySelector('.error p').innerHTML = 'Please enter correct password';
          });

    });
  }

  errorDisplay() {
    this.errorPage.style.display = "flex";
    this.signupBlock.style.display = "none";
    this.loginBlock.style.display = "none";
    document.querySelector(".actions-top").style.display = "none";
    document.querySelector(".content").style.display = "none";
    document.querySelector(".actions-bottom").style.display = "none";
    document.getElementById('loginError').addEventListener('click', () => this.loginDisplay());
  }

  getMessagesApi() {
    const headers = new Headers();
    headers.append(
      "Authorization",
      `Bearer ${localStorage.getItem("tokenCamp")}`
    );
    fetch(this.url + "/messages?skip=0&top=10", {
      method: "GET",
      headers,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        this.messages = result;
        this.messageView.display(this.messages, this.currentUser);
        console.log(this.messages);
      })
      .catch((error) => console.log("error", error));
  }

  getUsersApi() {
    const headers = new Headers();
    headers.append(
      "Authorization",
      `Bearer ${localStorage.getItem("tokenCamp")}`
    );
    fetch(this.url + "/users", {
      method: "GET",
      headers,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {
        this.users = result;
        this.activeUsers.display(this.users, this.currentUser);
      })
      .catch((error) => console.log("error", error));
  }

  filterApi() {
    const findUser = document.getElementById("findUser");
    const dateFrom = document.getElementById("dateFrom");
    const dateTo = document.getElementById("dateTo");
    const search = document.getElementById("search");

    let filterConfig = {};
    document.querySelector("#find").addEventListener("click", () => {
      filterConfig.author = findUser.value;
      filterConfig.dateFrom = dateFrom.value;
      filterConfig.dateTo = dateTo.value;
      filterConfig.text = search.value;
      Object.keys(filterConfig).forEach((key) => {
        if (filterConfig[key] === "") {
          delete filterConfig[key];
        }
      });
      console.log(filterConfig);
      let str = "";
      Object.keys(filterConfig).forEach((key) => {
        if (key === 'dateFrom' || key === 'dateTo') {
          filterConfig[key] = filterConfig[key].replace(/-/g, '');
        }
        str += `&${key}=${filterConfig[key]}`;
      });
      console.log("filtered string =", str);

      const headers = new Headers();
      headers.append(
        "Authorization",
        `Bearer ${localStorage.getItem("tokenCamp")}`
      );
      fetch(`${this.url}/messages?skip=0&top=infinity${str}`, {
        method: "GET",
        headers,
        redirect: "follow",
      })
        .then((response) => response.json())
        .then((result) => {
          this.messages = result;
          this.messageView.display(this.messages, this.currentUser);
          console.log(this.messages);
          this.index = 0;
        })
        .catch((error) => console.log("error", error));

      findUser.value = "";
      dateFrom.value = "";
      dateTo.value = "";
      search.value = "";
    });
  }

  moreMessagesApi() {
    const more = document.getElementById("more");
    
    more.addEventListener("click", () => {
      ++this.index;
      console.log("more click:", this.index);

      const headers = new Headers();
      headers.append(
        "Authorization",
        `Bearer ${localStorage.getItem("tokenCamp")}`
      );
      fetch(this.url + `/messages?skip=0&top=${10 * this.index}`, {
        method: "GET",
        headers,
        redirect: "follow",
      })
        .then((response) => response.json())
        .then((result) => {
          this.messages = result;
          this.messageView.display(this.messages, this.currentUser);
          console.log(this.messages);
        })
        .catch((error) => console.log("error", error));
    });
  }

  logout() {
    console.log("logout click");
    const headers = new Headers();
    headers.append(
      "Authorization",
      `Bearer ${localStorage.getItem("tokenCamp")}`
    );
    fetch(this.url + "/auth/logout", {
      method: "POST",
      headers,
      redirect: "follow",
    })
      .then((response) => console.log(response))
      .then((result) => {
        console.log("logout result:", result);
        localStorage.removeItem("tokenCamp");
        this.setCurrentUserApi("Guest");
        this.loginDisplay();
      })
      .catch((error) => console.log("error", error));
  }

  post() {
    const usersNode = document.getElementById('users');
    usersNode.addEventListener('click', (event) => {
      this.displayTo.innerHTML = event.target.textContent;
      this.msg.to = event.target.textContent;
      console.log('Choose whom: ', this.msg.to);
    });

    this.messageSubmit.addEventListener('click', this.addItem); 
  }

  addItem = () => {
    console.log('Click add', this.msg.to);
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

      const headers = new Headers();
      headers.append("Authorization", `Bearer ${localStorage.getItem("tokenCamp")}`);
      headers.append("Content-type", "application/json;charset=utf-8"); 

      let raw = `{\n    \"text\": \"${this.msg.text}\",\n    \"isPersonal\": ${this.msg.isPersonal},\n    \"to\": \"${this.msg.to}\"\n}`; 

      const requestOptions = {
        method: 'POST',
        headers,
        body: raw,
        redirect: 'follow'
      };

      fetch(`${this.url}/messages`, requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          this.messageText.value = '';
          this.displayTo.innerHTML = '';
          this.start();
        })
        .catch(error => console.log('error', error));
  }

  put(e) {
    const id = e.dataset.editId;
    console.log(e.dataset.editId); 

    let editedMsg = this.messages.find(item => item.id === id.toString()); 
    console.log(editedMsg);
    this.messageText.value = editedMsg.text;
    if (editedMsg.isPersonal) {
      this.displayTo.innerHTML = editedMsg.to;
    }

    const usersNode = document.getElementById('users');
    usersNode.addEventListener('click', (event) => {
      this.displayTo.innerHTML = event.target.textContent;
      this.msg.to = event.target.textContent;
      console.log('Choose whom: ', this.msg.to);
    });

    this.messageSubmit.removeEventListener('click', this.addItem);
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

      const headers = new Headers();
      headers.append("Authorization", `Bearer ${localStorage.getItem('tokenCamp')}`);
      headers.append("Content-type", "application/json;charset=utf-8"); 

      let raw = `{\n    \"text\": \"${this.msg.text}\",\n    \"isPersonal\": ${this.msg.isPersonal},\n    \"to\": \"${this.msg.to}\"\n}`;

      const requestOptions = {
        method: 'PUT',
        headers,
        body: raw,
        redirect: 'follow'
      };

      fetch(`${this.url}/messages/${e.dataset.editId}`, requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          this.messageText.value = '';
          this.displayTo.innerHTML = '';
          this.start();
          this.messageSubmit.addEventListener('click', this.addItem);
        })
        .catch(error => console.log('error', error));
    }; 

    
  }

  del(e) {
    console.log('Delete click', e.dataset.deleteId); 
    document.querySelector('.modal-wrapper').style.display = 'block';

    document.getElementById('cancel').onclick = () => {
      document.querySelector('.modal-wrapper').style.display = 'none';
    }

    document.getElementById('deleteItem').onclick = () => {
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${localStorage.getItem('tokenCamp')}`);

      const requestOptions = {
        method: 'DELETE',
        headers,
        redirect: 'follow'
      };
      document.querySelector('.modal-wrapper').style.display = 'none';
      fetch(`${this.url}/messages/${e.dataset.deleteId}`, requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          this.start();
          
        })
        .catch(error => console.log('error', error));
    }
  }

  /*async test(){
    let responce = await fetch(`${this.url}/messages?skip=0&top=10`);
    //responce.then(data => console.log(data));
    console.log(responce);
  }*/
  
}

const api = new ChatApiService();
api.start();
api.post();

//api.test();
