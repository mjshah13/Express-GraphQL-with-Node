const authors = [
  { id: 1, name: "J. K. Rowling" },
  { id: 2, name: "J. R. R. Tolkien" },
  { id: 3, name: "Brent Weeks" },
];

const books = [
  { id: 1, name: "Harry Potter and the Chamber of Secrets", authorId: 1 },
  { id: 2, name: "Harry Potter and the Prisoner of Azkaban", authorId: 1 },
  { id: 3, name: "Harry Potter Chal Mera Puttar", authorId: 1 },
  { id: 4, name: "The Fellowship of the Ring", authorId: 2 },
  { id: 5, name: "The Two Towers", authorId: 2 },
  { id: 6, name: "The Return of the King", authorId: 2 },
  { id: 7, name: "The Way of Shadows", authorId: 3 },
  { id: 8, name: "Beyond the Shadows", authorId: 3 },
];
const getAllBooks = () => {
  return books;
};
const getAllAuthors = () => {
    return authors;
  };
const getAuthorByBook = (book) => {
  return authors.find((author) => author.id === book.authorId);
};
const findBookByAuthor = (author) => {
  return books.filter((book) => book.authorId === author.id);
};
const findSpecificAuthor=(parent, args) => authors.find(author => author.id === args.id)
const findSpecificBook=(parent, args) => books.find(author => author.id === args.id)
const addBook = (parent,args) => {
  const book = { id: books.length + 1, name: args.name, authorId: args.authorId }
  books.push(book)
  return book
}
const addAuthor = (parent,args) => {
  const author = { id: authors.length + 1, name: args.name }
  authors.push(author)
  return author
}
module.exports = {
  addBook,
  addAuthor,
  getAllBooks,
  getAuthorByBook,
  findBookByAuthor,
  getAllAuthors,
  findSpecificAuthor,
  findSpecificBook
};
