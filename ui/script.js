const content = (function(){

    const messages = [
    {
        id: 0,
        text: 'Hello everyone!',
        createdAt: new Date('2020-10-12T12:00:00'),
        author: 'John Smitt',
        isPersonal: false,
        to: ''
    }, 
    {
        id: 1,
        text: 'How to will learn programming fundamentals and basic object-oriented concepts using the latest JavaScript syntax?',
        createdAt: new Date('2020-10-12T12:01:00'),
        author: 'John Smitt',
        isPersonal: false,
        to: ''
    }, 
    {
        id: 2,
        text: 'Hi, When is a closeable question also a “very low quality” question?',
        createdAt: new Date('2020-10-12T13:00:00'),
        author: 'Иванов Иван',
        isPersonal: false,
        to: ''
    }, 
    {
        id: 3,
        text: 'Pellentesque id nibh tortor id aliquet lectus.',
        createdAt: new Date('2020-10-12T23:00:00'),
        author: 'Anna Lebedeva',
        isPersonal: false,
        to: ''
    }, 
    {
        id: 4,
        text: 'Various levels of sessions with different target groups and featuring some of the experts in the field. Join professionals and enthusiasts, learn something new and do some networking.',
        createdAt: new Date('2020-10-12T23:00:00'),
        author: 'Anna Lebedeva',
        isPersonal: true,
        to: 'Yuliya Philippova'
    }, 
    {
        id: 5,
        text: 'After being part of the organization of the first ever JavaScript Saturday in Bulgaria and organizing the first conference in Bulgaria dedicated to jQuery, with the extremely positive feedback from all of you, The jQuery Sofia group is back for yet another event this year! ',
        createdAt: new Date('2020-10-12T23:00:00'),
        author: 'Yuliya Philippova',
        isPersonal: false,
        to: ''
    }, 
    {
        id: 6,
        text: 'Lorem Purus in massa tempor nec feugiat nisl pretium.',
        createdAt: new Date('2020-10-12T23:00:00'),
        author: 'Yuliya Philippova',
        isPersonal: false,
        to: ''
    }, 
    {
        id: 7,
        text: 'Lorem Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        createdAt: new Date('2020-10-12T23:00:00'),
        author: 'John Smitt',
        isPersonal: true,
        to: 'Yuliya Philippova'
    }, 
    {
        id: 8,
        text: 'Although there are similarities between JavaScript and Java, including language name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design.',
        createdAt: new Date('2020-10-12T23:00:00'),
        author: 'John Smitt',
        isPersonal: true,
        to: 'Yuliya Philippova'
    }, 
    {
        id: 9,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        createdAt: new Date('2020-10-13T23:00:00'),
        author: 'Serge Chiteenashvilli',
        isPersonal: false,
        to: ''
    }, 
    {
        id: 10,
        text: 'The use of JavaScript has expanded beyond its web browser roots.',
        createdAt: new Date('2020-10-12T23:00:00'),
        author: 'John Smitt',
        isPersonal: true,
        to: 'Yuliya Philippova'
    }, 
    {
        id: 11,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        createdAt: new Date('2020-10-13T23:00:00'),
        author: 'Vlad Ivanov',
        isPersonal: false,
        to: ''
    }, 
    {
        id: 12,
        text: 'JavaScript supports much of the structured programming syntax from C.',
        createdAt: new Date('2020-10-14T23:00:00'),
        author: 'John Smitt',
        isPersonal: true,
        to: 'Yuliya Philippova'
    }, 
    {
        id: 13,
        text: 'JavaScript is weakly typed, which means certain types are implicitly cast depending on the operation used',
        createdAt: new Date('2020-10-15T23:00:00'),
        author: 'Vlad Ivanov',
        isPersonal: false,
        to: ''
    }, 
    {
        id: 14,
        text: 'Hi.',
        createdAt: new Date('2020-10-16T23:00:00'),
        author: 'John Smitt',
        isPersonal: true,
        to: 'Yuliya Philippova'
    }, 
    {
        id: 15,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        createdAt: new Date('2020-10-17T23:00:00'),
        author: 'Irina Poddubnaya',
        isPersonal: false,
        to: ''
    }, 
    {
        id: 16,
        text: 'How are you?',
        createdAt: new Date('2020-10-18T23:00:00'),
        author: 'John Smitt',
        isPersonal: true,
        to: 'Yuliya Philippova'
    }, 
    {
        id: 17,
        text: 'Values are casted to numbers by casting to strings and then casting the strings to numbers. These processes can be modified by defining toString and valueOf functions on the prototype for string and number casting respectively.',
        createdAt: new Date('2020-10-19T23:00:00'),
        author: 'Irina Poddubnaya',
        isPersonal: false,
        to: ''
    }, 
    {
        id: 18,
        text: 'Other objects are converted to the string [object Object] where Object is the name of the constructor of the object',
        createdAt: new Date('2020-10-20T23:00:00'),
        author: 'Artur King',
        isPersonal: false,
        to: ''
    }, 
    {
        id: 19,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        createdAt: new Date('2020-10-21T23:00:00'),
        author: 'Lesley Knife',
        isPersonal: false,
        to: ''
    }, 
    {
        id: 20,
        text: 'In JavaScript, an object is an associative array, augmented with a prototype (see below); each string key provides the name ',
        createdAt: new Date('2020-10-22T23:00:00'),
        author: 'Yuliya Philippova',
        isPersonal: false,
        to: ''
    }, 
    {
        id: 21,
        text: 'Functions double as object constructors, along with their typical role.',
        createdAt: new Date('2020-10-23T23:00:00'),
        author: 'Irvin Wood',
        isPersonal: false,
        to: ''
    }, 



]; 


    function getMessages(skip, top, filterConfig) {
        skip = skip || 0; 
        top = top || 10;

        let sortedMsg = messages.sort((a, b) => {
            return a.createdAt.getTime() - b.createdAt.getTime();
        });

        let filteredMsg;

        if (filterConfig) {
            filteredMsg = sortedMsg.filter((item)=> {
                if (filterConfig.hasOwnProperty('author') && !item.author.toLowerCase().includes(filterConfig.author.toLowerCase())) {
                    return false;
                }
                if (filterConfig.hasOwnProperty('text') && !item.text.toLowerCase().includes(filterConfig.text.toLowerCase())) {
                    return false;
                }
                if (filterConfig.hasOwnProperty('dateFrom') && !item.createdAt.getTime() < filterConfig.dateFrom.getTime()) {
                    return false;
                }
                if (filterConfig.hasOwnProperty('dateTo') && !item.createdAt.getTime() > filterConfig.dateTo.getTime()) {
                    return false;
                }
                return true;
                
            });
        }
        return (filteredMsg || sortedMsg).slice(skip, skip + top); 

    }

    function getMessage(id) {
        for (let i=0; i<messages.length; i++) {
            if (messages[i].id === id) {
                return messages[i]; 
            }
        }
        return null;
    }

    function validateMessage(msgX) {

        if (!msgX.text) {
            console.log('Enter a text');
            return false;
        }

        if (msgX.text.length > 200 || msgX.text.length === 0) {
            console.log('Text exceeds the limit');
            return false;
        }

        return true;
    }

    function addMessage(msgX) {

        console.log(`Current counts of messages - ${messages.length} `);

        if (!validateMessage(msgX)) {
            console.log(`Invalid parameters`);s
            return false;
        }

        if (!msgX.author) {
            console.log('Enter an author');
            return false;
        }

        let msg = {}; 
        msg.id = messages.length; 
        msg.text = msgX.text; 
        msg.createdAt = msgX.createdAt || new Date(); 
        msg.author = msgX.author;
        msg.isPersonal = msgX.isPersonal; 
        msg.to = msgX.to; 

        messages.push(msg); 
        console.log(msg);
        console.log(`Counts of  messages after adding - ${messages.length} `);
        return true;

    }

    function editMessage(id, msg) {

        if (!validateMessage(msg)) {
            console.log(`Invalid parameters`);
            return false;
        }
        let temp = getMessage(id); 
        if (!temp) {
            console.log(`Id is not existed`);
            return false; 
        }
        Object.assign(temp, msg);
        console.log(temp);
        console.log(`Edit was successful`);
        return true;
    }

    function removeMessage(id) {
        console.log(`Current counts of messages - ${messages.length} `);

        let temp = getMessage(id); 
        if (!temp) {
            return false; 
        }
        messages.splice(messages.indexOf(temp), 1);
        console.log(`Counts of messages after removing - ${messages.length} `);
        return true;
    }


    return {
        getMessages, getMessage, 
        validateMessage, addMessage, 
        editMessage, removeMessage
    }; 

})(); 

const msgX = {
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'John Smitt',
    isPersonal: true,
    to: 'Yuliya Philippova'
}; 

content.addMessage({text: 'wwwwwwww', author: 'John Smith', isPersonal: true, to: 'Yuliya Philippova'}); // добавляет новое ссобщение в массив 
content.editMessage(22, {text: '123'}); // редактируем текст у нового сообщения
content.removeMessage(22); // удаляем последнедобавленное сообщение
content.getMessages(); // отобразит массив первых 10 сообщений
content.getMessages(2, 5); //покажет 5 сообщений, начиная со 2-го
content.getMessages(0, 20, {author: 'yuli'}); // вернет все сообщения,автор которых содержит Yuli 
content.getMessages(0, 20, {text: 'lorem'});  // вернет все сообщения,текст которых содержит lorem 
 