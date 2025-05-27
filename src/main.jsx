import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TravelJournalApp from './travel_journal_app';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TravelJournalApp />
  </StrictMode>,
)
