import * as Button from './components/Button'
// import Switch from './components/Switch'

function App() {

  return (
    <>
    <div className='dark bg-slate-100 w-svw h-svh flex items-center justify-center gap-2'>
      <Button.Basic/>
      <Button.SimpleAnimated/>
      <Button.ComplexAnimated/>
    </div>
    </>
  )
}

export default App
