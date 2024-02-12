import { useState } from "react";
import Fields from "./Fields";

export default function Reversed ()
{
  const [reverse, setReverse] = useState(false);

  const toggleReverse = () => {
    setReverse(prevReverse => !prevReverse);
  };

  return (
    <>
      <Checkbox reverse={reverse} toggleReverse={toggleReverse} />
      <Fields reverse={reverse} />
    </>
  );
}

function Checkbox({ reverse, toggleReverse }) {
  return (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={toggleReverse}
      />
      Reverse order
    </label>
  );
}