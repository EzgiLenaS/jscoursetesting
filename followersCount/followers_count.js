let count = 0; //Initialize count to 0
function increaseCount(){
    count++; //Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
}
function displayCount(){
    //Display the count in the HTML
    document.getElementById('countDisplay').innerHTML=count;
}
function checkCountValue(){
    if(count === 10){
        alert("Your instagram post gained 10 followers! Congratulations!");
    }
    else if(count === 20){
        alert("Your instagram post gained 20 followers! Keep it up!");
    }
}
function resetCount(){
    count=0;
    alert("The followers count has been reset");
    //Display the count in the HTML
    document.getElementById('countDisplay').innerHTML=count;
}