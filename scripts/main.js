import { saveSubmission } from "./SaveSubmission.js"
import { OwnJeansChoices } from "./ownsjeans.js"
import { locationTypeChoices } from "./urbandweller.js"
import { SubmissionList } from "./Submissions.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = OwnJeansChoices()
    const locationsHTML = await locationTypeChoices()
    const buttonHTML = await saveSubmission()
    const submissionListHTML = await SubmissionList()
    
    container.innerHTML = 
    `${jeanOwnershipHTML}
    ${locationsHTML}
    ${buttonHTML}
    ${submissionListHTML}
    `


}

render()