
import React from 'react';
import { Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

interface ReportCardProps {
  onDownload?: () => void;
  onShare?: () => void;
}

const ReportCard: React.FC<ReportCardProps> = ({ onDownload, onShare }) => {
  const { toast } = useToast();
  
  const handleDownload = () => {
    if (onDownload) {
      onDownload();
    } else {
      toast({
        title: "기능 개발 중",
        description: "리포트 다운로드 기능은 현재 개발 중입니다.",
      });
    }
  };
  
  const handleShare = () => {
    if (onShare) {
      onShare();
    } else {
      toast({
        title: "기능 개발 중",
        description: "리포트 공유 기능은 현재 개발 중입니다.",
      });
    }
  };
  
  return (
    <Card className="border-purple-light/50 shadow-lg animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">
          리포트 저장하기
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center space-y-4">
        <div className="subtle-card w-full max-w-md aspect-video flex items-center justify-center">
          <div className="text-center space-y-1">
            <p className="text-gray-500">분석 결과 요약 이미지</p>
            <p className="text-sm text-purple-dark">대화 분석 후 이곳에 결과가 표시됩니다</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button 
          variant="outline" 
          className="btn-outline w-full sm:w-auto flex-1 gap-2"
          onClick={handleShare}
        >
          <Share2 className="h-4 w-4" />
          <span>리포트 공유하기</span>
        </Button>
        <Button 
          className="btn-primary w-full sm:w-auto flex-1 gap-2"
          onClick={handleDownload}
        >
          <Download className="h-4 w-4" />
          <span>리포트 다운로드</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ReportCard;
