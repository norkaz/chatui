import React, { useState } from 'react';

function DarkmodeButton() {
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => setChecked(value => !value);
  return (
    <>
    
    <input
      id="darkmode-check"
      type="checkbox"
      value="Darkmode"
      checked={checked}
      onChange={toggleChecked}
      className={checked ? 'active' : 'inactive'}
    />
    <label for="darkmode-check">Darkmode</label>
    
    </>
  )
}
export default DarkmodeButton;
