export function NoteCard() {
  return (
    <button className='bg-slate-800 rounded-md p-5 space-y-3 overflow-hidden relative text-left outline-none hover:ring-2 hover:slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
      <span className='text-sm font-medium text-slate-300'>
        Há 2 dias
      </span>
      <p className='text-sm leading-6 text-slate-400'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis porro, provident earum illum minus ut nisi quod quidem facilis, accusantium nostrum voluptatem officia ducimus tempore vitae accusamus id. Distinctio, maxime.
      </p>
      <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'/>
    </button>
  )
}