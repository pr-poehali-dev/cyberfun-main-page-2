
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SteamIcon } from "lucide-react";

const NavBar = () => {
  return (
    <header className="fixed w-full top-0 left-0 z-10 backdrop-blur-md bg-cyber-dark/80 border-b border-cyber-neon/30">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-cyber-neon rounded-sm rotate-45 animate-pulse-neon"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-black font-bold text-lg">C</span>
              </div>
            </div>
            <span className="text-2xl font-bold tracking-wider neon-text">
              CyberFun
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/servers" className="px-3 py-2 hover:text-cyber-neon transition-colors">
              Серверы
            </Link>
            <Link to="/tournaments" className="px-3 py-2 hover:text-cyber-neon transition-colors">
              Турниры
            </Link>
            <Link to="/rating" className="px-3 py-2 hover:text-cyber-neon transition-colors">
              Рейтинг
            </Link>
            <Link to="/shop" className="px-3 py-2 hover:text-cyber-neon transition-colors">
              Магазин
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="cyber-button-accent flex items-center gap-2">
            <span className="text-xs">Пополнить</span>
            <span className="font-mono">₽</span>
          </button>
          
          <button className="cyber-button flex items-center gap-2">
            <SteamIcon className="w-4 h-4" />
            <span className="text-xs">Войти</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
