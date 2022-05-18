let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
    // { name: "Courses in England", prices: 12 }, 
    // { name: "Courses in Germany", prices: 400 }, 
    // { name: "Courses in Italy", prices: 100 }, 
    // { name: "Courses in Russia", prices: 150 },
    // { name: "Courses in China", prices: 60 },
    // { name: "Courses in USA", prices: 300 },
    // { name: "Courses in Kazakhstan", prices: 250 },
    // { name: "Courses in France", prices:400 },
];

 
// filter
const filter = courses.filter(name=>{
    if(name.prices >= [0, 200]){
        return true;
    }
    if(name.prices == [100, 350]){
        return true;
    }
    if(name.prices <= [200, null]){
        return true;
    }
});
console.log(filter);




