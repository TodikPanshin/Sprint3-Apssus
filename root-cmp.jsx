const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"

import { MailIndex } from "./apps/mail/views/mail-index.jsx"
import { NoteIndex } from "./apps/note/views/note-index.jsx"
import { MailDetails } from "./apps/mail/views/mail-details.jsx";
import { MailEdit } from "./apps/mail/views/mail-edit.jsx";

=======
import { NoteModal } from "./apps/note/cmps/note-modal.jsx"
>>>>>>> 93cd8d1fa6d7f2de560e25d3a87c2c14ef83aabb



export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mail" element={<MailIndex />} />
                <Route path="/mail/:mailId" element={<MailDetails />} />
                <Route path="/book/edit" element={<MailEdit />} />
                <Route path="/note" element={<NoteIndex />} />
                <Route path="/note/note-modal:noteId" element={<NoteModal />} />
            </Routes>
        </section>
    </Router>
}
