"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, RotateCcw } from "lucide-react"

const quizQuestions = [
  {
    question: "Apa yang terjadi ketika kertas lakmus merah dicelupkan ke dalam larutan basa?",
    options: ["Tetap merah", "Berubah menjadi biru", "Berubah menjadi hijau", "Tidak berubah warna"],
    correct: 1,
    explanation: "Kertas lakmus merah akan berubah menjadi biru ketika dicelupkan ke dalam larutan basa.",
  },
  {
    question: "Indikator alami yang dapat dibuat dari kubis ungu menunjukkan warna apa pada larutan asam?",
    options: ["Biru", "Hijau", "Merah/Pink", "Kuning"],
    correct: 2,
    explanation: "Ekstrak kubis ungu akan menunjukkan warna merah atau pink pada larutan asam.",
  },
]

export function InteractiveSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(quizQuestions.length).fill(false))

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    setShowResult(true)
    const newAnsweredQuestions = [...answeredQuestions]
    newAnsweredQuestions[currentQuestion] = true
    setAnsweredQuestions(newAnsweredQuestions)

    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnsweredQuestions(new Array(quizQuestions.length).fill(false))
  }

  const progress = ((currentQuestion + (showResult ? 1 : 0)) / quizQuestions.length) * 100

  return (
    <motion.section
      id="uji-indikator"
      className="py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Quiz Interaktif
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">Uji Pemahaman Anda</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Jawab pertanyaan-pertanyaan berikut untuk menguji pemahaman Anda tentang indikator asam-basa.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline">
                  Pertanyaan {currentQuestion + 1} dari {quizQuestions.length}
                </Badge>
                <div className="text-sm text-muted-foreground">
                  Skor: {score}/{quizQuestions.length}
                </div>
              </div>
              <Progress value={progress} className="mb-4" />
              <CardTitle className="text-xl text-pretty">{quizQuestions[currentQuestion].question}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                      selectedAnswer === index
                        ? showResult
                          ? index === quizQuestions[currentQuestion].correct
                            ? "border-green-500 bg-green-50 text-green-700"
                            : "border-red-500 bg-red-50 text-red-700"
                          : "border-primary bg-primary/5 text-primary"
                        : showResult && index === quizQuestions[currentQuestion].correct
                          ? "border-green-500 bg-green-50 text-green-700"
                          : "border-border hover:border-primary/50 hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedAnswer === index
                            ? showResult
                              ? index === quizQuestions[currentQuestion].correct
                                ? "border-green-500 bg-green-500"
                                : "border-red-500 bg-red-500"
                              : "border-primary bg-primary"
                            : showResult && index === quizQuestions[currentQuestion].correct
                              ? "border-green-500 bg-green-500"
                              : "border-muted-foreground"
                        }`}
                      >
                        {((selectedAnswer === index && showResult) ||
                          (showResult && index === quizQuestions[currentQuestion].correct)) && (
                          <CheckCircle className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span className="text-pretty">{option}</span>
                    </div>
                  </button>
                ))}
              </div>

              {showResult && (
                <div className="p-4 bg-muted rounded-lg mb-6">
                  <h4 className="font-semibold mb-2">Penjelasan:</h4>
                  <p className="text-sm text-muted-foreground text-pretty">
                    {quizQuestions[currentQuestion].explanation}
                  </p>
                </div>
              )}

              <div className="flex gap-3">
                {!showResult ? (
                  <Button onClick={handleSubmitAnswer} disabled={selectedAnswer === null} className="flex-1">
                    Submit Jawaban
                  </Button>
                ) : currentQuestion < quizQuestions.length - 1 ? (
                  <Button onClick={handleNextQuestion} className="flex-1">
                    Pertanyaan Selanjutnya
                  </Button>
                ) : (
                  <div className="flex gap-3 w-full">
                    <Button onClick={handleRestart} variant="outline" className="flex-1 bg-transparent">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Mulai Ulang
                    </Button>
                    <Button className="flex-1">Lihat Hasil Lengkap</Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2">
            {quizQuestions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index < currentQuestion || (index === currentQuestion && showResult)
                    ? "bg-primary"
                    : index === currentQuestion
                      ? "bg-primary/50"
                      : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
  </motion.section>
  )
}
