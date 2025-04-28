
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyber-neon/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-pink/5 rounded-full blur-3xl"></div>
        <div className="absolute w-full h-full bg-[url('https://images.unsplash.com/photo-1624444634650-fe2e00d269f0?ixlib=rb-4.0.3&auto=format&fit=crop&q=80')] opacity-5 bg-center bg-cover mix-blend-overlay"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0"
             style={{
               backgroundImage: `linear-gradient(90deg, rgba(155, 135, 245, 0.1) 1px, transparent 1px), 
                                linear-gradient(rgba(155, 135, 245, 0.1) 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>
      
      <div className="relative container mx-auto px-4 py-16 flex flex-col items-center text-center z-1">
        <div className="inline-block relative mb-4">
          <span className="text-sm text-cyber-neon font-mono py-1 px-3 border border-cyber-neon/50 relative z-10">
            CS2 СЕРВЕРЫ
          </span>
          <span className="absolute top-0 left-0 w-full h-full border border-cyber-neon/30 translate-x-1 translate-y-1"></span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-neon via-cyber-pink to-cyber-blue animate-pulse-neon">
            CyberFun
          </span>
          <span> - Игровые серверы CS2</span>
          <span className="absolute -right-1 -bottom-1 text-cyber-pink text-xs">beta</span>
        </h1>
        
        <p className="max-w-2xl text-lg text-muted-foreground mb-8">
          Множество серверов с уникальными режимами игры, качественной статистикой и активным комьюнити
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button className="cyber-button-accent group text-base py-6 px-8 flex items-center gap-2">
            Начать играть
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline" className="cyber-button text-base py-6 px-8">
            Все серверы
          </Button>
        </div>
        
        <div className="text-sm text-muted-foreground flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
            <span className="font-mono">10,240</span> игроков онлайн
          </span>
          <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
          <span className="font-mono">126</span> активных серверов
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
