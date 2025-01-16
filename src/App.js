import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "assets/theme";

import themeDark from "assets/theme-dark";

import { useMaterialUIController } from "context";
import Dashboard from "layouts/dashboard";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}
