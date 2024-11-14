document.addEventListener('DOMContentLoaded', function() {
const taskInput = document.getElementById('task-input'); // nhập dữ liệu (input) với id="task-input": nơi user sẽ nhập nhiệm vụ mới.
const addTaskBtn = document.getElementById('add-task-btn'); // nút bấm (button) với id="add-task-btn".user sẽ nhấn nút này để thêm nhiệm vụ mới 
const taskList = document.getElementById('task-list'); // list không có thứ tự (ul) với id="task-list". nơi các nhiệm vụ sẽ được thêm vào khi user "Add".

// Tải các công việc từ Local Storage
loadTasks();

// Thêm công việc mới
addTaskBtn.addEventListener('click', function() { // gắn event click cho nút 'Add', click để dùng function( hàm)
    const taskText = taskInput.value.trim(); // lấy data từ input , sử dụng trim để loại bỏ khoảng trắng
    if (taskText) { // check data nhập vào có '' hay ko
        addTask(taskText); // dùng hàm addTask để thêm dữ liệu
        taskInput.value = ''; // Làm sạch trường đầu vào
    }
});

// Xử lý sự kiện thêm công việc bằng phím Enter :
//  gắn event listener cho keypress trên taskInput. Khi user nhấn Enter trong input, nó kiểm tra nếu event.key là 'Enter', thì gọi addTaskBtn.click(), giả lập hành động nhấp vào nút "Add", giúp thêm công việc bằng cách nhấn Enter.
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTaskBtn.click(); // Kích hoạt nút thêm
    }
});

// Hàm thêm công việc
function addTask(text) {
    const taskItem = document.createElement('li');// tao danh sách li
    taskItem.className = 'task'; // đặt tên cho danh sách li vừa tạo
    taskItem.textContent = text;

    const deleteBtn = document.createElement('button'); // tạo button để delete
    deleteBtn.className = 'delete-btn'; // đặt tên cho button vừa tạo
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', function() {// thêm event click cho button delete
        taskList.removeChild(taskItem);// xóa phần tử tương ứng
        saveTasks(); // Lưu sau khi xóa
    });

    taskItem.appendChild(deleteBtn);

    // Xử lý đánh dấu công việc đã hoàn thành
    taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
        saveTasks(); // Lưu sau khi hoàn thành
    });

    taskList.appendChild(taskItem);
    saveTasks(); // Lưu sau khi thêm
}

// Hàm lưu các công việc vào Local Storage
function saveTasks() {
    const tasks = []; 
    document.querySelectorAll('#task-list .task').forEach(function(task) { //lấy tất cả  li với class task từ list và tạo một mảng tasks chứa thông tin
        tasks.push({ 
            text: task.firstChild.textContent,
            completed: task.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));//lưu mảng vào localStorage dưới dạng json
}

// Hàm tải các công việc từ Local Storage
function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        JSON.parse(storedTasks).forEach(function(task) {
            const taskItem = document.createElement('li');
            taskItem.className = 'task';
            if (task.completed) {
                taskItem.classList.add('completed');
            }
            taskItem.textContent = task.text;

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'X';
            deleteBtn.addEventListener('click', function() {
                taskList.removeChild(taskItem);
                saveTasks(); // Lưu sau khi xóa
            });

            taskItem.appendChild(deleteBtn);

            // Xử lý đánh dấu công việc đã hoàn thành
            taskItem.addEventListener('click', function() {
                taskItem.classList.toggle('completed');
                saveTasks(); // Lưu sau khi hoàn thành
            });

            taskList.appendChild(taskItem);
        });
    }
}
});
