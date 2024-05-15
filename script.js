

const request = await fetch("https://cors.szurek.local/10/");
let json = await response.json();

if("error" in json){
  alert(`Błąd${json["error"]}`)
} else {
  alert("086a6338f9c2d3ac5c7ce22735b2922b");
}
