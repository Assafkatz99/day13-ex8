const library = {
    name: "Springfield Public Library",
    location: "Springfield",
    books: [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
        genre: "Novel",
        publisher: "Charles Scribner's Sons",
        pages: 180,
        isbn: "978-0-7432-6555-2",
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Novel",
        publisher: "J.B. Lippincott & Co.",
        pages: 281,
        isbn: "978-0-044-93349-2",
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
        genre: "Novel",
        publisher: "Little, Brown and Company",
        pages: 214,
        isbn: "978-0-316-76953-3",
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        genre: "Novel",
        publisher: "T. Egerton",
        pages: 279,
        isbn: "978-0-141-19031-4",
      },
    ],
  };


function titleForGenere (genere){
    for (let i in library.books){
        if (library.books[i].genre === genere){
            console.log(library.books[i].title);
        } 
    }
}

titleForGenere("Novel")