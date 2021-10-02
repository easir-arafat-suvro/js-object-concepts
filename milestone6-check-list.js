/*
১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট, আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো।
*/
// const student = {
//     id: 101,
//     name: 'Ryhan',
//     gender: 'Male',
//     money: 5000,
//     isGood: true,
//     results: {
//         bangla: 80, english: 85, islamShikksh: 95, math: 99
//     },
//     subject: ['Bangla', 'English', 'Islam Shikkha', 'Math'],
//     yearlyExpense: function (lastName, expense) {
//         this.name = `${this.name} ${lastName}`;
//         this.money = this.money - expense;
//         // console.log(this.name, 'balance -', this.money)
//     },
// }
// student.yearlyExpense('Habib', 1500);

/*
২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো।
*/
// document.getElementById('dynamicString').addEventListener('click', function () {
//     student.yearlyExpense('Habib', 1500);

//     const div = document.createElement('div');
//     div.innerHTML = `
//     <p> Student Name : ${student.name} </p>
//     <p> Second position : ${student.subject[1]} </p>
//     <p>
//     English : ${student.results.english},
//     Bangla : ${student.results.bangla},
//     Islam Shikha : ${student.results.islamShikksh},
//     Math : ${student.results.math}    
//     </p>
//     <p> Balance : ${student.money}</p>
//     `;

//     const constainer = document.getElementById('container');
//     constainer.appendChild(div);
// })

/*
৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে।
*/
// anonymus = () => {
//     return 89
// };

// anonymus = () => 89;
// console.log(anonymus());

/*
৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ৭ দিয়ে ভাগ করে ভাগফল রিটার্ন করবে।
*/
// oneParam = (prameter) => {
//     const result = prameter / 7;
//     return result;
// };

// oneParam = (prameter) => prameter / 7;
// const result = oneParam(70);
// console.log(result);

/*
৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।
*/

// twoParam = (num1, num2) => {
//     const result = (num1 + num2) / 2;
//     return result;
// };

// twoParam = (num1, num2) => (num1 + num2) / 2;
// console.log(twoParam(50, 70));

/*
৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো।
*/
// multiLine = (n1, n2) => {
//     const num1 = n1 + 7;
//     const num2 = n2 + 7;
//     return num1 + num2;
// }
// console.log(multiLine(10, 26))

/*
৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
*/
// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const newArray = numbers.map(num => num / 5);
// console.log(newArray);

/*
৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।
*/

// summary 

/*
৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে
destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
*/
// const tourist = {
//     id: 101,
//     name: 'Arafat',
//     gender: 'Male',
//     money: 10000,
//     isGood: true
// }
// const { name, money } = tourist;
// console.log(name, money);

// const age = [10, 20, 50, 60, 80];
// const secondItem = age[1];
// console.log(secondItem);

/*
৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে(হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।
*/

// This is equivalent to /comments?postId=1
// fetch('https://jsonplaceholder.typicode.com/posts/2/comments')
// fetch('https://jsonplaceholder.typicode.com/comments?postId=1')

//     .then((response) => response.json())
//     .then((json) => console.log(json));

// This will return all the posts that belong to the first user
// fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// const url = `https://jsonplaceholder.typicode.com/photos?albumId=1`;
// fetch(url)
//     .then(res => res.json())
//     .then(data => photos(data))

// function photos(photos) {
//     const btn = document.getElementById('dynamicString');
//     const photo = photos.map(photo => console.log(photo))

// }



