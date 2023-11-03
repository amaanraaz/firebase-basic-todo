import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAj-ixKqu1z630QsfgsrlHlieg9zC7ZwLU",
    authDomain: "todo-a2637.firebaseapp.com",
    projectId: "todo-a2637",
    storageBucket: "todo-a2637.appspot.com",
    messagingSenderId: "298601584736",
    appId: "1:298601584736:web:e72e000d5bb9b91ba80b05",
    databaseUrl: "https://todo-a2637-default-rtdb.firebaseio.com/"
  };

export const app = initializeApp(firebaseConfig);