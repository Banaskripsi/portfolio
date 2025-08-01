import { Navigasi } from "../components/Navbar"
import { Star } from "../components/Star"
import { Homeme } from "../components/Homeme"
import { About } from "../components/About"
import { SkillsSection } from "../components/Skill"
import { ProjectsSection } from "../components/Projects"
import { ContactSection } from "../components/Contact"
import { Footer } from "../components/Footer"

export const Home = () => {
    return (
        <div className="mih-h-screen bg-background text-foreground overflow-x-hidden">
           {/* Ganti Mode Gelap-Cerah */}
           {/* Background Keren */}
           <Star/>
           {/* Bar Navigasi */}
           <Navigasi/>
           {/* Konten Utama */}
           <main>
                <Homeme/>
                <About/>
                <SkillsSection/>
                <ProjectsSection/>
                <ContactSection/>
                <Footer/>
           </main>
           {/* Footer */}
        </div>
    )
}