// Set up the transient state data structure and provide initial valuess
const transientState = {
        "ownsBlueJeans": false,
        "socioLocationId": 0
    }



export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.ownsBlueJeans = chosenOwnership
    console.log(transientState)

}
// Functions to modify each property of transient state
export const getSocioLocationId = (chosenLocation) => {
    transientState.socioLocationId = chosenLocation
    console.log(transientState)
}


// Function to convert transient state to permanent state
export const saveSurveySubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }


    const response = await fetch("http://localhost:8088/submissions", postOptions)
}