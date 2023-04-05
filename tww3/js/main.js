/*------------------------------------------------------------------------------
-                           Factions and Maps Data                             -
------------------------------------------------------------------------------*/

// All the faction data:
const factionsData = {}
factionsData.TWW1 = {
    description: "Total War Warhammer I",
    factions: ["Dwarfs", "The Empire", "Greenskins", "Vampire Counts", "Bretonnia", "Warriors of Chaos", "Beastmen", "Wood Elves", "Norsca"]
}
factionsData.TWW2 = {
    description: "Total War Warhammer II",
    factions: ["Dark Elves", "High Elves", "Lizardmen", "Skaven", "Tomb Kings", "Vampire Coast"]
}
factionsData.TWW3 = {
    description: "Total War Warhammer III",
    factions: ["Kislev", "Cathay", "Ogres", "Daemons of Chaos", "Nurgle", "Khorne", "Slaneesh", "Tzeentch", "Chaos Dwarfs"]
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
    allFactionNameSpans = Object.keys(allFactionNameSpans).map(key => allFactionNameSpans[key]).filter(span => span.textContent)

    let currentFactionNames = []

    allFactionNameSpans.forEach((span, i) => {
        let text = span.textContent
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