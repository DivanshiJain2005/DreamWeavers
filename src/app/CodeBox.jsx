import React from "react";
import {Textarea} from "@nextui-org/react";

export default function CodeBox({placeholderText, Desc}) {
  return (
    <Textarea
      variant="faded"
      placeholder={placeholderText}
      description={Desc}
      className="mx-10 p-10"
      style={{ height: '300px', fontSize: '18px'}} // Inline style for height
    />
  );
}
