const listElement = document.querySelector('.posts');
const fetchButton = document.querySelector('#available-posts button');
const postTemplate = document.querySelector('template');
const form = document.querySelector('form');

async function sendHttpRequest(method, url, data) {
  //with XHR
  // const promise = new Promise((resolve, reject) => {
  //     const xhr = new XMLHttpRequest()
  //     xhr.open(method, url)
  //     xhr.onload = function(){
  //         if(xhr.status >= 200 && xhr.status < 300){
  //             //return the data back
  //             resolve(xhr.response)
  //         }else{
  //             reject("Something went wrong..... :<")
  //         }
  //     }
  //     xhr.send();
  // })

  // return promise

  //with fetch() function
  // const response = await fetch(url, {method})
  // const result = await response.json()
  // return result

  // return await fetch(url, {method}).then(r => r.json())

  return await fetch(url, {
    method,
    ...(data && { headers: { 'Content-Type': 'application/json' } }),
    ...(data && { body: JSON.stringify(data) }),
  }).then((r) => r.json());

  //with axios
  // const { data } = await axios(url, { method })
  // return data
  // return axios.get(url)
}

async function fetchPosts() {
  const responseData = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts');

  console.log(responseData);
  if (responseData.length > 0) {
    for (const post of responseData) {
      const postElClone = document.importNode(postTemplate.content, true);
      postElClone.querySelector('h2').textContent = post.title;
      postElClone.querySelector('p').textContent = post.body;
      postElClone.querySelector('li').id = post.id;
      listElement.appendChild(postElClone);
    }
  }
}

async function addPost(title, content) {
  const result = await sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
    title: title,
    body: content,
  });
  console.log(result);
  // fetchPosts();
}

// READ/GET
fetchButton.addEventListener('click', fetchPosts);

// POST
form.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.tagName == 'BUTTON') {
    const title = this.querySelector('#title').value;
    const content = this.querySelector('#content').value;
    addPost(title, content);
  }
});
