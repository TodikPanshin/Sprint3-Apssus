const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"

import { MailIndex } from "./apps/mail/views/mail-index.jsx"
import { NoteIndex } from "./apps/note/views/note-index.jsx"
import { MailDetails } from "./apps/mail/views/mail-details.jsx";
import { MailEdit } from "./apps/mail/views/mail-edit.jsx";


import { NoteModal } from "./apps/note/cmps/note-modal.jsx"




export function App() {
    return <Router>
        <section className="app main-layout">
            <AppHeader />
            <main className="main-layout full">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mail" element={<MailIndex />} />
                <Route path="/mail/:mailId" element={<MailDetails />} />
                <Route path="/book/edit" element={<MailEdit />} />
                <Route path="/note" element={<NoteIndex />} />
                <Route path="/note/note-modal:noteId" element={<NoteModal />} />
            </Routes>
            </main>

        </section>
    </Router>
}
