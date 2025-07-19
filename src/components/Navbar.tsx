import { useState } from "react"
import { Menu, X, Utensils, Bed } from "lucide-react"
import { Button } from "@/components/ui/custom-button"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useNavbarScroll } from "@/hooks/use-scroll-animation"
import logoImage from "@/assets/logo-fundo-quintal.png"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const scrolled = useNavbarScroll()

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled 
          ? 'bg-background/98 backdrop-blur-md border-border shadow-elegant' 
          : 'bg-background/80 backdrop-blur-sm border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <motion.img 
                src={logoImage} 
                alt="Fundo de Quintal" 
                className="h-12 w-12 rounded-full"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="text-xl font-bold text-primary">Fundo de Quintal</span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link 
                to="/" 
                className={`text-foreground hover:text-primary transition-colors font-medium ${
                  location.pathname === '/' ? 'text-primary' : ''
                }`}
              >
                Restaurante
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Link 
                to="/pousada" 
                className={`text-foreground hover:text-primary transition-colors font-medium ${
                  location.pathname === '/pousada' ? 'text-primary' : ''
                }`}
              >
                Pousada
              </Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="burgundy" asChild>
                <Link to="https://wa.me/5541999933288" target="_blank" rel="noopener noreferrer">
                  Entre em Contato
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden border-t border-border bg-background"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.div 
                className="px-2 pt-2 pb-3 space-y-1"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.1
                    }
                  }
                }}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <Link
                    to="/"
                    className="flex items-center px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Utensils className="mr-2 h-4 w-4" />
                    Restaurante
                  </Link>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <Link
                    to="/pousada"
                    className="flex items-center px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Bed className="mr-2 h-4 w-4" />
                    Pousada
                  </Link>
                </motion.div>
                <motion.div 
                  className="px-3 pt-2"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <Button variant="burgundy" className="w-full" asChild>
                    <Link to="https://wa.me/5541999933288" target="_blank" rel="noopener noreferrer">
                      Entre em Contato
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}