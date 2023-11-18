import { useRef } from "react";
import { delay } from "../../utils/helper";

interface AutoWritingProps {
    text: string
}
export const AutoWriting = ({ text }: AutoWritingProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    let index = 0;
    const writeForwardText = async () => {
        if (ref.current && ref.current.innerHTML !== undefined) {
            ref.current.innerHTML = text.slice(0, index)
        }
        index++;
        if (index > text.length) {
            index = text.length
            await delay(2000);
            setTimeout(writeBackwordText, 1);
            return;
        }
        setTimeout(writeForwardText, 300)
    };

    const writeBackwordText = async () => {
        if (ref.current && ref.current.innerHTML !== undefined) {
            ref.current.innerHTML = text.slice(0, index)
        }
        index--;
        if (index < 0) {
            index = 0;
            setTimeout(writeForwardText, 300);
            return;
        }
        setTimeout(writeBackwordText, 300)
    };
    let intervalId = setTimeout(writeForwardText, 300);
    return <span ref={ref}>{text}</span>
}