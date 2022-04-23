import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav
      style={{
        border: "1px solid teal",
        fontSize: "18px",
        background: `${theme}blue`
      }}
    >
      <button
        onClick={() => {
          toggleTheme();
        }}
      >
        toggleTheme
      </button>
    </nav>
  );
};
