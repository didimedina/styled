/** @jsxImportSource solid-js */

import { Switch } from "@ark-ui/solid";
import { createSignal } from "solid-js";

export default function ExampleSwitchSolid() {
  const [checked, setChecked] = createSignal(false);
  console.log(checked());

  return (
    <>
      <div>Hello, the current state for checked is; {checked().toString()}</div>
      <Switch.Root>
        <div>Test</div>
      </Switch.Root>
    </>
    // <Switch.Root checked={checked()} onCheckedChange={(e) => setChecked(e.checked)} class="flex h-fit w-fit gap-4 items-center">
    //   <Switch.Control  class="bg-gray-300 data-[state=checked]:bg-orange-600 relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-md border-transparent border-[1px] transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
    //     <Switch.Thumb class="translate-y-[6px] data-[state=checked]:translate-y-0 pointer-events-none inline-block h-3 w-full transform rounded-b-[5px] data-[state=checked]:rounded-b-[3px] rounded-t-[3px] data-[state=checked]:rounded-t-[5px] bg-white shadow ring-0 transition duration-200 ease-in-out" />
    //   </Switch.Control>
    //   <Switch.Label>Label</Switch.Label>
    // </Switch.Root>
  );
}
