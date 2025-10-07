import React from "react";

export function SmartText({ children, onClick }) {
  return <span onClick={onClick}><b>{children}</b></span>
}
