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
      <Switch.Control className="bg-gray-300 data-[state=checked]:bg-orange-600 relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-md border-transparent border-[1px] transition-colors duration-1000 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"></Switch.Control>
      <Switch.Label className="text-gray-600 data-[state=checked]:text-gray-900 transition duration-1000 ease-in-out">
        React
      </Switch.Label>
    </Switch.Root>
  );
}
