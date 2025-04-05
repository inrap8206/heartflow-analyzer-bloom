
import React, { useState } from 'react';
import { Upload, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

interface ConversationInputProps {
  onAnalyze: (text: string) => void;
}

const ConversationInput: React.FC<ConversationInputProps> = ({ onAnalyze }) => {
  const [conversationText, setConversationText] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setConversationText(e.target.value);
  };

  const handleTextUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      setConversationText(text);
      setIsUploading(false);
      toast({
        title: "텍스트 파일 업로드 완료",
        description: "대화 내용이 성공적으로 로드되었습니다.",
      });
    };
    
    reader.onerror = () => {
      setIsUploading(false);
      toast({
        variant: "destructive",
        title: "파일 업로드 오류",
        description: "파일을 읽는 도중 오류가 발생했습니다.",
      });
    };
    
    reader.readAsText(file);
  };

  const handleAnalyze = () => {
    if (conversationText.trim().length < 10) {
      toast({
        variant: "destructive",
        title: "대화 내용이 너무 짧습니다",
        description: "정확한 분석을 위해 더 많은 대화 내용이 필요합니다.",
      });
      return;
    }
    
    onAnalyze(conversationText);
  };

  return (
    <Card className="border-purple-light/50 shadow-lg animate-fade-in">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">대화 내용 입력</h3>
            <p className="text-gray-500 text-sm">
              메신저 대화 내용을 붙여넣거나 텍스트 파일을 업로드해주세요
            </p>
          </div>
          
          <Textarea 
            placeholder="대화 내용을 여기에 붙여넣으세요..."
            className="min-h-[200px] input-field"
            value={conversationText}
            onChange={handleTextChange}
          />
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" className="btn-outline flex-1 gap-2" asChild>
              <label className="cursor-pointer">
                <input 
                  type="file" 
                  accept=".txt" 
                  className="hidden" 
                  onChange={handleTextUpload}
                  disabled={isUploading}
                />
                <Upload className="h-4 w-4" />
                <span>{isUploading ? '업로드 중...' : '파일 업로드'}</span>
              </label>
            </Button>
            
            <Button 
              className="btn-primary flex-1 gap-2" 
              onClick={handleAnalyze}
              disabled={conversationText.trim().length < 10}
            >
              <MessageSquare className="h-4 w-4" />
              <span>대화 분석하기</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConversationInput;
