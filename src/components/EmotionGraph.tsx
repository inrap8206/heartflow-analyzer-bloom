
import React from 'react';
import { 
  ResponsiveContainer,
  LineChart, 
  Line, 
  AreaChart,
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  Legend,
  BarChart,
  Bar
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample data - in a real app, this would come from your analysis
const sampleEmotionData = [
  { date: '3월 1일', emotion: 50, person1: 2, person2: 1, attraction: 40 },
  { date: '3월 3일', emotion: 65, person1: 3, person2: 4, attraction: 55 },
  { date: '3월 5일', emotion: 60, person1: 2, person2: 5, attraction: 60 },
  { date: '3월 7일', emotion: 70, person1: 6, person2: 2, attraction: 65 },
  { date: '3월 9일', emotion: 80, person1: 4, person2: 3, attraction: 75 },
  { date: '3월 11일', emotion: 75, person1: 3, person2: 7, attraction: 80 },
  { date: '3월 13일', emotion: 90, person1: 8, person2: 4, attraction: 85 }
];

interface EmotionGraphProps {
  data?: typeof sampleEmotionData;
}

const EmotionGraph: React.FC<EmotionGraphProps> = ({ data = sampleEmotionData }) => {
  return (
    <Card className="border-purple-light/50 shadow-lg animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold text-gray-800">데이터 시각화</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="emotion">
          <TabsList className="mb-4 bg-purple-light/30">
            <TabsTrigger value="emotion">감정 곡선</TabsTrigger>
            <TabsTrigger value="contact">기울기 분석</TabsTrigger>
            <TabsTrigger value="attraction">호감도 타임라인</TabsTrigger>
          </TabsList>
          
          <TabsContent value="emotion" className="mt-0">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                >
                  <defs>
                    <linearGradient id="emotionGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#9b87f5" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="emotion" 
                    stroke="#9b87f5" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#emotionGradient)" 
                    name="감정 지수"
                  />
                </AreaChart>
              </ResponsiveContainer>
              <p className="text-sm text-center text-gray-500 mt-2">시간에 따른 감정 변화를 보여주는 그래프입니다.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="contact" className="mt-0">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="person1" name="나의 시작 대화" fill="#9b87f5" />
                  <Bar dataKey="person2" name="상대의 시작 대화" fill="#D6BCFA" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-center text-gray-500 mt-2">누가 대화를 더 자주 시작하는지 보여주는 그래프입니다.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="attraction" className="mt-0">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="attraction" 
                    stroke="#7E69AB" 
                    strokeWidth={2} 
                    dot={{ fill: '#7E69AB', strokeWidth: 2 }}
                    activeDot={{ r: 6 }}
                    name="호감도"
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-sm text-center text-gray-500 mt-2">시간에 따른 호감도 변화를 보여주는 그래프입니다.</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default EmotionGraph;
