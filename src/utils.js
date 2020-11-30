export async function request(url, method = 'GET', data = null){
    const headers = {};
    let body;

    try{
        if(data){
            // headers['Content-Type'] =  'application/json';
            body = JSON.stringify(data);
        }
        const response = await fetch(url, {
            method,
            // headers,
            body
        });
        return await response.json();
    }catch(e){
        throw new Error(e.message);
    }    
}

export function generateCode(max = 9999, min = 1000){
    return Math.floor(Math.random() * (max - min) + min);
}

export function storage(name, data = null){
    if(data){
        localStorage.setItem(name, data);
    }else {
        localStorage.getItem(name);
    }
}

export function create (tagName, classes = '') {
    const el = document.createElement(tagName);
    if (classes) {
      el.classList.add(classes)
    }
    return el;
  }

export function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;


        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;

        }
    }, 1000);
}

export function getUsers(){
    //вывод результатов базы
    const $dataList = document.querySelector('.data-list');
    let usersArr = [];
    console.log('this.urlLink', this.urlLink);
    const res = request(this.urlLink);
    res.then(users => {
      users.forEach(user => {
        usersArr.push(`<div>${user.name || 'имя'} : ${user.phone || 'телефон'} : ${user.code || 'номер'}</div>`);
      });

    $dataList.innerHTML = usersArr.join('');

    })
}

// ******************************************************


// ******************************************************

// ******************************************************
