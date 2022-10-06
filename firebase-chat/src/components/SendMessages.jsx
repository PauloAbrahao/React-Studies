import React from "react";

import { Button } from "@mui/material";
import { Input } from "@mui/material";

import firebase from "firebase/compat/app";
import { db, auth } from "../firebase";

const SendMessages = () => {
  const [msg, setMsg] = React.useState("");

  async function sendMessage(e) {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg("");
  }

  return (
    <>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder="Menssagem..."
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <Button
            style={{
              width: "18%",
              fontSize: "15px",
              fontWeight: "550",
              margin: "4px 5% -13px 5%",
              maxWidth: "200px",
            }}
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </>
  );
};

export default SendMessages;
