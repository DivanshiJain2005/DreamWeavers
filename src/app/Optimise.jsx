import CodeBox from "./CodeBox";
import { Button } from "@nextui-org/react";
export default function Optimise(){
    return(
        <>
            <div className="flex justify-center">
                <CodeBox placeholderText = "Source code" Desc = "Enter your code"/>
                <CodeBox placeholderText = "Result" Desc = "Output will show up here"/>
            </div>
            <div className="flex justify-center">
                <Button color="secondary" className="mx-2">Optimise your code</Button>
                <Button color="primary" className="mx-2">Generate Docstring</Button>
            </div>
        </>
    );
};