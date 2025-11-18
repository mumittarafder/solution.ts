const formatValue = (value: string | number | boolean) => {

  if(typeof value === 'string'){
    return value.toUpperCase();
  }else if(typeof value === 'number'){
    return value * 10;
  }else if(typeof value === 'boolean'){
    return !value;
  }else{
    return "unknown format"
  }
};


const getLength = (value: string | number[]) => {
  if(typeof value === 'string'){
    return value.length;
  }else if(typeof  Array.isArray(value)){
    return value.length;
  }
};


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  getDetails(){
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}


const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

const filterByRating = (books: {title: string, rating: number}[]) => {
  return books.filter(({title, rating}) => rating > 4 && typeof title === 'string' ) 
}



const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

type allUsers = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: allUsers[]) =>  users.filter((user) => user.isActive === true);



interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;

};

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

const printBookDetails = (myBook: Book) => {
  const isAvailable = myBook.isAvailable ? 'yes' : 'No'; 
  return console.log(`Title: ${myBook.title}, Author: ${myBook.author}, Published: ${myBook.publishedYear}, Available:  ${isAvailable}`)
};



const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];


const getUniqueValues = (array1: number[], array2: number[]) => {

  let uniqueArray: number[] = [];

  for(let i = 0; i < array1.length; i++){
    let match = false;
    for(let j = 0; j < uniqueArray.length; j++){
      if(array1[i] === uniqueArray[j]){
        match = true;
        
      }
    }if(!match){
      uniqueArray[uniqueArray.length] = array1[i]
    }
    
  };

  for(let i = 0; i < array2.length; i++){
    let match = false;

    for(let j = 0; j < uniqueArray.length; j++){
      if(array2[i] === uniqueArray[j]){
        match = true;
      }
    }if(!match){
      uniqueArray[uniqueArray.length] = array2[i];
    }
  }

  return uniqueArray;
  
};




const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]) => {
  return products.reduce((total, item) => {


    let totalPrice = item.price * item.quantity;


    if (item.discount !== undefined) {
      const discountAmount = (totalPrice * item.discount) / 100;
      totalPrice = totalPrice - discountAmount;
    };

    
    return total + totalPrice;

  }, 0);
};

