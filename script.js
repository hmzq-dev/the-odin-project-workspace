function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${read ? "read" : "not read yet"}`;
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, true);
console.log(theHobbit.info());