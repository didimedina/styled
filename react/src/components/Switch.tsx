import { Switch } from "@ark-ui/react";
import { useState } from "react";

export default function ExampleSwitchReact() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch.Root
      checked={checked}
      onCheckedChange={(e) => setChecked(e.checked)}
      className="group flex h-fit w-fit gap-4 items-center"
    >
      <Switch.Control className="bg-gray-300 data-[state=checked]:bg-orange-600 relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-md border-transparent border-[1px] transition-colors duration-1000 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
        <Switch.Thumb className="translate-y-[6px] data-[state=checked]:translate-y-0 pointer-events-none inline-block h-3 w-full transform rounded-b-[5px] data-[state=checked]:rounded-b-[3px] rounded-t-[3px] data-[state=checked]:rounded-t-[5px] bg-white shadow ring-0 transition duration-200 ease-in-out"/>
      </Switch.Control>
      <Switch.Label className="text-gray-600 data-[state=checked]:text-gray-900 transition duration-1000 ease-in-out">
        React
      </Switch.Label>
    </Switch.Root>
  );
}