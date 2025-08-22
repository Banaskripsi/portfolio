import { Briefcase, Code, User } from "lucide-react";
import foto from "@/assets/foto.jpg"

export const About = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About<span className="text-primary"> Me</span>
                </h2>
                <div className="items-center justify-center flex">
                        <img
                            src={foto}
                            alt="Foto saya"
                            className="w-70 h-70 object-cover rounded-full"
                        />
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start p-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                        Passionate Website and Mobile Application Developer
                        </h3>

                        <p className="text-muted-foreground text-justify">
                        Halo! Saya Ibrahim, seorang yang antusias dan pencinta kreativitas. Saya percaya bahwa setiap ide memiliki potensi untuk tumbuh menjadi sesuatu yang luar biasa, asal diberi ruang dan ketekunan. Dalam keseharian, saya senang mengeksplorasi hal-hal baru, baik di dunia teknologi, desain, maupun pengalaman hidup yang sederhana. Bagi saya, proses belajar dan berbagi adalah inti dari pertumbuhan. Saya selalu terbuka untuk kolaborasi, tantangan baru, dan percakapan yang bermakna. Terima kasih telah mampir—semoga kita bisa saling menginspirasi!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>
                        <a
                            href=""
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                            Download CV
                        </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Development</h4>
                                <p className="text-muted-foreground">
                                    Mengembangkan website yang responsif dengan framework modern.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foreground">
                                    Mendesain User Interface yang intuitif dan User Experience yang baik.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Management</h4>
                                <p>
                                    Mengembangkan dan mengelola projek pengembangan jangka panjang.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>            
            </div>
        </section>
    );
};
