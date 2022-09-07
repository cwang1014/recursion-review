var stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  } else if (obj === undefined) {
    return undefined;
  } else if (typeof obj === 'function') {
    return undefined;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'boolean') {
    return String(obj);
  } else if (typeof obj === 'number') {
    return String(obj);
  } else if (Array.isArray(obj)) {
    var res = [];
    for (var i = 0; i < obj.length; i++) {
      if (typeof obj[i] === 'function' || obj[i] === undefined) {
        res.push('null');
      }
      res.push(stringifyJSON(obj[i]));
    }
    var arrStr = res.join(',');
    return '[' + arrStr + ']';
  } else if (typeof obj === 'object') {
    var objPropertiesStr = '';
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      } else {
        objPropertiesStr += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
    return '{' + objPropertiesStr.slice(0, -1) + '}';
  }
};


// console.log(!null);

// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
//I-- any primitive type (string, boolean, number, array, object, function, null, undefined)
//O-- string version of input data;
//c-- N/A
//e-- function, null, undefined

  // if it is null, return null with string quotations;
  // if it is undefined, return undefined;
  // if it is a pure function, return undefined;
  // if it is a string, return string with string quotations;
  // if it is a boolean, return boolean with string quotations;
  // if it is a number, return number with string quotations;
  // if it is an array, return [ with string quotation and iterate each array element(do recursion at this point) and ] with string quotations;
    // if there is function/undefined as an array element, stringify function should return string null;
  // if it is an object, return { with string quotations and iterate Object properties with string key : and string value and } with string quotations}
    //   if there is function/undefined as an object value, stringify function should not return;
