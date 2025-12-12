let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
    const todolist=document.querySelector('.todo-list');
    todolist.innerHTML ="";

    todos.forEach((todo,index)=>{
        const li=document.createElement("li");
        li.className= `check ${todo.completed ? "completed" : ""}`;  
        li.innerHTML=`
            <input type="checkbox" class="todo-checkbox" ${todo.completed ? "checked" : ""} onchange="toggleTodo(${index})">
            <span class="check-next">${escapeHtml(todo.text)}</span>
            <button class="delete" onclick="deleteTodo(${index})">delete</button>`;
            todolist.appendChild(li);
    });
    updateStats();
    saveTodos();
};

function escapeHtml(text){
    const div=document.createElement("div");
    div.textContent=text;
    return div.innerHTML;
}

function addTodo() {
            const input = document.getElementById('todoInput');
            const text = input.value.trim();
            
            if (text === '') {
                alert('Vui lòng nhập công việc!');
                input.focus();
                return;
            }
            
            if (todos.some(todo => todo.text.toLowerCase() === text.toLowerCase())) {
                alert('Công việc này đã tồn tại!');
                return;
            }
            
            todos.push({ text, completed: false, createdAt: new Date() });
            input.value = '';
            renderTodos();
        }
        
        function toggleTodo(index) {
            todos[index].completed = !todos[index].completed;
            renderTodos();
        }
        
        function deleteTodo(index) {
            if (confirm('Bạn có chắc muốn xóa?')) {
                todos.splice(index, 1);
                renderTodos();
            }
        }
        
        function updateStats() {
            const total = todos.length;
            const completed = todos.filter(t => t.completed).length;
            document.getElementById('totalTasks').textContent = total;
            document.getElementById('completedTasks').textContent = completed;
            document.getElementById('remainingTasks').textContent = total - completed;
        }
        
        function saveTodos() {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
        
        document.getElementById('todoInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') addTodo();
        });
        
        renderTodos();