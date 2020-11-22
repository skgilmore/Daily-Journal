/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
let entryLog = document.getElementById("journalEntries")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entriesSortedByDate = useJournalEntries()


    for (const journal of entriesSortedByDate) {
       let entryHtml = JournalEntryComponent(journal)
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        entryLog.innerHTML += entryHtml
    }
}