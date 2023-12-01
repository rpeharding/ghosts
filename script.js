/************
 * N.B. The ghosts are SVGs, so it's 'fill', not 'color' you need to change
 *************/

// GET BY ID
const ghostOneRef = document.getElementById("first_ghost");
ghostOneRef.classList.add("ghostOne");
// went for adding class rather than inline as that's better?

// GET BY CLASSNAME
const secondWaveRef = document.getElementsByClassName("second_wave");
for (let i = 0; i < secondWaveRef.length; i++) {
  secondWaveRef[i].style.fill = "blue";
}
// feel like this exercise required inline style?

// GET AREA, DRILL DOWN using GET BY TAG NAME
const areaRef = document.getElementById("area-51");
const svgRef = areaRef.getElementsByTagName("svg");
for (let i = 0; i < svgRef.length; i++) {
  svgRef[i].classList.add("area51Ghost");
}

// querySelector nth-child
const penultGhost = document.querySelector("#area-51 > svg:nth-of-type(3)");
penultGhost.classList.add("penultGhost");

// from the last child, select the div immediately above the ghost and make its border '5px dashed'
penultGhost.parentElement.style.border = "5px dashed";

// querySelectorAll
const area50Ref = document.querySelectorAll("#area-50")[0];
area50Ref.style.fill = "red";
// add > svg after area-50 if just want the one in the outer div.
