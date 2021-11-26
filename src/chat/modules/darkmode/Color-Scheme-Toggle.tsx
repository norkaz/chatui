 import * as React from "react";
 import Toggle from 'react-toggle';
 import "react-toggle/style.css";
 import './Color-Scheme-Toggle.css';
 import { useColorScheme } from './useColorScheme';
 
 const ColorSchemeToggle: React.FC = () => {
   const { isDark, setIsDark } = useColorScheme();
   return (
     <div className="toggle-container">
       <Toggle
         checked={isDark}
         onChange={(event) => setIsDark(event.target.checked)}
         aria-label="Dark mode"
       />
     </div>
   );
 };
 
 export default ColorSchemeToggle;