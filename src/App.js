import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const config = {
  apiKey: 'AIzaSyD-HSxkEyYw7RVGGTm7KTZwfev7z3l5Sic',
  authDomain: 'firechat-35474.firebaseapp.com',
  projectId: 'firechat-35474',
  storageBucket: 'firechat-35474.appspot.com',
  messagingSenderId: '193726300442',
  appId: '1:193726300442:web:4a18067b6e2651441baca3',
  measurementId: 'G-1DPM4MSDQM',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className='App'>
      <header>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );

  function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    };

    return <button onClick={signInWithGoogle}>Sign In With Google</button>;
  }

  function SignOut() {
    return (
      auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
      )
    );
  }
  function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });

    const [formValue, setFormValue] = useState(' ');

    const sendMessage = async (e) => {
      e.preventDefault();

      const { uid, photoURL } = auth.currentUser;

      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
      });

      setFormValue(' ');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <>
        <main>
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
          <span ref={dummy}></span>
        </main>
        <form onSubmit={sendMessage}>
          <input
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          />
          <button type='submit' disabled={!formValue}>
            Submt
          </button>
        </form>
      </>
    );
  }

  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'recieved';

    return (
      <div className={`message ${messageClass}`}>
        <img src={photoURL} alt='' />
        <p>{text}</p>
      </div>
    );
  }
}

export default App;
