/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (journal) => {
    return `
        <section id="entry--${journal.id}" class="journalEntry">
            <h3> Journal Entry ${journal.date} </h3>
            <h4><i>${journal.concept}</i></h4>
            <p>My mood on this day was: ${journal.mood}</p>
        </section>
        `
}

// //   Display the entry's full text, and the date
// it was entered here.
// </section>
