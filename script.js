

// var light = true;


// function mode() {
//   var element = document.body;
//   if (light) {
//     document.getElementById("themeLabel").innerHTML = "Light mode ->";
//     document.documentElement.setAttribute('data-theme', 'dark');
//     light = false;
//   } else {
//     document.getElementById("themeLabel").innerHTML = "Dark mode ->";
//     document.documentElement.setAttribute('data-theme', 'root');
//     light = true;
//   }
// }



function theme() {
  var element = document.documentElement; 
  var checkbox = document.querySelector('input[type="checkbox"]'); 

  if (checkbox.checked) {
    element.setAttribute('data-theme', 'dark'); // Switch to dark mode
    document.getElementById("themeLabel").innerHTML = "Dark mode enabled ✨";
  } else {  
    element.setAttribute('data-theme', 'one'); // Switch to light mode
    document.getElementById("themeLabel").innerHTML = "Prefer dark mode?";
  }
}

