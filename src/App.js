import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyD-HSxkEyYw7RVGGTm7KTZwfev7z3l5Sic',
  authDomain: 'firechat-35474.firebaseapp.com',
  projectId: 'firechat-35474',
  storageBucket: 'firechat-35474.appspot.com',
  messagingSenderId: '193726300442',
  appId: '1:193726300442:web:4a18067b6e2651441baca3',
  measurementId: 'G-1DPM4MSDQM',
});

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

    return <button onClick={signInWithGoogle}>Sig In With Google</button>;
  }

  function SignOut() {
    return (
      auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
      )
    );
  }
  function ChatRoom() {
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });
    return (
      <div>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
    );
  }

  function ChatMessage(props) {
    const { text, uid } = props.message;

    return <p>{text}</p>;
  }
}

export default App;
