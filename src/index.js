module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr = new Array();
  for (let i=0; i< bracketsConfig.length; i++)
  {
    {
      for (let j=0; j< bracketsConfig[i].length; j++)
      arr.push( bracketsConfig[i][j]);
    }
  }

  for (let k=0; k< str.length-1; k++)
  { 
  
    if( arr.indexOf(str[k])%2===0)
    {
      if((arr.lastIndexOf(str[k+1]))=== (1+arr.indexOf(str[k])))
      {
        str= str.slice(0, k)+str.slice(k+2, str.length);
        k--;
        if(k!==-1)
        k--;
        if(k!==-1)
        k--;
      }

    }
  }

if (str!=="")
return false;

  return true;
}
