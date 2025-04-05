
import React from 'react';
import { Heart, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

interface AnalysisInsightProps {
  loading?: boolean;
}

const AnalysisInsight: React.FC<AnalysisInsightProps> = ({ loading = false }) => {
  // 이 데이터는 실제로는 분석 결과에서 가져와야 합니다
  const insights = {
    relationshipStatus: '썸',
    attractionScore: 78,
    conversationTone: '친근함, 호기심',
    responseTime: {
      you: 12, // 분 단위
      them: 8, // 분 단위
    },
    confessionTiming: '긍정적',
    pushPull: {
      questions: 65, // %
      messageLength: { you: 24, them: 18 }, // 평균 글자 수
      initiationRatio: 60 // % (내가 대화를 시작하는 비율)
    }
  };

  if (loading) {
    return (
      <Card className="border-purple-light/50 shadow-lg animate-pulse-slow">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold text-gray-800">분석 중...</CardTitle>
          <CardDescription>
            대화 내용을 분석하고 있습니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="h-8 bg-purple-light/40 rounded-md animate-pulse-slow"></div>
          <div className="space-y-2">
            <div className="h-4 bg-purple-light/40 rounded-md w-3/4 animate-pulse-slow"></div>
            <div className="h-4 bg-purple-light/40 rounded-md animate-pulse-slow"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
      <Card className="border-purple-light/50 shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-purple" />
            <CardTitle className="text-lg font-semibold text-gray-800">감정 리포트 요약</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">현재 관계 상태</span>
              <Badge className="bg-purple text-white hover:bg-purple-dark">{insights.relationshipStatus}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">호감도 점수</span>
              <div className="flex items-center space-x-2">
                <Progress 
                  value={insights.attractionScore} 
                  className="h-2 w-24 bg-purple-light" 
                />
                <span className="text-sm font-medium text-purple-dark">{insights.attractionScore}%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">대화 말투 톤</span>
              <span className="text-sm">{insights.conversationTone}</span>
            </div>
          </div>
          
          <div className="pt-2 pb-1 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">고백 타이밍 추천</span>
              <Badge variant="outline" className="border-green-500 text-green-600">
                {insights.confessionTiming} 
                <ArrowUpRight className="ml-1 h-3 w-3 text-green-600" />
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-light/50 shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-5 w-5 text-purple" />
            <CardTitle className="text-lg font-semibold text-gray-800">밀당 분석</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-500">질문 비율</span>
                <span className="text-sm font-medium">{insights.pushPull.questions}%</span>
              </div>
              <Progress 
                value={insights.pushPull.questions} 
                className="h-2 bg-purple-light" 
              />
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">평균 답장 시간</span>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <Badge variant="secondary" className="mr-2 bg-purple-light/50">나</Badge>
                  <Clock className="h-3 w-3 mr-1 text-gray-400" />
                  <span className="text-sm">{insights.responseTime.you}분</span>
                </div>
                <div className="flex items-center">
                  <Badge variant="secondary" className="mr-2 bg-purple-light/50">상대</Badge>
                  <Clock className="h-3 w-3 mr-1 text-gray-400" />
                  <span className="text-sm">{insights.responseTime.them}분</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">평균 메시지 길이</span>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <Badge variant="secondary" className="mr-2 bg-purple-light/50">나</Badge>
                  <span className="text-sm">{insights.pushPull.messageLength.you}자</span>
                </div>
                <div className="flex items-center">
                  <Badge variant="secondary" className="mr-2 bg-purple-light/50">상대</Badge>
                  <span className="text-sm">{insights.pushPull.messageLength.them}자</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-2 pb-1 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">대화 시작 비율</span>
              <div className="flex items-center">
                <span className="text-sm mr-1">나</span>
                <Progress 
                  value={insights.pushPull.initiationRatio} 
                  className="h-2 w-16 bg-purple-light"
                />
                <span className="text-sm ml-1">상대</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalysisInsight;
