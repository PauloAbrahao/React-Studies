import React from "react";
import { auth, db } from "../firebase";
import SendMessage from "./SendMessages";
import SignOut from "./SignOut";

function Chat() {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  console.log(messages);

  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <img
                src={
                  photoURL
                    ? photoURL
                    : "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png"
                }
              />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
}

export default Chat;
