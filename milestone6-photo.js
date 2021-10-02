/*
৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে(হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।
*/

const url = `https://jsonplaceholder.typicode.com/photos?albumId=1`;
fetch(url)
    .then(res => res.json())
    .then(data => photos(data))

function photos(photos) {
    const DivElement = document.getElementById('container');
    const pic = photos.map(photo => {
        console.log(photo);
        const div = document.createElement('div');
        // div.classList.add('div-weight');
        div.innerHTML = `
    <div class=" container w-50 row row-cols-1 row-cols-md-3">
        <div class="col w-15">
            <div class="card h-100">
                <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${photo.title}</h5>
                </div>
            </div>
        </div>
    </div>
`;
        DivElement.appendChild(div);
    });
}
