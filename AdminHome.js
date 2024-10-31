import React from "react";
const AdminHome = ({books}) => (
    <div>
        <h2>Admin Dashboard</h2>  
        <ul>
            {books.map(book => (<li key={book.id}>
                {book.title}-{book.available ? "Available" : "Not Available"}</li>))}</ul>
    </div>

)

export default AdminHome