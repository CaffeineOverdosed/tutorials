fetch('https://jsonplaceholder.typicode.com/users/1/todos')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    displayTodos(data);
  });

function displayTodos(todos) {
  todos.forEach(function(todo) {
    document.getElementById("todos").appendChild(
      createTodo(todo)
    );
  });
}

// https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createElement
function createTodo (todo) {
  // 创建一个新的 article 元素
  let newArticle = document.createElement("article"); 
  // 从另一个函数那儿生成 h1 元素
  let newH1 = createTitle(todo.title);
  newArticle.appendChild(createIcon(todo.completed));
  // 在 article 里面添加生成的 h1 元素
  // https://developer.mozilla.org/zh-CN/docs/Web/API/Node/appendChild
  newArticle.appendChild(newH1);
  let todoStatus = todo.completed ? "todo-completed" : "todo-incompleted";
  newArticle.setAttribute("class", todoStatus);
  // 添加事件监听器， 点击改变状态
  newArticle.addEventListener("click", toggleStatus);
  // 回传这个新的 article 元素
  return newArticle;
}

// 生成 Todo 标题元素
function createTitle(title) {
  // 创建一个新的 h1 元素
  let newTitle = document.createElement("h1");
  // 给 h1 元素加上 class 标签属性
  // 方便之后添加 css 样式
  newTitle.setAttribute("class", "title");
  // 标题内容从另一个函数那儿传过来的
  // 所以 createTextNode 括号里面写 title
  // 参照 title 这个参数的值
  // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createTextNode
  let titleContent = document.createTextNode(title);
  // 然后把这个文字内容添加到 h1 元素里面
  newTitle.appendChild(titleContent);
  // 回传创建好的 h1 元素
  return newTitle;
}

function createIcon(completed) {
  let newIcon = document.createElement("i");
  let iconAttr = completed ? "far fa-check-circle" : "far fa-circle";
  newIcon.setAttribute("class", iconAttr);
  return newIcon;
}

function toggleStatus() {
  let icon = this.childNodes[0];
  if (this.className === "todo-completed") {
    this.className = "todo-incompleted";
    icon.className = "far fa-circle";
  } else {
    this.className = "todo-completed";
    icon.className = "far fa-check-circle";
  }
}