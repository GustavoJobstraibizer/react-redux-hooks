import React from "react";
import { useDispatch } from "react-redux";

export default function SelectItem() {
  const dispatch = useDispatch();

  function selectItem(item) {
    console.log(item);
    dispatch({ type: "ITEM_SELECTED", item });
  }

  return (
    <>
      <button type="button" onClick={() => selectItem("Item - 1")}>
        Item 1
      </button>
      <button type="button" onClick={() => selectItem("Item - 2")}>
        Item 2
      </button>
      <button type="button" onClick={() => selectItem("Item - 3")}>
        Item 3
      </button>
    </>
  );
}
