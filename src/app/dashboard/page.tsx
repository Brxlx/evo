'use client';

import { Upload, User } from 'lucide-react';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

const VideoToolsDashboard = () => {
  const [isDark, setIsDark] = useState(false);
  const [uploadProgress] = useState(0);
  const [isTranscribing, setIsTranscribing] = useState(false);

  // Simulated primary colors
  const colors = {
    primary: 'rgb(34 197 94 / var(--tw-text-opacity, 1))', // Green
    secondary: '#3B82F6', // Blue
    background: isDark ? '#1A1B1E' : '#FFFFFF',
    text: isDark ? '#FFFFFF' : '#1A1B1E',
  };

  return (
    <div style={{ background: colors.background, color: colors.text }} className="min-h-screen">
      {/* Navbar */}
      <nav className="border-b p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold" style={{ color: colors.primary }}>
            Nivo
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline">
            <Upload className="w-4 h-4 mr-2" />
            Upload Video
          </Button>

          <Switch checked={isDark} onCheckedChange={setIsDark} className="ml-4" />

          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="space-y-4">
              <Input placeholder="Video Title" className="text-lg font-semibold" />

              <Textarea placeholder="Video Description" className="h-32" />

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="px-3 py-1">
                  #AI
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  #Tutorial
                </Badge>
                <Button variant="ghost" size="sm">
                  + Add Tag
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transcription Section */}
        <Card className="mb-6 border-2" style={{ borderColor: colors.primary }}>
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>
                AI Video Transcription
              </h2>
              <p className="text-gray-500">
                Generate accurate transcriptions with our AI-powered engine
              </p>
              <Button
                className="w-full max-w-md"
                style={{ background: colors.primary }}
                onClick={() => setIsTranscribing(true)}
              >
                {isTranscribing ? 'Transcribing...' : 'Generate Transcription'}
              </Button>

              {isTranscribing && <Progress value={65} className="w-full max-w-md mx-auto" />}
            </div>
          </CardContent>
        </Card>

        {/* Upload Progress */}
        {uploadProgress > 0 && (
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Uploading video...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="w-full" />
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default VideoToolsDashboard;
