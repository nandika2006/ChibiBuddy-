document.getElementById("add").addEventListener("click", () => {
  const task = document.getElementById("task").value;
  const time = new Date(document.getElementById("time").value);

  if (task && time) {
    const id = `alarm-${Date.now()}`;
    chrome.alarms.create(id, { when: time.getTime() });

    chrome.storage.local.set({ [id]: task }, () => {
      updateTimers();
      document.getElementById("task").value = "";
      document.getElementById("time").value = "";
    });
  }
});

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("night");
});

document.getElementById("exportTasks").addEventListener("click", () => {
  chrome.storage.local.get(null, (allData) => {
    const blob = new Blob([JSON.stringify(allData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "chibi_tasks.json";
    link.click();
  });
});

function updateTimers() {
  chrome.alarms.getAll((alarms) => {
    const taskUl = document.getElementById("taskList");
    taskUl.innerHTML = "";

    alarms.forEach(alarm => {
      chrome.storage.local.get(alarm.name, (data) => {
        const task = data[alarm.name];
        if (task) {
          const timeLeft = Math.max(0, alarm.scheduledTime - Date.now());
          const mins = Math.floor(timeLeft / 60000);
          const li = document.createElement("li");
          li.innerHTML = `🕒 ${task} - <strong>${mins} min left</strong>`;
          taskUl.appendChild(li);
        }
      });
    });
  });
}

function showClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
}

function showCompletedTasks() {
  chrome.storage.local.get("completed", (data) => {
    const list = document.getElementById("completedList");
    list.innerHTML = "";
    (data.completed || []).forEach(task => {
      const li = document.createElement("li");
      li.textContent = `✔️ ${task.name} (Done: ${task.completedAt})`;
      list.appendChild(li);
    });
  });
}

setInterval(updateTimers, 1000);
setInterval(showClock, 1000);

updateTimers();
showClock();
showCompletedTasks();
