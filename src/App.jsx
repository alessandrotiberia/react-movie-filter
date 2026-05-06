// useState crea variabili che possono cambiare nel tempo.
// useEffect esegue del codice quando il componente viene montato o aggiornato.
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

  // Inizializzo gli stati del componente
  const [Task, setTask] = useState(''); 
  const [TaskList, setTaskList] = useState(films); 
  const [Search, setSearch] = useState(''); 
  const [TaskListFiltered, setTaskListFiltered] = useState(TaskList); 

  // Estraggo i generi rimuovendo i duplicati per popolare le opzioni della select.
  // Set è una struttura dati che non ammette valori ripetuti.
  const generi_unici = [...new Set(TaskList.map(task => task.genre))];

  // Prendo la lista e la filtro in base al genere selezionato nella select.
  useEffect(() => {
    const task_filtered = TaskList.filter(task => {
      // Se non c'e nessuna ricerca attiva (stringa vuota), mostro tutti i film
      if (Search === '') {
        return true; 
      }
      // Altrimenti, restituisco solo i film il cui genere corrisponde alla selezione
      return task.genre === Search;
    }); 
    
    // Il risultato viene salvato nello stato dei task filtrati
    setTaskListFiltered(task_filtered);

  }, [Search, TaskList]);

  // Questa funzione gestisce gli input e la select dinamicamente
  const changeInputHandler = (event) => {
    const target = event.target; 
    const target_name = target.name; // Recupero l'attributo "name" dall'elemento HTML

    if (target_name === 'Task') {
      setTask(target.value); 
    } else if (target_name === 'Search') {
      setSearch(target.value); 
    }
  };

  // Questa funzione gestisce l'aggiunta di un nuovo task (film)
  const addTaskHandler = (event) => {
    event.preventDefault(); // Previene il ricaricamento della pagina causato dal form
    
    const nuovo_film = {
      title: Task,
      genre: 'Da definire'
    };
    
    // Crea una copia della lista esistente e aggiunge il nuovo elemento alla fine
    const new_task_list = [...TaskList, nuovo_film]; 
    setTaskList(new_task_list); 
    setTask(''); 
  };

  return (
    <>
      {/* Form inserimento task */}
      <form onSubmit={addTaskHandler}>
        <h1>My Movie List</h1>
        <input 
          type="text" 
          value={Task} 
          onChange={changeInputHandler} 
          name="Task" 
        />
        <button type="submit">Aggiungi Task</button>
      </form>

      {/* Form ricerca task (ora con select invece di input) */}
      <form>
        <h1>Search Movie by Genre</h1>
        <select value={Search} onChange={changeInputHandler} name="Search">
          {/* Opzione di default per resettare la ricerca */}
          <option value="">Tutti i generi</option>
          
          {/* Genero un'opzione per ogni genere unico trovato */}
          {generi_unici.map((genere, index) => {
            return (
              <option key={index} value={genere}>
                {genere}
              </option>
            );
          })}
        </select>
      </form>

      {/* Visualizzazione task */}
      <ul>
        {TaskListFiltered.map((task, index) => {
          return (
            <li key={index}>
              {task.title} - {task.genre}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;