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

// ******************************************************


// ******************************************************

// ******************************************************
