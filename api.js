let books=[
    {
        id: 1,
        title: "The Great Gatsby",
        available: true
        
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        available: true
        
    },
    {
        id: 3,
        title: "Pride and Prejudice",
        available: true
    },
];
export const login=async({username,password,isAdmin})=>{
    return {username,isAdmin,token:"fake-jwt-token"};
}

export const getBooks=async()=>{
    return books;
}

export const rentBook=async(bookId)=>{
    const book=books.find(b=>b.id===bookId);
    if(book&&book.available){
    book.available=false;
    return book;
}
throw new Error("Book is not available");
}
export const returnBook=async(bookId)=>{
    const book=books.find(b=>b.id===bookId);
    if(book){
        book.available=true;
        return book;
    }
    throw new Error("Book is not available");
}