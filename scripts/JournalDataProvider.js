/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "11/20/2020",
        concept: "HTML & CSS & JS",
        entry: " We worked on combinging JS,HTML & CSS docs",
        mood: "challenged"
    },
    {
        id: 3,
        date: "11/20/2020",
        concept: "HTML & CSS & JS",
        entry: " Working thru daily journal and gaining comfort in what I am doing.",
        mood: "challenged"

    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}