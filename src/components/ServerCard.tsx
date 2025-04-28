
import { Badge } from "@/components/ui/badge";
import { Users, Map, Award } from "lucide-react";

export type ServerInfo = {
  id: string;
  name: string;
  map: string;
  players: number;
  maxPlayers: number;
  rating: number;
  ping: number;
  tags: string[];
  isVip?: boolean;
};

interface ServerCardProps {
  server: ServerInfo;
}

const ServerCard = ({ server }: ServerCardProps) => {
  const playersPercentage = (server.players / server.maxPlayers) * 100;
  
  return (
    <div className={`cyber-card group transition-all duration-300 ${server.isVip ? 'border-cyber-pink animate-glow' : ''}`}>
      {server.isVip && (
        <div className="absolute top-0 right-0 bg-cyber-pink text-xs py-1 px-3 text-white font-bold">
          VIP
        </div>
      )}
      
      <h3 className="text-lg font-bold truncate group-hover:text-cyber-neon transition-colors">{server.name}</h3>
      
      <div className="flex justify-between items-center mt-2 text-sm">
        <div className="flex items-center gap-1 text-muted-foreground">
          <Map className="w-3.5 h-3.5" />
          <span>{server.map}</span>
        </div>
        
        <div className="flex items-center gap-1">
          <Badge variant="outline" className="bg-cyber-darker text-xs px-1.5">
            {server.ping}ms
          </Badge>
        </div>
      </div>
      
      <div className="mt-3 mb-1">
        <div className="flex justify-between text-sm mb-1">
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            <span>
              {server.players}/{server.maxPlayers}
            </span>
          </div>
          
          <div className="flex items-center gap-1">
            <Award className="w-3.5 h-3.5" />
            <span>{server.rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="w-full h-1.5 bg-cyber-darker rounded-sm overflow-hidden">
          <div 
            className={`h-full ${
              playersPercentage > 80 ? 'bg-cyber-pink' : 
              playersPercentage > 50 ? 'bg-cyber-neon' : 
              'bg-cyber-blue'
            }`}
            style={{ width: `${playersPercentage}%` }}
          />
        </div>
      </div>
      
      <div className="flex flex-wrap gap-1 mt-3">
        {server.tags.slice(0, 3).map((tag, index) => (
          <Badge key={index} variant="secondary" className="text-[0.65rem]">
            {tag}
          </Badge>
        ))}
      </div>
      
      <button className="w-full mt-3 cyber-button text-xs text-center">
        Подключиться
      </button>
    </div>
  );
};

export default ServerCard;
