"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Beaker } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Beaker className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">ChemLearn</h1>
              <p className="text-xs text-muted-foreground">Kelompok 3 XII A1 2025/2026</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#materi" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Materi
            </a>
            <a
              href="#uji-indikator"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Uji Indikator
            </a>
            <a href="#quiz" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Quiz
            </a>
            <Button variant="default" size="sm">
              Mulai Belajar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#materi" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Materi
              </a>
              <a
                href="#uji-indikator"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Uji Indikator
              </a>
              <a href="#quiz" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Quiz
              </a>
              <Button variant="default" size="sm" className="w-fit">
                Mulai Belajar
              </Button>
            </nav>
          </div>
        )}
      </div>
  </motion.header>
  )
}
