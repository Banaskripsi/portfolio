import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Themebutton } from "./ThemeButton";

const listNavigasi = [
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Project", href: "#project"},
    {name: "Contact", href: "#contact"},
]

export const Navigasi = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 left-0 w-full z-50 transition-all duration-300",
            isScrolled 
                ? "py-3 bg-background/80 backdrop-blur-md shadow-sm border-b border-border/20" 
                : "py-5 bg-transparent"
        )}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <a
                    href="#home"
                    className="text-xl font-bold text-primary flex items-center hover:scale-105 transition-transform duration-200"
                >
                    <span className="relative z-10">
                        <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent text-2xl font-black tracking-tight">
                            Banannda
                        </span>
                        <span className="ml-2 text-foreground/80 text-lg font-medium">
                            Portfolio
                        </span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {listNavigasi.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="relative text-foreground/80 hover:text-primary text-base font-medium transition-all duration-300 group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>
                <div className="flex items-center space-x-4">
                    <Themebutton />
                    
                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-200 z-50 relative"
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        <div className="relative w-6 h-6">
                            <Menu 
                                size={24} 
                                className={cn(
                                    "absolute inset-0 transition-all duration-300",
                                    isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                                )} 
                            />
                            <X 
                                size={24} 
                                className={cn(
                                    "absolute inset-0 transition-all duration-300",
                                    isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                                )} 
                            />
                        </div>
                    </button>
                </div>
                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-center">
                        {listNavigasi.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-2xl font-medium text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-110 transform"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}