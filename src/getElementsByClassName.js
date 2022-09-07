// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// I - className: string, documentElement: document.body: object
// O - array of dom elements that contain className
// C - use recursion
// E -
var getElementsByClassName = function(className, documentElement) {
  // define result as empty array
  var result = [];

  // check if documentElement is undefined
  if (!documentElement) {
    // set documentElement equal to document.body
    documentElement = document.body;
  }

  // check whether documentElement contains className
  if (documentElement.classList && documentElement.classList.contains(className)) {
    // push document element to result array
    result.push(documentElement);
  // otherwise
  }

  // do a for loop for every childNodes of documentelement
    // childNode has three nodes type --- text/ children/comment nodes, only children can have classname so we need to check if e
    // if current childNode contains className
      // call getElementsByClassName(current element)
  for (var i = 0; i < documentElement.childNodes.length; i++) {
    result = result.concat(getElementsByClassName(className, documentElement.childNodes[i]));
  }


  // return result
  console.log(result);
  return result;
};

getElementsByClassName();
