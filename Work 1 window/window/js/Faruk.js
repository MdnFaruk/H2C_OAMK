/*
 * Student name : Md Faruk
 * Project name : Window Calculation(JS)
 * Started date : 28th January,2021
 * Ended   date : 30th January,2021
 * 
 */

function window_calculation() {

    //Declearing variable
    const ERROR_Min = "Minimum height and width of window is 50cm.";
    const ERROR_Max = "Maximum height and width of window is 200cm.";
    const ERROR_NoSelection = "No amount. 1 assumed.";
    const ERROR_EqualSize = "No more than 10 equal size windows.";

    const WIN_Size1 = "small window";
    const WIN_Size2 = "medium window";
    const WIN_Size3 = "large window";
    const WIN_Size4 = "huge window";

    //Making inserting value empty
    document.getElementById("wood").innerHTML   = "";
    document.getElementById("glass").innerHTML  = "";
    document.getElementById("woods").innerHTML  = "";
    document.getElementById("glasses").innerHTML= "";
    document.getElementById("error").innerHTML  = "";

    //Taking user input
    let WIN_height =  Number(document.getElementById("window_height").value);
    let WIN_width  =  Number(document.getElementById("window_width").value);
    let WIN_amount =  Number(document.getElementById("window_amount").value);

    //Checking user's input correction 
    if ((WIN_height < 50) || (WIN_width < 50)) {
        document.getElementById("error").innerHTML = ERROR_Min;
        return;
    }
    if ((WIN_height > 200) || (WIN_width > 200)) {
        document.getElementById("error").innerHTML = ERROR_Max;
        return;
    }
    if ((WIN_height === WIN_width) && (WIN_amount > 10)) {
        document.getElementById("error").innerHTML = ERROR_EqualSize;
        return;
    } 
    if (WIN_amount === 0) {
        document.getElementById("error").innerHTML = ERROR_NoSelection;
        WIN_amount = 1;
        
    } 
   
    //Converting Height and width CM to M
    WIN_height /= 100;
    WIN_width  /= 100;

    /* Rectangle Area, A = a*b. and Perimeter = 2*(a+b).
       Here, Total amount of wood is the perimeter of outer
       wooden rectangle. */

    let WOOD_Amount_for1    = 4 * [(WIN_height - 0.06) + (WIN_width - 0.06)];  // 2 side of of the window frame perimeter.
    let GLASS_Amount_for1   = (WIN_height - 0.1) * (WIN_width - 0.1);    //Area of a Glass. Need to decrease 10cm
    let SET_Wood_Amount     = WOOD_Amount_for1 * WIN_amount;
    let SET_Glass_Amount    = GLASS_Amount_for1 * WIN_amount;

    //Taking value up to 2 decimale point
    WOOD_Amount_for1    = WOOD_Amount_for1.toFixed(2);
    GLASS_Amount_for1   = GLASS_Amount_for1.toFixed(2);
    SET_Wood_Amount     = SET_Wood_Amount.toFixed(2);
    SET_Glass_Amount    = SET_Glass_Amount .toFixed(2);

    if (GLASS_Amount_for1 <= 0.5) {
        document.getElementById("size").innerHTML   = WIN_Size1;
    } else if (GLASS_Amount_for1 <= 1.5) {
        document.getElementById("size").innerHTML   = WIN_Size2;
    } else if (GLASS_Amount_for1 <= 2.5) {
        document.getElementById("size").innerHTML   = WIN_Size3;
    } else if (GLASS_Amount_for1 > 2.5) {
        document.getElementById("size").innerHTML   = WIN_Size4;
    }

    document.getElementById("wood").innerHTML   = WOOD_Amount_for1;
    document.getElementById("glass").innerHTML  = GLASS_Amount_for1;
    document.getElementById("woods").innerHTML  = SET_Wood_Amount;
    document.getElementById("glasses").innerHTML= SET_Glass_Amount;


} 