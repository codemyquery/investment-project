import { ChangeEvent, useEffect, useState } from "react";
import { DisplayTablePayload, DisplayTablePaginationController } from "../../types";

interface GotoPageNoProps<T> {
    paginationController: DisplayTablePaginationController,
    data: DisplayTablePayload<T>
}

export const GotoPageNo = <T extends object>({
    paginationController,
    data,
}: GotoPageNoProps<T>) => {

    const [currentPage, setCurrentPage] = useState(1);
    const onGotoPageChangeHandler = (event: any) => {
        const HTMLInputElement = (event.target as HTMLInputElement);
        const value = Number(HTMLInputElement.value);
        const possiblePages = paginationController.possiblePage;
        if (!checkEventIsADigit(event)) return;
        if (event.key === "Enter" || event.type === 'blur') {
            if (value > possiblePages || value < 1) {
                setCurrentPage(paginationController.page + 1);
            } else {
                paginationController.setPage(value - 1);
                HTMLInputElement.blur();
            }
        }
        return true;
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = Number(e.target.value);
        if (!isNaN(inputValue)) {
            setCurrentPage(inputValue);
        }
    }

    useEffect(() => {
        paginationController.setPossiblePage(getPossiblePages(data.totalDataCount, paginationController.itemsPerPage));
        
    }, [data.totalDataCount, paginationController.itemsPerPage, paginationController.page]);

    useEffect(() => {
        setCurrentPage(paginationController.page + 1);
    }, [paginationController.page]);

    return <>
        Page&nbsp;<input
            type={'text'}
            onBlur={onGotoPageChangeHandler}
            onKeyDown={onGotoPageChangeHandler}
            onPaste={e => e.preventDefault()}
            onDrop={e => e.preventDefault()}
            style={{ width: '60px', padding: '3px', borderRadius: '4px', height: '2.1rem', border: '1px solid #c0bebe', textAlign: 'center' }}
            id={'pagination-goto-pageno-container'}
            value={currentPage}
            onChange={onChangeHandler}
        /> &nbsp; of &nbsp;<label data-testid="total-possible-pages">{paginationController.possiblePage}</label>
    </>
}

const checkEventIsADigit = (event: any) => {
    const ASCIICode = (event.which) ? event.which : event.keyCode
    if ((ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) && (ASCIICode > 105 || ASCIICode < 96)) {
        event.preventDefault();
        return false;
    }
    return true;
}

const getPossiblePages = (totalRowCount: number, rowsPerPage: number) => {
    return Math.ceil((totalRowCount / rowsPerPage))
}