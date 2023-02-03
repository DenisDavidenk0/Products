import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { BackgroundContecst } from "../context/BackgroundContext ";

function ChangeThema() {
  const { thema, setThema } = useContext(BackgroundContecst);
  return (
    <>
    {
      thema === 'bg-light' ? <Button variant={'dark'} onClick={()=> setThema('bg-dark')} >Dark</Button> : <Button variant={'default'} onClick={()=> setThema('bg-light')}>Light</Button>
    }
    </>
  );
}
export default ChangeThema;
