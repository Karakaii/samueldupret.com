/*------------------------------------------------------------------------------
-                           Factions and Maps Data                             -
------------------------------------------------------------------------------*/

// All the faction data:
const factionsData = {}
factionsData.TWW1 = {
    description: "Total War Warhammer I",
    factions: ["Dwarfs", "The Empire", "Greenskins", "The Bloody Handz", "Vampire Counts", "Von Carstein", "Bretonnia", "Bordeleaux", "Carcassonne"]
}
factionsData.TWW2 = {
    description: "Total War Warhammer II",
    factions: ["Dark Elves", "The Blessed Dread", "Cult Of Pleasure", "High Elves", "Order Of Loremasters", "Nagarythe", "Lizardmen", "Last Defenders", "Itza", "Tlaqua", "Skaven", "Clan Pestilens", "Clan Rictus", "Chevaliers De Lyonesse", "The Knights Of Caledor", "The Thousand Maws"]
}
factionsData.mortalEmpire = {
    description: "Mortal Empire",
    factions: ["Karak Kadrin", "The Golden Order", "Middenland", "Mousillon", "The Barrow Legion", "Bonerattlaz", "Ironbrow's Expedition"]
}
factionsData.chaosWarriors = {
    description: "Chaos Warriors",
    factions: ["Warriors Of Chaos"]
}
factionsData.kingWarlord = {
    description: "The King and The Warlord",
    factions: ["Clan Angrund", "Crooked Moon"]
}
factionsData.beastmen = {
    description: "Call of the Beastmen",
    factions: ["Beastmen", "Warherd Of The Shadowgrave", "Harbinger of Disaster"]
}
factionsData.woodElves = {
    description: "The Realm of the Wood Elves",
    factions: ["Wood Elves", "Argwylon"]
}
factionsData.norsca = {
    description: "Norsca",
    factions: ["Norsca", "Wintertooth"]
}
factionsData.queenCrone = {
    description: "The Queen and The Crone",
    factions: ["Har Ganeth", "Avelorn"]
}
factionsData.tombKings = {
    description: "Rise of the Tomb Kings",
    factions: ["Tomb Kings", "Court Of Lybaras", "Exiles Of Nehek", "Followers Of Nagash"]
}
factionsData.vampireCoast = {
    description: "Curse of the Vampire Coast",
    factions: ["Vampire Coast", "The Dreadfleet", "The Drowned", "Pirates Of Sartosa"]
}
factionsData.hunterBeast = {
    description: "The Hunter and The Beast",
    factions: ["The Huntsmarshal's Expedition", "Spirit Of The Jungle"]
}
factionsData.prophetWarlock = {
    description: "The Prophet and The Warlock",
    factions: ["Cult Of Sotek", "Clan Skryre"]
}
factionsData.shadowBlade = {
    description: "The Shadow and The Blade",
    factions: ["Hag Graef", "Clan Eshin"]
}
factionsData.wardenPaunch = {
    description: "The Warden and The Paunch",
    factions: ["Yvresse", "Broken Axe Tribe"]
}
factionsData.twistedTwilight = {
    description: "The Twisted and the Twilight",
    factions: ["Clan Moulder", "Heralds of Ariel", "Wargrove of Woe"]
}
factionsData.silenceFury = {
    description: "The Silence and The Fury",
    factions: ["Ghosts of Pahuax", "Slaughterhorn Tribe"]
}
factionsData.cataph = {
    description: "Cataph's Southern Realms MOD",
    factions: ["Tilea MOD", "Estalia MOD", "Border Princes MOD", "New World Colonies MOD"]
}

// Getting all the faction headers:
const factionHeaders = Object.keys(factionsData)

// Create all the faction names:
const factionNames = []
factionHeaders.forEach(header => {
    factionsData[header]["factions"].forEach(faction => {
        factionNames.push(faction)
    })
})

// List of major factions
const majorFactions = [
    "Beastmen", "Bretonnia", "Dark Elves", "Dwarfs", "The Empire", "Greenskins",
    "High Elves", "Lizardmen", "Norsca", "Skaven", "Tomb Kings", "Vampire Coast",
    "Vampire Counts", "Warriors Of Chaos", "Wood Elves"
]

// All the map data:
const mapNames = {
    Land: ["Altar Of Ultimate Darkness", "Altdorf Outskirts", "Amber Bow", "Ancient Dragon Cave", "Arnheim", "Ash Plains", "Athel Tamarha", "Aymara Swamps", "Barrier Idols", "Battle For Itza", "Battle Of The Cairns", "Battle Of The Eternal Tides", "Bay Of Corsairs Isle (Inland)", "Bay Of Corsairs Isle (North)", "Bay Of Corsairs Isle (South)", "Bjornling’s Gathering", "Black Ark", "Black Ark Landing", "Black Fire Pass", "Bleak Coast Isle (Inland)", "Bleak Coast Isle (North)", "Bleak Coast Isle (South)", "Bleak Dale", "Bloodfire Falls", "Bloodpine Woods", "Broken Leg Gully", "Burial Mound Of Grudsnik", "Cairnwoods", "Castle Drakenhof", "Central Chaos Wastes", "Charnel Valley", "City Of Bones", "Cliff Of Beasts", "Culchan Plains", "Deadwood", "Death Pass", "Devastation Of Ostermark", "Dok Karaz", "Doom Gate", "Doom Glades", "Doom Reach", "Dread Crossing", "Duskwatch Plateau", "Eastern Straits Isle (Inland)", "Eastern Straits Isle (North)", "Eastern Straits Isle (South)", "Empire Unfortified", "Eschen", "Estalian Tomb", "Everale Ridge", "Excavation Site", "Fall Of Man", "Galbaraz", "Glacial Lake", "Gleaming Oasis", "Glooming Wood", "Golden Monolith", "Golden Tributes", "Gor Gazan", "Grimminhagen", "Hel Fenn", "Hell Pit", "Hidden Waystone", "High Pass", "Iron Mountain Pass", "Ironsand Desert", "Isle Of The Crimson Skull", "Karag Dron", "Karak Azgal", "Karak Bhufdar", "Karak Ungor", "Kelp & Koldust", "L'Anguille", "La Maisontaal Abbey", "Leitziger Ford", "Lost Vault Of King Lunn", "Lyonesse Coast", "MP Alpine Ridge", "MP Blue Reach River", "MP Crossroads", "MP Heorot Ridge", "MP Peak Pass", "Marbad's Tomb", "Mask Of Heavens", "Mirror Woods", "Mortis Wastes", "Mosquito Swamps", "Mouth Of The Pass", "Norden", "Northern Chaos Wastes", "Oakenhammer", "Oasis Of False Hope", "Pack Ice Bay", "Pillar Of Bone", "Plain Of Spiders", "Plains Of The Dead", "Plaque Of Sotek", "Plateau Of The Dead", "Praag", "Rackdo Ridge", "Red Desert", "River Amaxon", "River Vilu", "Ruins Of Enduil", "Ruins Of Parravon", "Schwartzhafen", "Sea Of Chaos Isle (East)", "Sea Of Chaos Isle (North)", "Sea Of Chaos Isle (South)", "Shagrath Strand", "Shifting Isles", "Shimmersward", "Shrine Of Ill Omen", "Shrine Of Khaine", "Skjold", "Slann Gold", "Southern Chaos Wastes", "Spice Dunes", "Spite Reach", "Spite Reach Pass", "Star Of Avelorn", "Steps Of Isha: Broken Hills", "Steps Of Isha: Heartlands", "Steps Of Isha: Pit Of Thorns", "Stir River", "Storm Daemon", "Sulphur River", "Summersong", "Swamp Of Terror", "Sword Of Torgald", "Tarrantula Coast Isle (Inland)", "Tarrantula Coast Isle (North)", "Tarrantula Coast Isle (South)", "Temple Of Huanchi", "The Ash Plains", "The Ashenhall", "The Bitter Dunes", "The Black Forests", "The Black Pyramid", "The Black Tower Of Arkhan", "The Broken Land", "The Chill Flow", "The Crack Of Karkan", "The Dead Shore", "The Desert's Bounty", "The Dragon Isles", "The Ember Glades", "The Essence Of Chaos", "The Galleon's Graveyard", "The Golden Colossus", "The Heart of the Dark", "The King's Glade", "The Lost Crater", "The Lost Idols", "The Lost Vault", "The Marthenil Archipelago", "The Maruka Isles", "The Moonbow", "The Moondial", "The Night Glens", "The Northern Threat", "The Oak Of Ages", "The Ogham Shard", "The Pitch Flow", "The Reeking Mire", "The Silver Plains", "The Silver Spire", "The Skymark Reaches", "The Twisted Glade", "The Void Of Hel Fenn", "The Wasteland", "Thieves' Hideout", "Tomb Of The Shifting Sands", "Toothgrass Hill", "Tor Gard", "Tower Of Hoeth", "Troll Country", "Valley Of Thieves", "Vaul’s Anvil", "Volksgrad", "Vulture Ridge", "Wadlenhof", "Wamp Rat Gulch", "Warpstone Mine", "Wildwood Prison", "Wintertooth Crown", "Witchwood Glade", "Witchwood Hollow", "Wyvern Lake", "Xuhua Lake"],
    Siege: ["Akendorf - Empire", "Altdorf - Empire", "Ancient City Of Quintex - Dark Elves", "Arnheim - Dark Elves", "Averheim - Empire", "Barak Varr - Dwarfs", "Bechafen - Empire", "Black Tower Of Arkhan - Tomb Kings", "Bordeleaux - Bretonnia", "Castle Artois – Bretonnia", "Castle Bastonne - Bretonnia", "Castle Carcassonne - Bretonnia", "Castle Drakenhof - Vampire Counts", "Castle Templehof - Vampire Counts", "Chotec - Lizardmen", "Couronne - Bretonnia", "Eagle Gate - High Elves", "Ekrund - Greenskins", "Erengrad – Vampire Counts", "Fort Ostrosk – Empire", "Gaean Vale - High Elves", "Galbaraz - Greenskins", "Ghrond - Dark Elves", "Grey Rock Point - Vampire Coast", "Hag Graef – Dark Elves", "Hag Hall – Dark Elves", "Hellpit - Skaven", "Helmgart - Empire", "Hergig - Empire", "Hexoatl – Lizardmen", "Itza - Lizardmen", "Ka-Sabar - Tomb Kings", "Karak Azgal - Greenskins", "Karak Azul - Greenskins", "Karak Eight Peaks - Greenskins", "Karak Hirn - Dwarfs", "Karak Izor - Dwarfs", "Karak Kadrin - Dwarfs", "Karak Norn - Dwarfs", "Karak Ziflin - Dwarfs", "Karak Zorn - Dwarfs", "Karond Kar - Dark Elves", "Khemri - Tomb Kings", "Kislev - Empire", "Lahmia - Tomb Kings", "Lothern - High Elves", "Lybaras - Tomb Kings", "Lyonesse - Bretonnia", "Macu Peaks – Lizardmen", "Marienburg - Vampire Counts", "Marks Of The Old Ones - Lizardmen", "Mount Gunbad - Greenskins", "Naggarond - Dark Elves", "Numas - Tomb Kings", "Parravon - Bretonnia", "Port Elistor - High Elves", "Port Reaver - Empire", "Pox Marsh - Vampire Coast", "Red Eye Mountain - Greenskins", "Ruins - Skaven", "Salzenmund - Vampire Counts", "Sartosa - Vampire Coast", "Skavenblight - Skaven", "Sulpharets - Dark Elves", "Talabheim - Vampire Counts", "Temple Of Skulls - Lizardmen", "The Awakening - Vampire Coast", "The Blood Swamps – Vampire Coast", "Tlax - Lizardmen", "Tlaxtlan - Lizardmen", "Tor Anroc - High Elves", "Tor Elyr - High Elves", "Tor Sethai - High Elves", "Tor Yvresse (Decrepit) - High Elves", "Tor Yvresse (Fortified) - High Elves", "Tor Yvresse (Rebuilding) — High Elves", "Wolfenburg - Vampire Counts", "Xlanhuapec - Lizardmen", "Zhufbar – Dwarfs"],
    Ambush: ["Bloodpine Woods", "Broken Leg Gully", "Grey Guardians", "Grimminhagen", "Hel Fenn", "Hunter's Pass", "Ice Rock Gorge", "Lake Incatol", "Marbad's Tomb", "Obsidian Peaks", "Pathway to Darkness", "Qu'ittax", "Shadow Wood", "Swamp Of Terror", "The Abyss", "The Black Deeps", "The Desert’s Bounty", "The Galleon's Graveyard", "The Great Forest", "The Wasteland", "Valley Of Thieves", "Witchwood Hollow"],
    Chokepoint: ["Alluvial Plain", "Amaxon Plain", "Arid Pass", "Ash River", "Black Mountain Side", "Blackspine Chasm", "Bladewind Pass", "Blight Water", "Blind River", "Blood River", "Bonechill", "Chasm Of The Condor", "Corpse Run", "Dappled Flow", "Deff Gorge", "Fallen Gates", "Finuval Flood", "Flood Plain", "Frigid Ford", "Green River", "Ironfrost Chasm", "Ironspike Gorge", "Limpopu River", "Misty Mountain Gorge", "River Qurveza", "The Black Flood", "The Heart Of Darkness", "Troubled Waters", "Wind Ripple", "Witchwood River"],
    Settlement: ["Altar Of The Horned Rat", "Avenue Of Gold", "City Of The Mighty Flame", "Dawn's Light", "Dead City Of The Salt Plain", "Evershale", "Ice Rock Gorge", "Ironspike", "Monument Of The Sun", "Necropolis Of Numas", "Palace Of The Golden Skull", "Qu'ittax", "Scrag Hole", "Seat Of Pharakh", "Slaver's Point", "The Golden Colossus", "Titan Peak", "Tor Dranil", "Tower Of The Stars", "Yuatek"],
    Subterranean: ["Caverns Of The Great Bat", "Coldfire Cavern", "Gnaw Pit", "Gouger Gully", "Halls Of Karak Azul", "Lord Kroak's Temple", "Mortuary Of Tzulaqua", "Mushroom Cave", "Nexus Of The Oak", "Passages Of The Asrai", "Pathway to Darkness", "Pits Of Zardok", "Shadow Forest", "Shadow Realm", "The Black Chasm", "The Black Deeps", "The Black Mountains", "The Death Pass Deeps", "The Great Forest", "The Thundering Falls", "Todtheim", "Volcanic Channels", "Warp-Shard Caverns", "Warpblade Tunnels"],
    Freeforall: ["Desert Canyon", "Gilgalion’s Rest", "Grove Of Slaughter", "Lost Temple", "Moonlight Ridge", "Roq'ato Pools", "Shrine Of Khaine", "Steps Of Isha: Shining Summit", "Troll Country", "Warpstone Crater", "Watcher’s Peak", "Woodland Ravine"]
}

/*------------------------------------------------------------------------------
-                         Generating Factions Tables                           -
------------------------------------------------------------------------------*/

let factionsTablesHTML = ""
factionHeaders.forEach(header => {

    // Start a new table
    factionsTablesHTML += `
        <div>
        <table>
        <tr>
        <th>
        <label class="checkbox-container">${factionsData[header].description}<input id="${header}" type="checkbox" onchange="checkChildren(this)"><span class="checkmark"></span></label>
        `

    // Get the factions of each header
    let factions = factionsData[header].factions
    factions.forEach(faction => {
        factionsTablesHTML += `
            <tr>
            <td>
            <label class="checkbox-container">
                <input name="${header}" type="checkbox" id="${faction}"><span class="checkmark"></span>${faction}
            </label>`
    })

    // End table
    factionsTablesHTML += `</table></div>`
})

// Add the tables to the table holder:
$("#factionsTablesHolder").html(factionsTablesHTML)

/*------------------------------------------------------------------------------
-                           Toggling HTML elements                             -
------------------------------------------------------------------------------*/

// Toggle the nb of factions:

// When the button is clicked, or when a number is selected:
function toggleNbFactionsNumbers() {
    // Change design of button:
    if ($('#nbFactionsNumberHolder').css("display") === "none") {
        // if going back to showing: <i class="fas fa-angle-up"></i>
        $('.nbFactionButton').html('<i class="fas fa-angle-up"></i>')
    } else {
        // if going back to hidden: <i class="fas fa-angle-down"></i>
        $('.nbFactionButton').html('<i class="fas fa-angle-down"></i>')
    }

    // Toggle the nbFaction holder:
    $("#nbFactionsNumberHolder").toggle()
}

$(".nbFactionsNumberSpan").click(function (e) {

    // Get the value of the span clicked:
    let spanValue = e.target.innerText

    // Set this value to the nbFactionsSelected:
    $("#nbFactionsSelected").html(spanValue)

    // Toggle the nbFaction holder:
    toggleNbFactionsNumbers()
})

// Toggle Factions Tables:
function toggleFactionsTables() {

    // Change design of button:
    if ($('#factionsTablesOptions').css("display") === "none") {
        // if going back to showing:
        $('#toggleFactionsTablesButton').html('Hide Faction Options')
    } else {
        // if going back to hidden:
        $('#toggleFactionsTablesButton').html('Show Faction Options')
    }

    // Toggle factions tables:
    $("#factionsTablesOptions").toggle()
}

/*------------------------------------------------------------------------------
-                                 Checkboxes                                   -
------------------------------------------------------------------------------*/

// When a header checkbox is checked...
function checkChildren(checkbox) {
    // Get info from heading checkbox that was changed
    let status = checkbox.checked
    let heading = checkbox.id

    // Get faction checkboxes under that heading's name
    let factionCheckboxes = document.getElementsByName(heading)

    // Set them to the same status as the heading checkbox
    factionCheckboxes.forEach(checkbox => {
        checkbox.checked = status
    })
}

// Checking/uncheck all the elements:
function checkAll(isTrue) {
    // Go through every header
    factionHeaders.forEach(header => {
        let checkbox = document.getElementById(header)
        // Check or uncheck this checkbox
        checkbox.checked = isTrue
        // Update the children
        checkChildren(checkbox)
    })
}

/*------------------------------------------------------------------------------
-                                  Generators                                  -
------------------------------------------------------------------------------*/

// Function to randomly choose an element from an array:
function choice(array) {
    let randomIndex = Math.floor(Math.random() * array.length)
    let randomElement = array[randomIndex]
    return randomElement
}

// Generate the maps and the factions
function generateAll() {
    generateFactions()
    generateMap()
}

// Generating factions
function generateFactions() {
    // Get valid factions
    const validFactions = getValidFactions()

    // If there is no validFaction, warn user
    if (validFactions.length == 0) {
        alert("You need to select at least some factions to randomly select from.")

        // And stop function
        return false
    }

    // How many factions are wanted
    let nbFactions = document.getElementById("nbFactionsSelected").innerHTML
    // If the nbFactions asked is larger than the nb of validFactions...
    if (nbFactions > validFactions.length) {
        // set the nbFactions to the nb of validFactions
        nbFactions = validFactions.length
    }

    // is doubles forbidden
    const isForbidden = document.getElementById("factionForbidCheckbox").checked

    // Prepare the choices
    let choices = []

    // Make choices
    let tmpChoice, isValid
    for (var i = 0; i < nbFactions; i++) {
        // Whilst isValid is not turned to true...
        isValid = false
        while (!isValid) {
            // ...select a faction name
            tmpChoice = choice(validFactions)

            // If this faction name has not been choosen yet or you allow doubles
            if (!choices.includes(tmpChoice) || !isForbidden) {
                choices.push(tmpChoice)
                isValid = true
            }
        }
    }

    // Prepare the text to show
    let factionResultsHTML = ""
    choices.forEach((c, i) => {
        factionResultsHTML += `
        <br><button class="reloadButton" onclick="reloadFaction(this);" id="button_${i + 1}"><i class="fas fa-redo-alt fa-xs"></i></button>&emsp;<span id="span_${i + 1}" class="factionNameSpan">${i + 1}. ${c}</span><br>
        `
    })

    // Set this text to the page
    $("#showFactionsResult").html(factionResultsHTML)

}

function reloadFaction(currentButton) {

    // Get all the faction name spans and extract all the faction names from them into an array
    let allFactionNameSpans = $(".factionNameSpan")
    let currentFactionNames = []

    allFactionNameSpans.forEach((span, i) => {
        let text = span.innerText
        let textNumber = i + 1
        let factionName = text.replace(`${textNumber}. `, "")
        currentFactionNames.push(factionName)
    })

    // Get valid factions
    const validFactions = getValidFactions()

    // If there is no validFaction, warn user
    if (validFactions.length == 0) {
        alert("You need to select at least some factions to randomly choose from.")

        // And stop function
        return false
    }

    // is doubles forbidden
    const isForbidden = document.getElementById("factionForbidCheckbox").checked

    // If the number of currentFactions is larger than the number of validFactions to select from...
    // ...it might mean it cannot select a new faction from the list without doing doubles
    if ((currentFactionNames.length >= validFactions.length) && isForbidden) {
        alert("You need to select more potential factions to randomly choose from than the number of factions already shown to reload this faction.")

        // And stop function
        return false
    }

    // Make the choices
    let newChoice
    // Whilst isValid is not turned to true...
    let isValid = false
    while (!isValid) {
        // ...select a faction name
        let tmpChoice = choice(validFactions)

        // If this faction name has not been choosen yet or you allow doubles
        if (!currentFactionNames.includes(tmpChoice) || !isForbidden) {
            newChoice = tmpChoice
            isValid = true
        }
    }

    // ID of the button
    let buttonID = currentButton.id
    // ID of the span is same number as the button but span_ instead of button_
    let spanID = buttonID.replace("button_", "span_")
    // The number to show is the number of the span and button without the prefix
    let newNumber = buttonID.replace("button_", "")

    // Prepare the text to show
    let newFactionHTML = `${newNumber}. ${newChoice}`

    // Set this text to the page
    document.getElementById(spanID).innerHTML = newFactionHTML
}

function getValidFactions() {
    // Prepare the valid faction names
    let validFactions = []
    factionNames.forEach((factionName, i) => {
        let checkbox = document.getElementById(factionName)
        // If that checkbox is checked, add the name
        if (checkbox.checked) {
            validFactions.push(factionName)
        }
    })

    // Return the valid factions
    return validFactions
}

// Function to select the major factions
function selectMajorFactions() {
    checkAll(false)

    majorFactions.forEach(majorFaction => {
        let checkbox = document.getElementById(majorFaction)
        // Check or uncheck this checkbox
        checkbox.checked = true
    })

}

// Function to generate the maps
function generateMap() {

    // Get all the maps
    const allMaps = getMaps()

    // If there is no map, warn user
    if (allMaps.length == 0) {
        alert("You need to select at least map types to randomly choose from.")

        // And stop function
        return false
    }

    // Randomly select a map
    const map = choice(allMaps)

    // Write it to the page
    $("#showMapResult").html(map)
}

// Function to get all the maps
function getMaps() {

    // Prepare the maps:
    const maps = []

    // get all the checkboxes for the maps
    const mapCheckboxes = document.getElementsByName("mapTypesCheckboxes")

    mapCheckboxes.forEach(mapCheckbox => {
        // get the status of this checkbox
        const status = mapCheckbox.checked
        // If this checkbox is checked, add its maps to the maps
        if (status) {
            // Get the map type header according to checkbox id
            const mapHeader = mapCheckbox.id

            // Get the maps under that type of header
            mapNames[mapHeader].forEach(mapName => {
                maps.push(`${mapHeader}: ${mapName}`)
            })
        }
    })

    // Return the maps
    return maps
}

/*------------------------------------------------------------------------------
-                               Start-up Set-up                                -
------------------------------------------------------------------------------*/

// Select all factions:
checkAll(true)

// Deselect the mod factions:
// Get the cataph checkbox and uncheck interval
let cataphCheckbox = document.getElementById("cataph")
cataphCheckbox.checked = false
// uncheck it's faction checkboxes
checkChildren(cataphCheckbox)

// Check forbid doubles:
document.getElementById("factionForbidCheckbox").checked = true

// Uncheck all maps BUT check land:
// Get the map checkboxes
let mapCheckboxes = document.getElementsByName("mapTypesCheckboxes")

// Go through each checkbox
mapCheckboxes.forEach(mapCheckbox => {
    if (mapCheckbox.id == "Land") {
        mapCheckbox.checked = true
    } else {
        mapCheckbox.checked = false
    }
})
