/*document.getElementById('form').onsubmit = function(){
 window.alert(document.getElementById('form').word.value);
 return false;
};
*/

for(var i = 1; i < 101 ; i++)
{
 var li = document.createElement('li');
 if(0 == i % 3)
  li.textContent = Fizz ; 
 if(0 == i % 5)
  li.textContent = Buzz ;
 if(0 != i % 3 && 0 != i % 5)
 li.textContent = i; 
document.getElementById('list').appendChild(li);
}
