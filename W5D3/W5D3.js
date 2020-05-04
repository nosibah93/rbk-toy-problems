/*
You were put in charge of ordering for tonight's company get-together, 
and you were given a data set with people's meal preferences and dietary restrictions. 
Write a function called orderAVegetarianDish that takes  an array of empoloyee objects, 
and returns true if at least 1 person is listed "vegetarian" on their "mealPreferences". 
Otherwise, your function should return false.

var staffA = [
  {
    name: "Lia",
    department: "Human Resources",
    dietaryRestrictions: [],
    mealPreferences: "no preferences"
  },
  {
    name: "Sebastian",
    department: "Engineering",
    dietaryRestrictions: ["dairy free", "gluten free"],
    mealPreferences: "vegetarian"
  },
  {
    name: "Ari",
    department: "Executive",
    dietaryRestrictions: ["dairy free"],
    mealPreferences: "vegetarian"
  },
  {
    name: "Martha",
    department: "Legal",
    dietaryRestrictions: ["nut allergies"],
    mealPreferences: "non-vegetarian"
  }
];
Calling your function should result in:

orderAVegetarianDish(staffA); //true
*/

// your answer is here 
// i declare each function to looping in side array 
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}
//i declare reduce function to retutn one value true or false
function reduce(array, f, acc) { 
 if (acc === undefined) { 
   acc = array[0]; 
   array = array.slice(1); 
 } 
 each(array, function(element, i) { 
   acc = f(acc, element, i); 
 }); 
 return acc; 
}


function orderAVegetarianDish (array) {
	return reduce (array , function (boolian , element ) {
	  if (element.mealPreferences === "vegetarian"){
			boolian = true ;
		}
		 return boolian ;
		
	}) 

	
}
