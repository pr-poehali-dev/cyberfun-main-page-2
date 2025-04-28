
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ServerCard, { ServerInfo } from "@/components/ServerCard";
import StatisticsSection from "@/components/StatisticsSection";
import BannerSection from "@/components/BannerSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Star, TrendingUp } from "lucide-react";

// Демо-данные для серверов
const serversMock: ServerInfo[] = [
  {
    id: "1",
    name: "CyberFun Classic Competitive",
    map: "de_dust2",
    players: 18,
    maxPlayers: 20,
    rating: 4.7,
    ping: 15,
    tags: ["Классический", "Соревновательный", "128tick"],
    isVip: true,
  },
  {
    id: "2",
    name: "Раша B плз - только миражи",
    map: "de_mirage",
    players: 12,
    maxPlayers: 20,
    rating: 4.2,
    ping: 23,
    tags: ["Только миражи", "Быстрая игра", "FFA"],
  },
  {
    id: "3",
    name: "Хедшот Арена",
    map: "aim_map",
    players: 15,
    maxPlayers: 16,
    rating: 4.5,
    ping: 18,
    tags: ["Арена", "Тренировка аима", "1v1"],
  },
  {
    id: "4",
    name: "Zombie Escape v3.5",
    map: "ze_mountain_escape",
    players: 32,
    maxPlayers: 64,
    rating: 4.8,
    ping: 27,
    tags: ["Зомби", "Escape", "Модифицированный"],
    isVip: true,
  },
  {
    id: "5",
    name: "Нож и AWP",
    map: "aim_awp",
    players: 10,
    maxPlayers: 16,
    rating: 3.9,
    ping: 21,
    tags: ["AWP", "Ножи", "Скины"],
  },
  {
    id: "6",
    name: "Retake Servers Pro",
    map: "de_inferno",
    players: 9,
    maxPlayers: 10,
    rating: 4.6,
    ping: 16,
    tags: ["Retake", "Ranked", "Без читеров"],
  },
];

const Index = () => {
  return (
    <div className="cyber-bg min-h-screen pb-10">
      <NavBar />
      
      <div className="pt-16"> {/* Offset for navbar */}
        <HeroSection />
      </div>
      
      <main className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  <span className="border-l-4 border-cyber-neon pl-3">
                    Мониторинг серверов
                  </span>
                </h2>
                <button className="cyber-button text-xs">
                  Все серверы
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Поиск серверов..." 
                    className="pl-9 bg-cyber-darker border-cyber-neon/20 focus:border-cyber-neon"
                  />
                </div>
                
                <Tabs defaultValue="all" className="flex-shrink-0">
                  <TabsList className="bg-cyber-darker border border-cyber-neon/20 h-9">
                    <TabsTrigger value="all" className="data-[state=active]:bg-cyber-neon/20">
                      Все
                    </TabsTrigger>
                    <TabsTrigger value="popular" className="data-[state=active]:bg-cyber-neon/20">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      Популярные
                    </TabsTrigger>
                    <TabsTrigger value="favorite" className="data-[state=active]:bg-cyber-neon/20">
                      <Star className="h-4 w-4 mr-1" />
                      Избранные
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {serversMock.slice(0, 6).map((server) => (
                  <ServerCard key={server.id} server={server} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:col-span-4 space-y-8">
            <div className="cyber-card h-min">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-cyber-neon"></span>
                Статистика
              </h2>
              <StatisticsSection />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-cyber-neon"></span>
                События и акции
              </h2>
              <BannerSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
