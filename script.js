function sortBlock(pokedex) {
    const a = pokedex.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase(); 
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
    });
    return a
}

function FilterArray(pokedex, type) {
    const filterArray = []
    for (let item of pokedex) {
        if (item.type.includes(type)) {
            filterArray.push(item)
        }
    }
    return filterArray
}

function createBlock(a, b) {
    const $li = document.createElement('li')
    $li.textContent = `${a}: ${b}`
    return $li
}  

function createUl(pokedex) {
    const $ul = document.createElement('ul')
    $ul.classList.add('ul')
    for (const a of pokedex) {
        for (const b in a.base) {

            const li = createBlock(b, a.base[b])
            $ul.append(li)
        }
    }
    return $ul
}

function createUnique(pokedex) {
    const Unique = []
    for (const c of pokedex) {
        for (const d of c.type) {
            if (!Unique.includes(d)) {
                Unique.push(d)
            }
        }
    }
    return Unique
}

function createTitle(pokemon) {
    const Name = document.createElement('h2')
    Name.textContent = pokemon.name
return Name
}

function createStat(pokemon) {
    const HP = document.createElement('h5')
    const Attack = document.createElement('h5')
    const Defense = document.createElement('h5')
    const SpAttack = document.createElement('h5')
    const SpDefense = document.createElement('h5')
    const Speed = document.createElement('h5')
    HP.textContent = 'HP: ' + pokemon.base.HP
    Attack.textContent = 'Attack: ' + pokemon.base.Attack
    Defense.textContent = 'Defense: ' + pokemon.base.Defense
    SpAttack.textContent = 'SpAttack: ' + pokemon.base['Sp. Attack']
    SpDefense.textContent = 'SpDefense: ' + pokemon.base['Sp. Defense']
    Speed.textContent = 'Speed: ' + pokemon.base.Speed
    const statDiv = document.createElement('div')
    statDiv.append(HP, Attack, Defense, SpAttack, SpDefense, Speed)
    return statDiv

}

function createIMG(pokemon) {
    const IMGdiv = document.createElement('div')
    const IMG = document.createElement('img')
    IMG.classList.add('Image')
    IMGdiv.classList.add('Image')
    IMGdiv.id = 'Image'
    IMG.src = pokemon.sprite
    IMGdiv.append(IMG)
    return IMGdiv  
}

function calc(array) {
    let totalHP = 0
    let totalAttack = 0
    for (let pokemon of array) {
        totalHP = totalHP + pokemon.base.HP
        totalAttack = totalAttack + pokemon.base.Attack
    }
    return 'Total HP: ' + totalHP + ' | ' + 'Total Attack: ' + totalAttack 
}

function createOnePokemon(pokemon) {
    const parent = document.createElement('div')
    parent.classList.add('block1')
    parent.id = 'block1'
    const link = document.createElement('a')
    link.href = pokemon.url
    link.target = '_blank'
    const Title = createTitle(pokemon)
    const IMG = createIMG(pokemon)
    const Stat = createStat(pokemon)
    link.append(Title, IMG, Stat)
    parent.append(link)
    return parent
}

function Main() {
    const main = document.getElementById('Pokedex')
    const fragment = document.createDocumentFragment()
    const group = createUnique(pokedex)
    fragment.append(createNavBar(group))
    for(let type of group) {
        let filterArray = FilterArray(pokedex, type)
        let sorted = sortBlock(filterArray)
        let title = createSectionTitle(sorted, type)
        fragment.append(title)
    for (let pokemon of sorted) {
        fragment.append(createOnePokemon(pokemon))
    }
    }
         main.append(fragment)
}

function createSectionTitle(array, type) {
    const titleDiv = document.createElement('div')
    titleDiv.id = type
    titleDiv.classList.add('typeSection')
    const title = document.createElement('h2') 
    title.textContent = 'Type: ' + type + ' ('+array.length+')'
    const total = document.createElement('p')
    total.textContent = calc(array)
    const top = document.createElement('a')
    top.href = '#top'
    top.textContent = 'Back to Top'
    titleDiv.append(title, total, top)
    return titleDiv
}

function createNavBar(array) {
    const nav = document.createElement('div')
    nav.classList.add('navBar')
    const ul = document.createElement('ul')
    for(let type of array) {
        let li = document.createElement('li')
        let link = document.createElement('a')
        link.textContent = type
        link.href = '#' + type
        li.append(link)
        ul.append(li)
    }
    nav.append(ul)
    return nav
}
Main()






 








/* function createLabel (Pokedex) {
    const $Label = document.createElement('div')
    $Label.classList.add('label')
    $Label.textContent = Pokedex
    return $Label
}

function createPockemon ( ID, name, type, base) {
    const $Pockemon = document.createElement('div')
    $Pokedex.classList.add('Pokedex')
    $Pokedex.title = code
    $Pokedex.append(createBlock(Pokedex), createLabel(name))
    return $Pokedex

for (const base in Pokedex)
}
function createPokedexGallery (Pokedex){
    const $pokedexGallery = document.getElementById('Pokedex')
    for (const char in Pokedex){
     $pokedexGallery.append(createPokedex(Pokedex[char].char,Pokedex[char].code, Pokedex[char].name))}
    }
    createPokedexGallery(Pokedex) */

