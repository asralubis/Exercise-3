const planets = [
    {
        name: "Alderaan",
        rotation_period: 24,
        orbital_period: 364,
        diameter: 12500,
        climate: "temperate",
        gravity: "1 standard",
        terrain: "grasslands, mountains",
        surface_water: 40,
        population: 2000000000,
    },
    {
        name: "Yavin IV",
        rotation_period: 24,
        orbital_period: 4818,
        diameter: 10200,
        climate: "temperate, tropical",
        gravity: "1 standard",
        terrain: "jungle, rainforests",
        surface_water: 8,
        population: 1000,
    },
    {
        name: "Hoth",
        rotation_period: 23,
        orbital_period: 549,
        diameter: 7200,
        climate: "frozen",
        gravity: "1.1 standard",
        terrain: "tundra, ice caves, mountain ranges",
        surface_water: 100,
        population: "unknown",
    },
    {
        name: "Dagobah",
        rotation_period: 23,
        orbital_period: 341,
        diameter: 8900,
        climate: "murky",
        gravity: "N/A",
        terrain: "swamp, jungles",
        surface_water: 8,
        population: "unknown",
    },
    {
        name: "Bespin",
        rotation_period: 12,
        orbital_period: 5110,
        diameter: 118000,
        climate: "temperate",
        gravity: "1.5 (surface), 1 standard (Cloud City)",
        terrain: "gas giant",
        surface_water: 0,
        population: 6000000,
    },
    {
        name: "Endor",
        rotation_period: 18,
        orbital_period: 402,
        diameter: 4900,
        climate: "temperate",
        gravity: "0.85 standard",
        terrain: "forests, mountains, lakes",
        surface_water: 8,
        population: 30000000,
    },
    {
        name: "Naboo",
        rotation_period: 26,
        orbital_period: 312,
        diameter: 12120,
        climate: "temperate",
        gravity: "1 standard",
        terrain: "grassy hills, swamps, forests, mountains",
        surface_water: 12,
        population: 4500000000,
    },
    {
        name: "Coruscant",
        rotation_period: 24,
        orbital_period: 368,
        diameter: 12240,
        climate: "temperate",
        gravity: "1 standard",
        terrain: "cityscape, mountains",
        surface_water: "unknown",
        population: 1000000000000,
    },
    {
        name: "Kamino",
        rotation_period: 27,
        orbital_period: 463,
        diameter: 19720,
        climate: "temperate",
        gravity: "1 standard",
        terrain: "ocean",
        surface_water: 100,
        population: 1000000000,
    },
    {
        name: "Geonosis",
        rotation_period: 30,
        orbital_period: 256,
        diameter: 11370,
        climate: "temperate, arid",
        gravity: "0.9 standard",
        terrain: "rock, desert, mountain, barren",
        surface_water: 5,
        population: 100000000000,

    }
]
function search() {
    var input, filter, table, tr, td, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('myTable');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function sort(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName('tr');
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i + 1].getElementsByTagName("td")[n];
            var cmpX = isNaN(parseInt(x.innerHTML)) ? x.innerHTML.toLowerCase() : parseInt(x.innerHTML);
            var cmpY = isNaN(parseInt(y.innerHTML)) ? y.innerHTML.toLowerCase() : parseInt(y.innerHTML);
            cmpX = (cmpX == '-') ? 0 : cmpX;
            cmpY = (cmpY == '-') ? 0 : cmpY;
            if (dir == "asc") {
                if (cmpX > cmpY) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (cmpX < cmpY) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        }
        else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }

        }
    }
}

text = "";
for (var i = 0; i < planets.length; i++) {
    name = planets[i].name;
    rotation_period = planets[i].rotation_period;
    orbital_period = planets[i].orbital_period;
    diameter = planets[i].diameter;
    climate = planets[i].climate;
    gravity = planets[i].gravity;
    terrain = planets[i].terrain;
    surface_water = planets[i].surface_water;
    population = planets[i].population;
    text += '<tr>'
    text += '<td>' + name + '</td>'
    text += '<td>' + rotation_period + '</td>'
    text += '<td>' + orbital_period + '</td>'
    text += '<td>' + diameter + '</td>'
    text += '<td>' + climate + '</td>'
    text += '<td>' + gravity + '</td>'
    text += '<td>' + terrain + '</td>'
    text += '<td>' + surface_water + '</td>'
    text += '<td>' + population + '</td>'
    text += '</tr>'
}
document.querySelector('tbody#table').innerHTML = text