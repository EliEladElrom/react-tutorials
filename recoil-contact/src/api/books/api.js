const booksList = [
    { id: 1, title: 'React v17 - coming soon' },
    { id: 2, title: 'The Blockchain Developer' },
    { id: 3, title: 'Pro MEAN Stack Development' },
    { id: 4, title: 'AdvancED Flex 4' },
    { id: 5, title: 'Flash on Devices' }
];

const booksDetails = [
    { id: 1, url: 'https://www.amazon.com/Elad-Elrom/e/B003XE8ICW' },
    { id: 2, url: 'https://www.amazon.com/gp/product/B07VMD99YH/' },
    { id: 3, url: 'https://www.amazon.com/gp/product/B01N5AIZ7G/' },
    { id: 4, url: 'https://www.amazon.com/gp/product/B004VH5YZY' },
    { id: 5, url: 'https://www.amazon.com/gp/product/1430219041' }
];

export const getBooks = async () => new Promise(resolve =>
    setTimeout(() => resolve(booksList), 500)
);

export const getBookById = async id => new Promise(resolve => {
    const details = booksDetails.find(s => s.id === id);
    return setTimeout(() => resolve(details), 500);
});

export const getDataBack = async id => new Promise(resolve => {
    const details = 'Hello World';
    return setTimeout(() => resolve(details), 500);
});
