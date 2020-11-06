import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const course = useSelector((state) => state.data.slice(0, 1));
  return <h1>{course}</h1>;
}
