import React from 'react'

function AddTask() {

    const [form, setForm] = React.useState({name: "", date: "", start: "", last_date: "", details: "", status: ""})
    const handleFormChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const submitForm = () => {
      fetch("url", {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        }
      })
      .then(res => res.json())
      .then(data => console.log(data))
    }

  return (
    <div>
        <input name="name" value={form.name} onChange={handleFormChange} />
        <input name="detail" value={form.details} onChange={handleFormChange} />
        <input name="status" value={form.status} onChange={handleFormChange} />

        { /* Two Calendars for getting time*/ }
        <button onClick={submitForm}>Submit</button>
    </div>
  )
}

export default AddTask