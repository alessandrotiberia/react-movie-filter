// usestate crea variabili che possono cambiare nel tempo.
// useeffect esegue del codice quando il componente viene montato o aggiornato.
import { useState, useEffect } from 'react';


const films = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];

function App() {

  /* Ogni volta che una di queste variabili cambia,
  React ricarica il componente per mostrare i dati aggiornati.*/

  const [Task, setTask] = useState(''); // inizializzo la variabile Task con una stringa vuota 
  const [TaskList, setTaskList] = useState(films); // inizializzo la lista dei task con i film
  const [Search, setSearch] = useState(''); // inizializzo la stringa di ricerca
  const [TaskListFiltered, setTaskListFiltered] = useState(TaskList); // inizializzo la lista dei task filtrati

  // prendo la lista e la filtro lasciando solo quello che cerco nel search.
  useEffect(() => {
    const TaskFiltered = TaskList.filter(task => {
      // restituisco
      return task.title.includes(Search);
    }); //Il risultato viene salvato nello stato taskfiltered 
    setTaskListFiltered(TaskFiltered);

  }, [Search, TaskList]);

  //questa funzione gestisce due input diversi
    const changeInputHandler = (event) => {
      const target = event.target; // prende evento scatena dall'input 
    const targetGenre = event.genre;
    const targetName = target.title;
  
      if (targetName === 'Task') {
        setTask(target.value); // aggiorna il valore di Task con quello dell'input
      } else if (targetGenre === 'Search') {
        setSearch(target.value); // aggiorna il valore di Search con quello dell'input
      }
  };



  return <>
    <h1>My Movie List</h1>

    {/* Visualizzazione task */}
    <ul> 
      {TaskListFiltered.map((task, index) => {
        return <li key={index}>{task.title} - {task.genre}</li>
      })};
    </ul>
  </>
}

export default App;
