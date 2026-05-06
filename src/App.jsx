// usestate crea variabili che possono cambiare nel tempo.
// useeffect esegue del codice quando il componente viene montato o aggiornato.
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const films = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ];

  /* Ogni volta che una di queste variabili cambia,
  React ricarica il componente per mostrare i dati aggiornati.*/
  
  const [Task, setTask] = useState(''); // inizializzo la variabile Task con una stringa vuota 
  const [TaskList, setTaskList] = useState(films); // inizializzo la lista dei task con i film
  const [Search, setSearch] = useState(''); // inizializzo la stringa di ricerca
  const [Task_List_Filtered, setTask_List_Filtered] = useState(TaskList); // inizializzo la lista dei task filtrati

  return <>
    <h1>My Movie List</h1>
  </>
}

export default App
