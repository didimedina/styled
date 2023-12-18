import { Switch } from '@ark-ui/react'
import { useState } from 'react'


export default function ExampleSwitch() {

  const [checked, setChecked] = useState(false)

  return(
    <Switch.Root checked={checked} onCheckedChange={(e) => setChecked(e.checked)} className="flex h-fit w-fit gap-4 items-center">
      <Switch.Control  className="h-6 w-10 rounded-full bg-gray-300 cursor-pointer">
        <Switch.Thumb className="data-[state=checked]:bg-green-500 h-full aspect-square inline-block rounded-full bg-white shadow ring-0" />
      </Switch.Control>
      <Switch.Label className="data-[state=checked]:text-pink-700 text-md font-medium text-gray-900">Label</Switch.Label>
    </Switch.Root>
  )
}
