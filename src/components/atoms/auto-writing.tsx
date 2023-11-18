import { LegacyRef, useRef, useState } from "react";

interface AutoWritingProps {
    text: string
}
export const AutoWriting = ({ text }: AutoWritingProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    let index = 0;
    setInterval(() => {
        if (ref.current && ref.current.innerHTML !== undefined) {
            ref.current.innerHTML = text.slice(0, index)
        }
        index++;
        if (index > text.length) {
            index = 0;
        }
    }, 300);
    return <span ref={ref}>{text}</span>
}