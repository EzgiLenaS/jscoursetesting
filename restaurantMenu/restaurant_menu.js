const breakfastMenu =['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu =['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu =['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
const prices =['$12', '$22.99', '$21.99', '$15'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}- ${prices[index]}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('mainCourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for(let i = 0; i < dessertMenu.length; i++){
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

function showDateTime(){
    
    const currDate = new Date();
    document.getElementById('localDate').innerHTML = currDate.toLocaleDateString();
    document.getElementById('localCurrentTime').innerHTML = currDate.toLocaleTimeString();

}

showDateTime();
// Zamanı her saniye güncellemek için
setInterval(showDateTime, 1000);