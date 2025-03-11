Explicacion
Use ws para crear un servidor WebSocket usando el puerto 8080, este escucha las conexiones cuando el cliente envia un mensaje y muestra en consola el mensaje recibido.
Luego envia dos respuestas al cliente, la primera es la confirmacion del mensaje y la segunda un mensaje del servidor saludando al usuario.

socket.onmessage(event) → Cuando el servidor envía un mensaje:
Se agrega el mensaje al chat en pantalla con addMessageToChat().
Se muestra una notificación con sendNotification().

sendMessage() → Envía el mensaje escrito al servidor y limpia el input.
sendNotification(message) →

Si las notificaciones están permitidas, muestra una con el mensaje recibido.
Si no están permitidas, solicita permiso al usuario.

Comandos necesarios para el funcionamiento del proyecto
npm init -y
npm install ws

¿Qué son los WebSockets?
Los WebSockets son un protocolo de comunicación en tiempo real que permite una conexión bidireccional entre el cliente y el servidor. A diferencia de HTTP, donde cada solicitud del cliente requiere una nueva conexión, WebSockets mantienen una conexión abierta, permitiendo enviar y recibir datos de manera instantánea sin necesidad de múltiples peticiones.

¿Para qué sirven los WebSockets?
Los WebSockets se utilizan cuando se necesita una comunicación en tiempo real entre el cliente y el servidor. Algunos ejemplos comunes incluyen:

Chats en vivo (WhatsApp Web, Messenger, Discord)
Notificaciones en tiempo real
Aplicaciones de trading en vivo
Juegos en línea multijugador
Colaboración en tiempo real (Google Docs, Trello, Figma)
