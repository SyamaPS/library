import React from "react";
const Book =({book,onRent,onReturn,rentedBooks})=>{
    const isRented=rentedBooks.some(r=>r.id===book.id);
    return(
        <div>
            <h3>{book.title}</h3>
            {book.available ? (
                <button onClick={() => onRent(book.id)} >
                    Rent
                </button>
            ) : (
                <button onClick={() => onReturn(book.id)} disabled={!isRented}>
                    Return
                </button>
            )}
        </div>
    )
}

export default Book