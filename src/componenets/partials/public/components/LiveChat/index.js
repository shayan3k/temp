import React, { useState, useEffect } from "react";
import InfoBar from "./InfoBar/InfoBar";
import Messages from "./Messages/Messages";
import Input from "./Input/Input";
import TextContainer from "./TextContainer/TextContainer";
import {
  Name,
  LastName,
  IsAuthenticated,
  PhoneNumber,
  UserRole,
} from "../../../../../services/Recoils";
import {
  socketSendMessage,
  socketInit,
  socketGetMessages,
  socketDisconnect,
  socketGetRoomData,
} from "../../../../../services/ChatFunctions";
import { useRecoilState } from "recoil";

let socket;

const Index = (props) => {
  const [name, setName] = useRecoilState(Name);
  const [lastname, setLastname] = useRecoilState(LastName);
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(IsAuthenticated);
  const [user_role] = useRecoilState(UserRole);
  const [phone_number] = useRecoilState(PhoneNumber);
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (props.course?.title) setRoom(props.course.title);
  }, [props]);

  useEffect(() => {
    // console.log("checking", room, name);
    if (room && name) socketInit(room, name, lastname, phone_number, user_role);

    //getting incomming messages
    socketGetMessages(setMessages);

    //getting room data
    socketGetRoomData(setUsers);

    return () => {
      socketDisconnect();
    };
  }, [room, name]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socketSendMessage(message, setMessage);
    }
  };

  return (
    <div className="widget">
      <div className="widget-title">گفتمان زنده</div>
      <div className="widget-body">
        {isAuthenticated ? (
          name ? (
            props.course?.is_chat_active ? (
              <div className="outerContainer">
                <div className="container">
                  <InfoBar room={props.course?.title} />
                  <Messages messages={messages} name={name} />
                  <Input
                    message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage}
                    className="chat-message-container"
                  />
                </div>
                <TextContainer users={users} />
              </div>
            ) : (
              <div className="outerContainer">
                <div className="alert alert-info">
                  گفتمان برای این درس در حال حاظر بسته است.
                </div>
              </div>
            )
          ) : (
            <div className="outerContainer">
              <div className="alert alert-info text-center">
                برای استفاده از گفتمان لطفا ابتدا نام خود را در داشبورد وارد
                کنید.
              </div>
            </div>
          )
        ) : (
          <div className="outerContainer">
            <div className="alert alert-info text-center">
              برای استفاده از گفتمان لطفا ابتدا وارد شوید.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
