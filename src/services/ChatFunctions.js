import io from "socket.io-client";
let socket;

export const socketInit = (room, name, lastname, phone_number, user_role) => {
  socket = io(process.env.REACT_APP_BACKEND_URL);

  if (socket && room) {
    console.log(`Connecting socket...`);
    let newName =
      user_role == "admin"
        ? name + " " + lastname + "(ادمین)"
        : name + " " + lastname;
    socket.emit(
      "join",
      { user_role, phone_number, name: newName, room },
      (error) => {
        if (error) {
          console.log(error);
        }
        console.log("joined a room.");
      }
    );
  } else {
    console.log("lack of info for creating a socket connection");
  }
};

export const socketGetMessages = (setMessages) => {
  if (socket)
    socket.on("message", (message) => {
      // console.log(message);
      setMessages((messages) => [...messages, message]);
    });
};

//getting room data
export const socketGetRoomData = (setUsers) => {
  if (socket)
    socket.on("roomData", ({ users }) => {
      // console.log(users);
      setUsers(users);
    });
};

//emmiting new data
export const socketSendMessage = (message, setMessage) => {
  if (socket) socket.emit("sendMessage", message, () => setMessage(""));
};

export const socketDisconnect = () => {
  console.log("Disconnecting socket...");
  if (socket) socket.disconnect();
};

// export const subscribeToChat = (cb) => {
//     if (!socket) return true;
//     socket.on("chat", (msg) => {
//       console.log("Websocket event received!");
//       return cb(null, msg);
//     });
//   };

// export const sendMessage = (room, message) => {
//     if (socket) socket.emit("chat", { message, room });
//   };
