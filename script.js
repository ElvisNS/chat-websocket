const socket = new WebSocket('ws://localhost:8080');

// Manejar los mensajes recibidos
socket.onmessage = (event) => {
    addMessageToChat(event.data);
    sendNotification(event.data);
};

// Función para enviar mensajes al servidor
function sendMessage() {
    const input = document.getElementById("messageInput");
    const message = input.value.trim();
    if (message) {
        socket.send(message);
        input.value = ""; // Limpiar el input después de enviar
    }
}

// Agregar mensajes al chat en pantalla
function addMessageToChat(message) {
    const messageList = document.getElementById("messages");
    const newMessage = document.createElement("li");
    newMessage.textContent = message;
    messageList.appendChild(newMessage);
}

// Enviar notificación en tiempo real
function sendNotification(message) {
    if (Notification.permission === "granted") {
        new Notification("Nuevo mensaje", { body: message });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification("Nuevo mensaje", { body: message });
            }
        });
    }
}
