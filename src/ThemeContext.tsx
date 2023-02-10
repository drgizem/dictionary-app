import { createContext } from "react";

type ContextType={
  theme: "light" | "dark" ;
  toggleTheme:()=>void;
}

export const ThemeContext=createContext<ContextType>({
  theme:"dark",
  toggleTheme:()=>{}
})