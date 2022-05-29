// alert()
const URL = 'https://swapi.py4e.com/api/'

const buttons = document.querySelector('.buttons')
const pagination = document.querySelector('.pagin')
let allResults = []
let curURL
const tempArray = []

const thClass2 = document.querySelector('.thClass2')
const thClass3 = document.querySelector('.thClass3')
const thClass4 = document.querySelector('.thClass4')
const thClass5 = document.querySelector('.thClass5')

//define and added listener for input select
const currDataInputValue = document.querySelector('#howMany')

// let currentPag
// let handler

let actualKey
let urlToSearch

const contentDetails = document.querySelector('.content')

const tableInputs = document.querySelector('.inputs')
const tableClass = document.querySelector('.table')
const deleteModal = document.querySelector('.deleteModal')

const modalYes = document.querySelector('.modalYes')
const modalNo = document.querySelector('.modalNo')
const modalButtons = document.querySelector('.modalButtons')

const newsButtonDiv = document.querySelector('.newsButtonDiv')
const newsButton = document.querySelector('.newsButton')

const newsButtonDivPlanets = document.querySelector('.newsButtonDivPlanets')
const newsPlanetButton = document.querySelector('.newsPlanetButton')
const planetsNews = document.querySelector('.planetsNews')
const newsPlanetsClose = document.querySelector('.newsPlanetsClose')
const reviev = document.querySelector('.reviev')
const revicContent = document.querySelector('.revicContent')
const revievClose = document.querySelector('.revievClose')

const speciesInput2 = document.querySelector('.speciesInput2')
const speciesInput = document.querySelector('.speciesInput')
const extraSpecies = document.querySelector('.extraSpecies')

const vehiclesInput2 = document.querySelector('.vehiclesInput2')
const vehiclesInput = document.querySelector('.vehiclesInput')
const extraVehicles = document.querySelector('.extraVehicles')

const StarshipsInput2 = document.querySelector('.StarshipsInput2')
const StarshipsInput = document.querySelector('.StarshipsInput')
const extraStarships = document.querySelector('.extraStarships')




// ------------------------------------------------------------------- ZADANIE C + D + E + F---------------------------------------------------------------------
async function getAllApi() {
    // console.log(currDataInputValue.value)
    const rawData = await fetch(URL)
    const data = await rawData.json()

    for (const key in data) {
        const but = document.createElement('button')
        but.innerText = key
        but.classList.add("button");
        but.classList.add("glow-on-hover");
        buttons.appendChild(but)

        const currentUrl = data[key]
        // console.log(currentUrl)


        but.addEventListener('click', async () => {
            actualKey = key
            tableInputs.style.display = 'flex'
            tableClass.style.display = 'block'
            pagination.innerText = ''
            tabelBody.innerText = ''
            curURL = currentUrl
            console.log(curURL)

            urlToSearch = `${URL}${actualKey}?search=`

            const rawData = await fetch(currentUrl)
            const data = await rawData.json()
            // console.log(data)
            allResults.length = 0
            //all 
            let counter = 0

            counter = data.count / 10
            if (counter % 10 == 0) {
                counter
            }
            if (counter % 10 != 0) {
                counter += 1
            }


            for (let i = 1; i < counter; i++) {
                const allItemURL = `${currentUrl}?page=${i}`
                const rawData2 = await fetch(allItemURL)
                const data = await rawData2.json()
                // console.log(data)
                //added pagination button
                let id_counter = 1
                switch (key) {
                    case 'people':
                        // console.log(data.results)
                        data.results.forEach(element => {
                            const newObj = new People(element.name, element.height, element.mass, element.birth_year, element.created, element.edited, element.eye_color, element.hair_color, id_counter)
                            allResults.push(newObj)
                            id_counter++
                        });
                        break;
                    case 'planets':
                        data.results.forEach(element => {
                            const newObj = new Planet(element.name, element.rotation_period, element.orbital_period, element.climate, element.created, element.gravity, element.surface_water, element.population, id_counter)
                            allResults.push(newObj)
                            id_counter++
                        });
                        break;
                    case 'films':
                        data.results.forEach(element => {
                            const newObj = new Film(element.title, element.director, element.episode_id, element.producer, element.created, element.release_date, element.opening_crawl, element.edited, id_counter)
                            allResults.push(newObj)
                            id_counter++
                        });
                        break;
                    case 'species':
                        data.results.forEach(element => {
                            const newObj = new Species(element.name, element.designation, element.average_height, element.hair_colors, element.created, element.homeworld, element.language, element.classification, id_counter)
                            allResults.push(newObj)
                            id_counter++
                        });
                        break;
                    case 'vehicles':
                        data.results.forEach(element => {
                            const newObj = new Vehicle(element.name, element.model, element.manufacturer, element.crew, element.created, element.length, element.passengers, element.vehicle_class, id_counter)
                            allResults.push(newObj)
                            id_counter++
                        });
                        break;
                    case 'starships':
                        data.results.forEach(element => {
                            const newObj = new Starship(element.name, element.model, element.manufacturer, element.crew, element.created, element.consumables, element.MGLT, element.cargo_capacity, id_counter)
                            allResults.push(newObj)
                            id_counter++
                        });
                        break;
                    default:
                        console.log(`Sorry, sth going wrong`);
                }

            }
            // console.log(allResults)

            makeTable()



        })
    }
}
getAllApi()



// makeTable()
///------------------------------------------------------------------ ZADANIE F ----------------------------------------------------------------------------





class People {
    constructor(name, height, mass, birth_year, created, edited, eye_color, hair_color, id) {

        this.name = name,
            this.height = height,
            this.mass = mass,
            this.birth_year = birth_year,

            this.created = created,
            this.edited = edited,
            this.eye_color = eye_color,
            this.hair_color = hair_color
        this.id = id
        this.checked = false
    }
}

class Planet {
    constructor(name, rotation_period, orbital_period, climate, created, gravity, surface_water, population, id) {

        this.name = name,
            this.rotation_period = rotation_period,
            this.orbital_period = orbital_period,
            this.climate = climate,

            this.created = created,
            this.gravity = gravity,
            this.surface_water = surface_water,
            this.population = population
        this.id = id
        this.checked = false
    }
    homManyTimes(){
        return this.rotation_period * this.orbital_period
    }
}

class Film {
    constructor(title, director, episode_id, producer, created, release_date, opening_crawl, edited, id) {

        this.title = title,
            this.episode_id = episode_id,
            this.director = director,
            this.producer = producer,

            this.created = created,
            this.release_date = release_date,
            this.opening_crawl = opening_crawl,
            this.edited = edited
        this.id = id
        this.checked = false
    }
    reviev(){
        return this.opening_crawl
    }

}

class Species {
    constructor(name, designation, average_height, hair_colors, created, homeworld, language, classification, id) {

        this.name = name,
            this.designation = designation,
            this.average_height = average_height,
            this.hair_colors = hair_colors,

            this.created = created,
            this.homeworld = homeworld,
            this.language = language,
            this.classification = classification
        this.id = id
        this.checked = false
    }
    count(){
        return this.average_height - speciesInput2.value
    }
}

class Vehicle {
    constructor(name, model, manufacturer, crew, created, length, passengers, vehicle_class, id) {

        this.name = name,
            this.model = model,
            this.manufacturer = manufacturer,
            this.crew = crew,

            this.created = created,
            this.length = length,
            this.passengers = passengers,
            this.vehicle_class = vehicle_class
        this.id = id
        this.checked = false
    }
    check(){
        return this.passengers - vehiclesInput2.value
    }
}

class Starship {
    constructor(name, model, manufacturer, crew, created, consumables, MGLT, cargo_capacity, id) {

        this.name = name,
            this.model = model,
            this.manufacturer = manufacturer,
            this.crew = crew,

            this.created = created,
            this.consumables = consumables,
            this.MGLT = MGLT,
            this.cargo_capacity = cargo_capacity
        this.id = id
        this.checked = false

    }
    check(){
        return this.cargo_capacity - StarshipsInput2.value
    }
}


//zadanie g
const tabelBody = document.querySelector(".tableBody");

const table = document.querySelector('.tab')

function initTh() {
    const oneObject = allResults[0]
    tempArray.length = 0

    for (const key in oneObject) {
        tempArray.push(key)
    }

    thClass2.innerText = tempArray[0]
    thClass3.innerText = tempArray[1]
    thClass4.innerText = tempArray[2]
    thClass5.innerText = tempArray[3]
}

function initDateIcons() {
    const date = new Date()

    const day = date.getDate()
    const month = (date.getMonth() + 1)
    const year = date.getFullYear()

    const fullYear = `${day}-${month}-${year}`
    const ikonTrash = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>`
    const detailIkon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg>`
    const res = {
        year: fullYear,
        iconTrash: ikonTrash,
        iconDetail: detailIkon
    }
    return res
}

let currentPage = 1
const perPage = 10
let start
let skip

function makeTable() {

    initTh()
    const dataAndIcons = initDateIcons()

    let i = 0

    //  another way

    allResults.forEach(el => {
        i++
        if (i < (currDataInputValue.value)) {
            // console.log(actualKey)
            // special for people
            if(actualKey == 'people'){
                newsButtonDiv.style.display = 'flex'
            } else {
                newsButtonDiv.style.display = 'none'
                peopleNews.style.display = 'none'
            }

            if(actualKey == 'planets'){
                newsButtonDivPlanets.style.display = 'flex'
            }
             else {
                newsButtonDivPlanets.style.display = 'none'
                planetsNews.style.display = 'none'
            }
            if(actualKey != 'films'){
                reviev.style.display = 'none'
            }
            if(actualKey == 'species'){
                extraSpecies.style.display = 'flex'
            } else{
                extraSpecies.style.display = 'none'
                speciesResults.innerHTML = ''
                speciesInput.value = ''
                speciesInput2.value = ''
            }
            if(actualKey == 'vehicles'){
                extraVehicles.style.display = 'flex'
            } else{
                extraVehicles.style.display = 'none'
                vehiclesResults.innerHTML = ''
                vehiclesInput.value = ''
                vehiclesInput2.value = ''
            }
            if(actualKey == 'starships'){
                extraStarships.style.display = 'flex'
            } else{
                extraStarships.style.display = 'none'
                StarshipsResults.innerHTML = ''
                StarshipsInput.value = ''
                StarshipsInput2.value = ''
            }
             

            const crDate = el[tempArray[4]]
            const newDate = new Date(crDate)
            // console.log(newDate)
            let day = newDate.getDate()
            const month = (newDate.getMonth() + 1)
            const year = (newDate.getFullYear()) % 100

            if (day < 10) {
                day = `0${day}`
            }
            const fullDate = `${day}//${month}//${year}`


            tr = document.createElement('tr');

            td0 = document.createElement('td');
            td0.innerHTML = i;
            tr.appendChild(td0);

            td1 = document.createElement('td');
            td1.innerHTML = el[tempArray[0]];
            tr.appendChild(td1);

            td2 = document.createElement('td');
            td2.innerHTML = el[tempArray[1]];
            tr.appendChild(td2);

            td3 = document.createElement('td');
            td3.innerHTML = el[tempArray[2]];
            tr.appendChild(td3);

            td4 = document.createElement('td');
            td4.innerHTML = el[tempArray[3]];
            tr.appendChild(td4);

            td5 = document.createElement('td');
            td5.innerHTML = fullDate;
            tr.appendChild(td5);

            td6 = document.createElement('td');
            td6.classList.add('flex')
            butto = document.createElement('button')
            butto.classList.add('flex')
            butto.classList.add('marginR')
            butto.innerHTML = dataAndIcons.iconTrash
            butto.addEventListener('click', () => {
                modalButtons.innerHTML = ''

                btn1 = document.createElement('button')
                btn1.innerText = 'Yes'
                modalButtons.appendChild(btn1)
                btn1.addEventListener('click', () => {
                    let indexToDel = allResults.indexOf(el)
                    // console.log('indesk el do usuniecia', indexToDel)

                    allResults.splice(indexToDel, 1)
                    deleteModal.style.display = 'none'
                    // console.log(allResults)
                    tabelBody.innerText = ''
                    makeTable()

                })


                btn2 = document.createElement('button')
                btn2.innerText = 'No'
                modalButtons.appendChild(btn2)
                btn2.addEventListener('click', () => {
                    deleteModal.style.display = 'none'
                })


                deleteModal.style.display = 'flex'
            })
            td6.appendChild(butto)

            butto2 = document.createElement('button')
            butto2.classList.add('flex')
            butto2.innerHTML = dataAndIcons.iconDetail
            butto2.addEventListener('click', () => {
                contentDetails.innerHTML = ''
                details.style.display = 'flex'
                for (let i = 0; i < tempArray.length; i++) {
                    const p = document.createElement('p')
                    p.innerHTML = `${tempArray[i]} : ${el[tempArray[i]]}`
                    contentDetails.appendChild(p)
                }
            })
            td6.appendChild(butto2)
            

            //added checkbox
            check = document.createElement('input')
            check.type = 'checkbox'
            check.id = el.id
            check.addEventListener('change', () => {
                el.checked = true
                // console.log(el.checked)
            })

            td6.appendChild(check)
            tr.appendChild(td6);
            if(actualKey == 'films'){
                td7 = document.createElement('td');
                buttonFilm = document.createElement('button')
                buttonFilm.innerText = 'Reviev'
                buttonFilm.addEventListener('click',()=>{
                    reviev.style.display = 'flex'
                    revicContent.innerHTML = el.reviev()
                })
                td7.appendChild(buttonFilm)
                tr.appendChild(td7);
            }
            
            
            // <td><button>${dataAndIcons.iconTrash} </button>
            // //                     <td><button class = "showDet">${dataAndIcons.iconDetail} </button>
            tabelBody.appendChild(tr);
        }
    })


    makePaginationButton()
}

let tableData = []

function makePaginationButton() {
    pagination.innerText = ''
    // console.log('allres', allResults.length)

    const dataAndIcons = initDateIcons()
    if (allResults.length > 10) {
        {
            const butt = document.createElement('button')
            butt.innerText = '<<'
            butt.classList.add("buttonPagination");
            pagination.appendChild(butt)
            butt.addEventListener('click', () => {
                // constabelBody.innerHTML = ''
                // let inputValue = butt.innerText
                // 
                if (currentPage != 1) {

                    currentPage--
                    tableData.length = 0
                    for (let i = ((currentPage * currDataInputValue.value) - currDataInputValue.value); i < (currentPage * currDataInputValue.value); i++) {
                        if (allResults[i] != undefined) {
                            tableData.push(allResults[i])
                        }
                    }
                    draw(currentPage)
                }
            })
        }

        const divider = Math.ceil(allResults.length / currDataInputValue.value)
        for (let i = 1; i < divider + 1; i++) {
            {
                const butt = document.createElement('button')
                butt.innerText = i
                butt.classList.add("buttonPagination");
                pagination.appendChild(butt)

                butt.addEventListener('click', () => {
                    // for(let i = 0; i < allResults.length; i++){

                    tabelBody.innerHTML = ''
                    let inputValue = butt.innerText
                    currentPage = inputValue
                    tableData.length = 0
                    for (let i = ((inputValue * currDataInputValue.value) - currDataInputValue.value); i < (inputValue * currDataInputValue.value); i++) {
                        if (allResults[i] != undefined) {
                            tableData.push(allResults[i])
                        }

                    }
                    draw(inputValue)

                })

            }

        }
        {
            const butt = document.createElement('button')
            butt.innerText = '>>'
            butt.classList.add("buttonPagination");
            pagination.appendChild(butt)
            butt.addEventListener('click', () => {
                // constabelBody.innerHTML = ''
                // let inputValue = butt.innerText
                // 
                currentPage++
                tableData.length = 0
                for (let i = ((currentPage * currDataInputValue.value) - currDataInputValue.value); i < (currentPage * currDataInputValue.value); i++) {
                    if (allResults[i] != undefined) {
                        tableData.push(allResults[i])
                    }
                }
                draw(currentPage)
            })
        }
    }
}

//added listener for input select for pagination
currDataInputValue.addEventListener('change', () => {

    tabelBody.innerText = ''
    makeTable(currentPage)

})

//added listener for next button

function draw(inputValue = 1) {
    tabelBody.innerText = ''
    const dataAndIcons = initDateIcons()

    let j = inputValue - 1
    if (inputValue != 1) {
        j *= currDataInputValue.value
    }

    tableData.forEach(el => {
        const crDate = el[tempArray[4]]
        const newDate = new Date(crDate)
        // console.log(newDate)
        let day = newDate.getDate()
        const month = (newDate.getMonth() + 1)
        const year = (newDate.getFullYear()) % 100

        if (day < 10) {
            day = `0${day}`
        }
        const fullDate = `${day}//${month}//${year}`
        j++

        tr = document.createElement('tr');

        td0 = document.createElement('td');
        td0.innerHTML = j;
        tr.appendChild(td0);

        td1 = document.createElement('td');
        td1.innerHTML = el[tempArray[0]];
        tr.appendChild(td1);

        td2 = document.createElement('td');
        td2.innerHTML = el[tempArray[1]];
        tr.appendChild(td2);

        td3 = document.createElement('td');
        td3.innerHTML = el[tempArray[2]];
        tr.appendChild(td3);

        td4 = document.createElement('td');
        td4.innerHTML = el[tempArray[3]];
        tr.appendChild(td4);

        td5 = document.createElement('td');
        td5.innerHTML = fullDate;
        tr.appendChild(td5);

        td6 = document.createElement('td');
        td6.classList.add('flex')
        butto = document.createElement('button')
        butto.classList.add('flex')
        butto.classList.add('marginR')
        butto.innerHTML = dataAndIcons.iconTrash
        butto.addEventListener('click', () => {
            modalButtons.innerHTML = ''

            btn1 = document.createElement('button')
            btn1.innerText = 'Yes'
            modalButtons.appendChild(btn1)
            btn1.addEventListener('click', () => {
                const itemToDel = el.id
                // console.log(itemToDel)

                allResults.splice((itemToDel - 1), 1)
                deleteModal.style.display = 'none'
                // console.log(allResults)
                // makePaginationButton()
                // tableData = allResults
                // draw(currentPage)
                tabelBody.innerText = ''
                makeTable()

            })


            btn2 = document.createElement('button')
            btn2.innerText = 'No'
            modalButtons.appendChild(btn2)
            btn2.addEventListener('click', () => {
                deleteModal.style.display = 'none'
            })


            deleteModal.style.display = 'flex'
        })
        td6.appendChild(butto)

        butto2 = document.createElement('button')
        butto2.classList.add('flex')
        butto2.innerHTML = dataAndIcons.iconDetail
        butto2.addEventListener('click', () => {
            contentDetails.innerHTML = ''
            details.style.display = 'flex'
            for (let i = 0; i < tempArray.length; i++) {
                const p = document.createElement('p')
                p.innerHTML = `${tempArray[i]} : ${el[tempArray[i]]}`
                contentDetails.appendChild(p)
            }
        })
        check = document.createElement('input')
        check.type = 'checkbox'
        check.id = el.id
        check.addEventListener('change', () => {
            el.checked = true
            // console.log(el.checked)
        })


        td6.appendChild(butto2)
        td6.appendChild(check)
        tr.appendChild(td6);

        tabelBody.appendChild(tr);

    })
}


//-------------------------------------WYSZUKIWARKA----------------------------------------------------
const inputSearch = document.querySelector('.inputSearch')
inputSearch.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        const searchingWord = inputSearch.value.toLowerCase()
        if (searchingWord != '') {
            tempArraySearch = []
            tempArraySearchObject = []

            for (let i = 0; i < allResults.length; i++) {
                for (const key in allResults[i]) {
                    if (allResults[i][key].toString().toLowerCase().includes(searchingWord)) {
                        tempArraySearch.push(allResults[i])
                    }

                }
            }
            // console.log(tempArraySearch)
            tabelBody.innerHTML = ''
            const dataAndIcons = initDateIcons()

            let j = 0

            tempArraySearch.forEach(el => {
                const crDate = el[tempArray[4]]
                const newDate = new Date(crDate)
                // console.log(newDate)
                let day = newDate.getDate()
                const month = (newDate.getMonth() + 1)
                const year = (newDate.getFullYear()) % 100

                if (day < 10) {
                    day = `0${day}`
                }
                const fullDate = `${day}//${month}//${year}`
                j++

                tr = document.createElement('tr');

                td0 = document.createElement('td');
                td0.innerHTML = j;
                tr.appendChild(td0);

                td1 = document.createElement('td');
                td1.innerHTML = el[tempArray[0]];
                tr.appendChild(td1);

                td2 = document.createElement('td');
                td2.innerHTML = el[tempArray[1]];
                tr.appendChild(td2);

                td3 = document.createElement('td');
                td3.innerHTML = el[tempArray[2]];
                tr.appendChild(td3);

                td4 = document.createElement('td');
                td4.innerHTML = el[tempArray[3]];
                tr.appendChild(td4);

                td5 = document.createElement('td');
                td5.innerHTML = fullDate;
                tr.appendChild(td5);

                td6 = document.createElement('td');
                td6.classList.add('flex')
                butto = document.createElement('button')
                butto.classList.add('flex')
                butto.classList.add('marginR')
                butto.innerHTML = dataAndIcons.iconTrash
                butto.addEventListener('click', () => {
                    modalButtons.innerHTML = ''

                    btn1 = document.createElement('button')
                    btn1.innerText = 'Yes'
                    modalButtons.appendChild(btn1)
                    btn1.addEventListener('click', () => {
                        const itemToDel = el.id
                        // console.log(itemToDel)

                        allResults.splice((itemToDel - 1), 1)
                        deleteModal.style.display = 'none'
                        // console.log(allResults)
                        // makePaginationButton()
                        // tableData = allResults
                        // draw(currentPage)
                        tabelBody.innerText = ''
                        makeTable()

                    })


                    btn2 = document.createElement('button')
                    btn2.innerText = 'No'
                    modalButtons.appendChild(btn2)
                    btn2.addEventListener('click', () => {
                        deleteModal.style.display = 'none'
                    })


                    deleteModal.style.display = 'flex'
                })
                td6.appendChild(butto)

                butto2 = document.createElement('button')
                butto2.classList.add('flex')
                butto2.innerHTML = dataAndIcons.iconDetail
                butto2.addEventListener('click', () => {
                    contentDetails.innerHTML = ''
                    details.style.display = 'flex'
                    for (let i = 0; i < tempArray.length; i++) {
                        const p = document.createElement('p')
                        p.innerHTML = `${tempArray[i]} : ${el[tempArray[i]]}`
                        contentDetails.appendChild(p)
                    }
                })
                check = document.createElement('input')
                check.type = 'checkbox'
                check.id = el.id
                check.addEventListener('change', () => {
                    el.checked = true
                    // console.log(el.checked)
                })


                td6.appendChild(butto2)
                td6.appendChild(check)
                tr.appendChild(td6);

                tabelBody.appendChild(tr);

            })

        }
        if (searchingWord == '') {
            tabelBody.innerText = ''
            makeTable()
        }
    }
})

//--------------------------------------JUMP TO--------------------------------------------
const jumpSearch = document.querySelector('.jumpSearch')
jumpSearch.addEventListener('keypress', (event) => {
    if (event.key = "Enter") {
        const jumpValue = jumpSearch.value
        if (jumpValue != '') {
            currentPage = jumpValue
            tableData.length = 0
            for (let i = ((currentPage * currDataInputValue.value) - currDataInputValue.value); i < (currentPage * currDataInputValue.value); i++) {
                if (allResults[i] != undefined) {
                    tableData.push(allResults[i])
                }
            }
        }
        draw(currentPage)

    }

})


//-------------------------------------------------MODULE DETAILS----------------------------------------------------
const details = document.querySelector('.details')
const closeButton = document.querySelector('.close')

closeButton.addEventListener('click', () => {
    details.style.display = "none"
})

/////////////////////////////////////////////////DELETE MODULE--------------------------------------------------------

const buttonDelete = document.querySelector('.buttonDelete')
buttonDelete.addEventListener('click', () => {
    const dataToDelete = []
    allResults.forEach(el => {
        if (el.checked == true) {
            dataToDelete.push(allResults.indexOf(el))
            // dataToDelete.push(el.id)
        }

    })
    // console.log('Elementy do usunięcia to indeksy : ', dataToDelete)

    for (let i = dataToDelete.length - 1; i >= 0; i--) {
        allResults.splice(dataToDelete[i], 1);
    }

    tabelBody.innerText = ''
    makeTable()
})

/////////////////////////////////////////////////////EXTRA FIELDS/////////////////////////////////////////////////////////////////

window.addEventListener('dblclick', () => {
    const baner = document.querySelector('.baner')
    baner.classList.toggle('toggleBaner')
})

window.addEventListener('mousemove', (event) => {
    let x = event.pageX
    let y = event.pageY
    if ((x > 800 && x < 860) && (y > 200 && y < 280)) {
        const hided = document.querySelector('.hided')
        hided.addEventListener('click', () => {
            hided.style.display = 'none'
        })
        hided.style.display = 'block'
    }
    // console.log(event.pageX)
    // console.log(event.pageY)
})

window.addEventListener('keypress', (event) => {
    if (event.key == 'q') {
        const audio = document.getElementById("myAudio");
        audio.play()
    }
    if (event.key == 'l') {
        const audio = document.getElementById("myAudio");
        audio.pause()
    }
})

//-------------------------SPECIAL FOR SPECIFIC CLASS----------------------------------
//PEOPLE
peopleNews = document.querySelector('.peopleNews')
newsClose = document.querySelector('.newsClose')
peopleNewsHighest = document.querySelector('.peopleNewsHighest')

newsButton.addEventListener('click',()=>{
    peopleNews.style.display = 'flex'
})

newsClose.addEventListener('click',()=>{
    peopleNews.style.display = 'none'
})

peopleNewsHighest.innerHTML = `The highest person is Yarael Poof - he has 264cm`

//Planets
const planetsNewsHighest = document.querySelector('.planetsNewsHighest')
newsPlanetButton.addEventListener('click',()=>{
    let highCount = (allResults[0].orbital_period * allResults[0].rotation_period)
    let highName = allResults[0].name
    for(let i = 0; i < allResults.length; i++){
        if( (allResults[i].orbital_period != 'unknown') && (allResults[i].rotation_period != 'unknown') ){
            if(allResults[i].orbital_period * allResults[i].rotation_period > highCount){
                highCount = allResults[i].orbital_period * allResults[i].rotation_period
                highName = allResults[i].name
            }
        }
    }

    planetsNewsHighest.innerHTML = `During the rotation of the orbit of the planet ${highName}, it rotates its own axis:${highCount} times`
    planetsNews.style.display = 'flex'
})

newsPlanetsClose.addEventListener('click',()=>{
    planetsNews.style.display = 'none'
})

//films
revievClose.addEventListener('click',() =>{
    reviev.style.display = 'none'
})

//species
const count = document.querySelector('.count')
const speciesResults = document.querySelector('.speciesResults')
count.addEventListener('click',() =>{
    const inputRase = speciesInput.value
    let currentSpecies
    allResults.forEach(el =>{
        if(el.name == inputRase && el.average_height != 'n/a' && el.average_height != 'unknown'){
            currentSpecies = el.name
            // res = 0
            // const res = el.count()
            // (res > 0)? speciesResults.innerHTML = ` You are lower ${res} cm then ${currentSpecies}` : ` You are biger ${res} cm then ${currentSpecies}`
            // console.log(typeof el.average_height)
            // console.log(typeof el[1].average_height)
            if( el.count() > 0){
                speciesResults.innerHTML = ` You are lower ${el.count()} cm`
            } else if (el.count() < 0){
                speciesResults.innerHTML = ` You are biger ${el.count()} cm`
            } else if(el.count() == 0){
                speciesResults.innerHTML = ` You are equal`
            }
            
        }
        //  else {
            // speciesResults.innerHTML = ` Sorry sth going wrong, height is not a numb ?`
        // }
    })

})
const check2 = document.querySelector('.check2')
const vehiclesResults = document.querySelector('.vehiclesResults')
check2.addEventListener('click',() =>{
    const inputModel = vehiclesInput.value
    let currentVehicles
    allResults.forEach(el =>{
        if(el.name == inputModel){
            currentVehicles = el.name
            // console.log(inputModel)
            // console.log(el.check())
            // res = 0
            // const res = el.count()
            // (res > 0)? speciesResults.innerHTML = ` You are lower ${res} cm then ${currentSpecies}` : ` You are biger ${res} cm then ${currentSpecies}`
            // console.log(typeof el.average_height)
            // console.log(typeof el[1].average_height)
            if( el.check() >= 0){
                vehiclesResults.innerHTML = ` You can go`
            } else if (el.check() < 0){
                vehiclesResults.innerHTML = ` To much passengers, take bigger vehicle`
            }
            //  else if(el.count() == 0){
            //     speciesResults.innerHTML = ` You are equal`
            // }
            
        }
        //  else {
            // speciesResults.innerHTML = ` Sorry sth going wrong, height is not a numb ?`
        // }
    })

})
const checkLoad = document.querySelector('.checkLoad')
const StarshipsResults = document.querySelector('.StarshipsResults')
checkLoad.addEventListener('click',() =>{
    const inputModel = StarshipsInput.value
    let currentStarships
    allResults.forEach(el =>{
        if(el.name == inputModel){
            currentStarships = el.name
            // console.log(inputModel)
            // console.log(el.check())
            // res = 0
            // const res = el.count()
            // (res > 0)? speciesResults.innerHTML = ` You are lower ${res} cm then ${currentSpecies}` : ` You are biger ${res} cm then ${currentSpecies}`
            // console.log(typeof el.average_height)
            // console.log(typeof el[1].average_height)
            if( el.check() >= 0){
                StarshipsResults.innerHTML = ` You can go`
            } else if (el.check() < 0){
                StarshipsResults.innerHTML = ` To small, take bigger`
            }
            //  else if(el.count() == 0){
            //     speciesResults.innerHTML = ` You are equal`
            // }
            
        }
        //  else {
            // speciesResults.innerHTML = ` Sorry sth going wrong, height is not a numb ?`
        // }
    })

})
//----------------------------------------------SEARCH URL---------------------------------------------
const searchURLButton = document.querySelector('.searchURLButton')
searchURLButton.addEventListener('click',async() =>{
    // const tempArr = []
    allResults.length = 0
    const link = urlToSearch+inputSearch.value
    const rawData = await fetch(link)
    const data = await rawData.json()
    allResults.length = 0
    data.results.forEach(el =>{
        allResults.push(el)
    })
    tabelBody.innerHTML=''
    // allResults.length = 0
    // allResults = tempArr
    // console.log(allResults)
    makeTable()


    console.log(data)
})

