import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function Home({task, value}) {

    let filteredTask = []

    let filterTasks = () => {
        let isoValue = value.toISOString()

        // YYYY-MM-DD
        let year = isoValue[0] + isoValue[1] + isoValue[2] + isoValue[3]
        let month = isoValue[5] + isoValue[6]
        let date = isoValue[8] + isoValue[9]

        filteredTask = task.filter((t) => {
            let tYear = t.date[0] + t.date[1] + t.date[2] + t.date[3]
            let tMonth = t.date[5] + t.date[6]
            let tDate = t.date[8] + t.date[9]

            console.log("From Task",tYear, tMonth, tDate)
            console.log("From Calendar",year, month, date)

            if(tYear === year && tMonth === month && tDate === date) {
                return true
            } 
            return false
        })

    }
    filterTasks()

  return (
    <div>
        {filteredTask.map((task) => <li key={uuidv4()}>{task.name}</li>)}
    </div>
  )
}

export default Home