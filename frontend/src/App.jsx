import { useState } from 'react'
import './index.css'

function App() {
  const [mood, setMood] = useState('')
  const [reply, setReply] = useState('')

  async function sendMood() {
    const res = await fetch('/api/mood', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mood })
    })
    const data = await res.json()
    setReply(data.message)
  }

  return (
    <main>
      <h1>Welcome to MeMojo</h1>
      <p>How are you feeling today?</p>
      <input type="text" value={mood} onChange={e => setMood(e.target.value)} placeholder="enter your mood" />
      <button onClick={sendMood}>Share Mood</button>
      {reply && <p style={{marginTop: '1rem'}}>{reply}</p>}
    </main>
  )
}

export default App
