import { LegacyRef, useRef, useState } from "react";
import { delay } from "../../utils/helper";

interface AutoWritingProps {
    text: string
}
export const AutoWriting = ({ text }: AutoWritingProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    let index = 0;
    const writeText = async () => {
        if (ref.current && ref.current.innerHTML !== undefined) {
            ref.current.innerHTML = text.slice(0, index)
        }
        index++;
        if (index > text.length) {
            index = 0;
            clearTimeout(intervalId);
            await delay(2000);
        }
    };
    let intervalId = setInterval(writeText, 300);
    return <span ref={ref}>{text}</span>
}