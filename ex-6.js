const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  console.log(`New car collection is: Toyota, Fiat, Honda, BMW, ${carBrand}`)
  console.log(`${carBrand} already exists in position <position> of the car collection.`)
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
updateCarCollection("audi"); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
updateCarCollection("toyota"); //toyota has already existed in the 1 position of car collection.