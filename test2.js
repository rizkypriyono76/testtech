/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
	//sort data berurut
  data.sort();
  
  //memfilter double data
  return data.filter((value, index) => data.indexOf(value) === index);
  
}

console.log(result(data));
