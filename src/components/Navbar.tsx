import { useState } from "react"
import { Menu, X, Utensils, Bed } from "lucide-react"
import { Button } from "@/components/ui/custom-button"
import { Link, useLocation } from "react-router-dom"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-warm rounded-lg p-2">
              <Utensils className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">Fundo de Quintal</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-foreground hover:text-primary transition-colors font-medium ${
                location.pathname === '/' ? 'text-primary' : ''
              }`}
            >
              Restaurante
            </Link>
            <Link 
              to="/pousada" 
              className={`text-foreground hover:text-primary transition-colors font-medium ${
                location.pathname === '/pousada' ? 'text-primary' : ''
              }`}
            >
              Pousada
            </Link>
            <Button variant="restaurant" asChild>
              <a href="https://wa.me/5541999933288" target="_blank" rel="noopener noreferrer">
                Entre em Contato
              </a>
            </Button>
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
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="flex items-center px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Utensils className="mr-2 h-4 w-4" />
                Restaurante
              </Link>
              <Link
                to="/pousada"
                className="flex items-center px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <Bed className="mr-2 h-4 w-4" />
                Pousada
              </Link>
              <div className="px-3 pt-2">
                <Button variant="restaurant" className="w-full" asChild>
                  <a href="https://wa.me/5541999933288" target="_blank" rel="noopener noreferrer">
                    Entre em Contato
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}