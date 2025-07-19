import { MapPin, Clock, Star, Utensils, Phone, Instagram } from "lucide-react"
import { Button } from "@/components/ui/custom-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/Navbar"
import { ParallaxHero } from "@/components/ParallaxHero"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection"
import { motion } from "framer-motion"
import restauranteHero from "@/assets/restaurante-hero.jpg"
import { Link } from "react-router-dom"

const Index = () => {
  const especialidades = [
    { nome: "Buffet Livre", descricao: "Variedade completa de pratos quentes e frios, à vontade" },
    { nome: "Buffet por Kg", descricao: "Monte seu prato do jeito que preferir, pagando apenas pelo peso" },
    { nome: "Marmitas", descricao: "Refeições completas para levar, perfeitas para o dia a dia" },
    { nome: "Porções", descricao: "Deliciosas porções para compartilhar com amigos e família" }
  ]

  const horarios = [
    { dia: "Segunda a Quinta", horario: "11:00 - 15:00" },
    { dia: "Sexta a Domingo", horario: "11:00 - 16:00" },
    { dia: "Feriados", horario: "11:00 - 16:00" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Parallax */}
      <ParallaxHero backgroundImage={restauranteHero}>
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-reveal"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Fundo de Quintal
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Sabores autênticos em Pontal do Paraná
        </motion.p>
        <motion.p 
          className="text-lg md:text-xl mb-12 opacity-80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Experimente nossa culinária caseira em um ambiente acolhedor, 
          onde cada prato é preparado com ingredientes frescos e muito carinho.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="sunset" size="lg" className="text-lg px-8 py-6 hover-glow animate-float" asChild>
              <a href="#cardapio">Ver Nossos Serviços</a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/pousada">Conheça Nossa Pousada</Link>
            </Button>
          </motion.div>
        </motion.div>
      </ParallaxHero>

      {/* Sobre o Restaurante */}
      <AnimatedSection animation="fadeInUp" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-primary mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Nosso Restaurante
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Localizado no coração de Pontal do Paraná, oferecemos uma experiência gastronômica 
              única com pratos tradicionais e um ambiente familiar acolhedor.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft" delay={0.3}>
              <h3 className="text-2xl font-bold text-primary mb-6">Uma Tradição de Sabor</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Há anos servindo os melhores pratos da culinária regional, nosso restaurante 
                é conhecido pela qualidade dos ingredientes frescos e pelo preparo artesanal 
                de cada refeição.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nosso ambiente rústico e aconchegante proporciona momentos únicos para 
                almoçar em família ou com amigos, sempre acompanhado do melhor da gastronomia local.
              </p>
              
              <StaggerContainer className="flex flex-wrap gap-2 mb-8">
                <StaggerItem>
                  <Badge variant="secondary" className="bg-restaurant-cream text-restaurant-burgundy">
                    Buffet Livre
                  </Badge>
                </StaggerItem>
                <StaggerItem>
                  <Badge variant="secondary" className="bg-restaurant-cream text-restaurant-burgundy">
                    Buffet por Kg
                  </Badge>
                </StaggerItem>
                <StaggerItem>
                  <Badge variant="secondary" className="bg-restaurant-cream text-restaurant-burgundy">
                    Marmitas
                  </Badge>
                </StaggerItem>
                <StaggerItem>
                  <Badge variant="secondary" className="bg-restaurant-cream text-restaurant-burgundy">
                    Porções
                  </Badge>
                </StaggerItem>
              </StaggerContainer>
            </AnimatedSection>

            <StaggerContainer className="space-y-6">
              <StaggerItem>
                <motion.div whileHover={{ scale: 1.02, y: -5 }}>
                  <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-warm hover-lift">
                    <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                      <MapPin className="h-6 w-6 text-restaurant-orange mr-3" />
                      <div>
                        <CardTitle className="text-lg text-primary">Localização</CardTitle>
                        <CardDescription>PR-412, 2705 - Santa Terezinha, Pontal do Paraná - PR</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div whileHover={{ scale: 1.02, y: -5 }}>
                  <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-warm hover-lift">
                    <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                      <Star className="h-6 w-6 text-restaurant-orange mr-3" />
                      <div>
                        <CardTitle className="text-lg text-primary">Localização</CardTitle>
                        <CardDescription>Próximo ao centro de Santa Terezinha</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div whileHover={{ scale: 1.02, y: -5 }}>
                  <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-warm hover-lift">
                    <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                      <Utensils className="h-6 w-6 text-restaurant-orange mr-3" />
                      <div>
                        <CardTitle className="text-lg text-primary">Serviços</CardTitle>
                        <CardDescription>Buffet Livre • Buffet Kg • Marmitas • Porções</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </AnimatedSection>

      {/* Especialidades */}
      <AnimatedSection animation="fadeInUp" className="py-20 px-4 bg-secondary/30" >
        <div className="container mx-auto max-w-6xl" id="cardapio">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-primary mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Nossos Serviços
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Oferecemos diferentes opções para atender todos os gostos e necessidades
            </motion.p>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {especialidades.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateY: 5,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  <Card className="bg-card/90 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover-lift h-full">
                    <CardHeader>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                        viewport={{ once: true }}
                      >
                        <CardTitle className="text-xl text-primary">{item.nome}</CardTitle>
                      </motion.div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {item.descricao}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Horários */}
      <AnimatedSection animation="fadeInUp" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-primary mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Horários de Funcionamento
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Venha nos visitar e saboreie o melhor da culinária regional
            </motion.p>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {horarios.map((item, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    rotateY: 3
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                >
                  <Card className="bg-card/90 backdrop-blur-sm border-2 border-border hover:border-primary transition-all duration-300 hover-lift">
                    <CardHeader className="text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Clock className="h-8 w-8 text-restaurant-orange mx-auto mb-4" />
                      </motion.div>
                      <CardTitle className="text-lg text-primary">{item.dia}</CardTitle>
                      <CardDescription className="text-xl font-semibold text-foreground">
                        {item.horario}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animation="fadeInUp" className="py-20 px-4 bg-gradient-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Faça sua Reserva
          </motion.h2>
          <motion.p 
            className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Entre em contato conosco para garantir sua mesa e desfrutar de uma experiência gastronômica inesquecível.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white text-primary border-white hover:bg-white/90 hover-glow" asChild>
                <Link to="https://wa.me/5541999933288" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  (41) 99993-3288
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white text-primary border-white hover:bg-white/90" asChild>
                <Link to="/pousada">
                  Conheça Nossa Pousada
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Index;
