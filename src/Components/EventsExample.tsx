import React, { useRef, useState } from "react";

const EventsExample = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
const inputRef = useRef<HTMLInputElement>(null)
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };
  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("dragg");
  };

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };
  const LeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("DROP");
  };

  return (
    <>
      <input value={value} onChange={changeHandler} />
      <input ref={inputRef} placeholder="second"/>
      <button onClick={clickHandler}>Apply</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: "red", margin: 20 }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragOver={dragWithPreventHandler}
        onDragLeave={LeaveHandler}
        style={{ width: 200, height: 200, background: isDrag?"blue":'red', margin: 20 }}
      ></div>
    
    </>
  );
};
export default EventsExample;
