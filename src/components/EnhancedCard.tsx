import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface EnhancedCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: 'lift' | 'glow' | 'scale' | 'rotate'
  delay?: number
}

const hoverEffects = {
  lift: {
    y: -8,
    scale: 1.02,
    boxShadow: '0 20px 40px -10px hsl(var(--restaurant-burgundy) / 0.25)'
  },
  glow: {
    boxShadow: '0 0 30px hsl(var(--restaurant-orange) / 0.4)'
  },
  scale: {
    scale: 1.05
  },
  rotate: {
    rotateY: 5,
    scale: 1.02
  }
}

export const EnhancedCard: React.FC<EnhancedCardProps> = ({
  children,
  className = '',
  hoverEffect = 'lift',
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={hoverEffects[hoverEffect]}
      transition={{
        initial: { duration: 0.6, delay },
        hover: { duration: 0.3, type: "spring", stiffness: 300 }
      }}
      viewport={{ once: true }}
      className={className}
    >
      <Card className="bg-card/90 backdrop-blur-sm border-border/50 shadow-warm h-full">
        {children}
      </Card>
    </motion.div>
  )
}

export const FloatingIcon: React.FC<{ 
  children: React.ReactNode, 
  className?: string,
  floatIntensity?: number 
}> = ({ 
  children, 
  className = '',
  floatIntensity = 10 
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -floatIntensity, 0],
        rotate: [0, 2, 0, -2, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}