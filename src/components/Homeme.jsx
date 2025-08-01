import { ArrowDown } from "lucide-react"

export const Homeme = () => {
    return (
        <section 
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >   
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight opacity-0 animate-fade-in-delay-1">
                        <span className="mx-2">Portfolio</span>
                        <span className="text-primary mx-2">Ibrahim</span>
                        <span className="mx-2">Risyadbana</span>
                    </h1>
                    <p style={{fontSize:"150%"}}>
                       Menawarkan layanan pengembangan aplikasi secara menyeluruh, mencakup platform website, desktop, dan terutama mobile, sesuai dengan kebutuhan bisnis maupun individu. Dengan pengalaman dalam membangun solusi digital yang efisien dan ramah pengguna, saya berkomitmen untuk menghadirkan aplikasi yang tidak hanya berfungsi dengan baik, tetapi juga memiliki tampilan yang menarik dan mudah digunakan.
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button block">
                            Lihat Karya Saya
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    )
}