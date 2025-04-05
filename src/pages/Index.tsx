
import React, { useState } from 'react';
import Header from '@/components/Header';
import ConversationInput from '@/components/ConversationInput';
import EmotionGraph from '@/components/EmotionGraph';
import AnalysisInsight from '@/components/AnalysisInsight';
import ReportCard from '@/components/ReportCard';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [conversationText, setConversationText] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisCompleted, setAnalysisCompleted] = useState<boolean>(false);
  
  const handleAnalyze = (text: string) => {
    setConversationText(text);
    setIsAnalyzing(true);
    
    // 실제 앱에서는 여기서 API 호출 등을 통해 분석을 진행합니다
    // 지금은 데모를 위해 setTimeout을 사용합니다
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisCompleted(true);
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <section className="py-8 md:py-12">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                대화에서 감정과 관계를 읽어내세요
              </h2>
              <p className="text-gray-500">
                메신저 대화를 분석하여 감정의 흐름, 호감도, 관계 상태를 시각화합니다.<br />
                데이터를 통해 더 나은 관계로 발전하세요.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <ConversationInput onAnalyze={handleAnalyze} />
            </div>
          </div>
        </section>
        
        {isAnalyzing && (
          <section className="py-8">
            <div className="container max-w-6xl mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <AnalysisInsight loading={true} />
              </div>
            </div>
          </section>
        )}
        
        {analysisCompleted && (
          <>
            <Separator className="max-w-3xl mx-auto my-6" />
            
            <section className="py-8">
              <div className="container max-w-6xl mx-auto px-4">
                <div className="max-w-3xl mx-auto space-y-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">분석 결과</h3>
                    <p className="text-gray-500">대화에서 발견된 감정과 관계 패턴입니다.</p>
                  </div>
                  
                  <AnalysisInsight />
                  
                  <EmotionGraph />
                  
                  <ReportCard />
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
