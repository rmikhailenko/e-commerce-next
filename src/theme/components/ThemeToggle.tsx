"use client";
import * as React from "react";
import { useColorScheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "./LightModeIcon";
import DarkModeIcon from "./DarkModeIcon";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  const mounted = React.useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  if (!mounted) {
    return (
      <IconButton disabled aria-label="Toggle color theme">
        <LightModeIcon />
      </IconButton>
    );
  }

  return (
    <IconButton
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      color="inherit"
      aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
    >
      {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}
