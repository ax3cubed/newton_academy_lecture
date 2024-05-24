var array = [
    {
      firstName: "Reynold",
      lastName: "Metz",
    },
    {
      firstName: "Edwina",
      lastName: "Ledner",
    },
    {
      firstName: "Bud",
      lastName: "Lueilwitz",
    },
    {
      firstName: "Adah",
      lastName: "Orn",
    },
    {
      firstName: "Melany",
      lastName: "Graham",
    },
    {
      firstName: "Abdiel",
      lastName: "Oberbrunner",
    },
    {
      firstName: "Mario",
      lastName: "Oberbrunner",
    },
    {
      firstName: "Oswald",
      lastName: "Ondricka",
    },
    {
      firstName: "Kyra",
      lastName: "Stamm",
    },
    {
      firstName: "Nova",
      lastName: "Considine",
    },
    {
      firstName: "Hollis",
      lastName: "Ernser",
    },
    {
      firstName: "Sandrine",
      lastName: "Cruickshank",
    },
    {
      firstName: "Dolores",
      lastName: "Hammes",
    },
    {
      firstName: "Jess",
      lastName: "Schiller",
    },
    {
      firstName: "Willis",
      lastName: "McLaughlin",
    },
    {
      firstName: "Winfield",
      lastName: "Batz",
    },
    {
      firstName: "Adella",
      lastName: "Toy",
    },
    {
      firstName: "Antonette",
      lastName: "Littel",
    },
    {
      firstName: "Zane",
      lastName: "Heller",
    },
    {
      firstName: "Herta",
      lastName: "Heller",
    },
  ];
  //sort,filter,find,index,trim,splice,
  let sortedArray = array.sort((a, b) => {
    firstNameA = a.firstName.toLowerCase();
    firstNameB = b.firstName.toLowerCase();
    if (firstNameA < firstNameB) {
      return 1;
    } else if (firstNameA > firstNameB) {
      return -1;
    } else {
      return 0;
    }
  });
  var table = document.getElementById('name_table');
  var body = document.getElementById('nameListBody');
 
  array.forEach(name => {
    var tableRow = document.createElement('tr');
    var tableData = document.createElement("td");
    tableData.innerText= `${name.firstName} ${name.lastName}`;
    tableRow.appendChild(tableData)
    body.appendChild(tableRow)
  })
  
  table.appendChild(body)
  document.appendChild(table)
  console.log(sortedArray);
  