import * as Button from './components/Button'
// import Switch from './components/Switch'

function App() {

  return (
    <>
    <div className='dark w-svw h-svh flex items-center justify-center bg-base-3 gap-2'>
      {/* <Switch/> */}
      <Button.Basic/>
      <Button.Animated/>
    </div>
    </>
  )
}

export default App
