import logo from './assets/logo-nlw-expert.svg'
import { NewNoteCard } from './components/NewNoteCard'
import { NoteCard } from './components/NoteCard'

export function App() {
  return (
    <div className='mx-auto my-12 max-w-6xl space-y-6'>
      <img src={logo} alt='NLW Expert'/>
      <form action="w-full">
        <input
          type="text"
          placeholder='Busque em suas notas...'
          className='w-full bg-transparent text-3xl font-semibold tracking-thight outline-none placeholder:text-slate-500'
          />
      </form>   
      
      <div className='h-px bg-slate-700'/>
      
      <div className='grid grid-cols-3 auto-rows-[250px] gap-6'>
        <NewNoteCard />

        <NoteCard note={{
          date: new Date(),
          content: 'Hello world'
        }}/>

        <NoteCard note={{
          date: new Date(),
          content: 'Hello world'
        }}/>
        
      </div>
    </div>
  )
}
