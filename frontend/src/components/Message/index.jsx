import { useState, useEffect } from "react";

export default function Message({ holidays }) {
  useEffect(() => {
    console.log(holidays);
  }, []);

  return (
    <>
      <a>zaaa</a>
    </>
  );
}
