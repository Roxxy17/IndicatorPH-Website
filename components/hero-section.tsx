"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"
export function HeroSection() {
  return (
    <motion.div
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Chemistry Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-20 w-6 h-6 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-secondary/25 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="text-foreground">Indikator</span> <span className="text-primary">Alami</span>{" "}
              <span className="text-secondary">Asam-Basa</span>
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground text-pretty mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Pelajari konsep asam-basa dengan cara yang menyenangkan dan interaktif. Temukan bagaimana indikator alami dapat membantu mengidentifikasi sifat asam atau basa suatu larutan.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group">
                Mulai Belajar
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group bg-transparent">
                <Play className="mr-2 h-4 w-4" />
                Tonton Video
              </Button>
            </div>

            <div className="mt-12 flex flex-col items-center lg:items-start gap-8">
              <div className="flex items-center justify-center lg:justify-start space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Materi</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-muted-foreground">Quiz</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Interaktif</div>
                </div>
              </div>
              <div className="w-full max-w-md bg-muted/30 rounded-lg p-4 mt-4">
                <h3 className="text-lg font-bold mb-2 text-center">Anggota Kelompok 5:</h3>
                <ul className="list-disc pl-6 text-sm text-muted-foreground">
                  <li>Dynda Rayssa Jasyfa</li>
                  <li>Izela Kristry Anggun</li>
                  <li>Nadhirah Huwaida Hadi</li>
                  <li>Khairinnisa Farras Andini</li>
                  <li>Mitra Kasih</li>
                  <li>Lionel Al Faruq</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <Card className="p-8 bg-card/50 backdrop-blur border-2 border-primary/10">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Ready to Study?</h3>
                <p className="text-muted-foreground">Mari mulai perjalanan belajar kimia yang menyenangkan!</p>
              </div>

              {/* Chemistry Lab Illustration */}
              <div className="relative h-64 bg-gradient-to-b from-primary/10 to-secondary/10 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-end justify-center pb-8">
                  {/* Test Tubes */}
                  <div className="flex space-x-4">
                    <div className="w-8 h-24 bg-gradient-to-t from-red-400 to-red-200 rounded-b-full border-2 border-gray-300 animate-float" style={{ animationDelay: "0s" }} />
                    <div className="w-8 h-28 bg-gradient-to-t from-blue-400 to-blue-200 rounded-b-full border-2 border-gray-300 animate-float" style={{ animationDelay: "0.5s" }} />
                    <div className="w-8 h-20 bg-gradient-to-t from-green-400 to-green-200 rounded-b-full border-2 border-gray-300 animate-float" style={{ animationDelay: "1s" }} />
                    <div className="w-8 h-26 bg-gradient-to-t from-yellow-400 to-yellow-200 rounded-b-full border-2 border-gray-300 animate-float" style={{ animationDelay: "1.5s" }} />
                  </div>
                </div>

                {/* Floating Bubbles */}
                <div className="absolute top-4 left-8 w-2 h-2 bg-primary/40 rounded-full animate-bubble" style={{ animationDelay: "0s" }} />
                <div className="absolute top-8 right-12 w-1.5 h-1.5 bg-secondary/40 rounded-full animate-bubble" style={{ animationDelay: "1s" }} />
                <div className="absolute top-12 left-16 w-1 h-1 bg-primary/30 rounded-full animate-bubble" style={{ animationDelay: "2s" }} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
