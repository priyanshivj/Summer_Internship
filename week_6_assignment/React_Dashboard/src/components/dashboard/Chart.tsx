import React, { useEffect, useRef } from 'react';
import Card from '../ui/Card';

interface ChartProps {
  title: string;
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      color: string;
    }[];
  };
  className?: string;
}

const Chart: React.FC<ChartProps> = ({ title, data, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set canvas dimensions
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      const padding = 40;
      const chartWidth = canvas.width - (padding * 2);
      const chartHeight = canvas.height - (padding * 2);
      
      // Define chart area
      const chartArea = {
        x: padding,
        y: padding,
        width: chartWidth,
        height: chartHeight,
      };
      
      // Draw axes
      ctx.beginPath();
      ctx.strokeStyle = '#e5e7eb';
      ctx.lineWidth = 1;
      
      // X-axis
      ctx.moveTo(chartArea.x, chartArea.y + chartArea.height);
      ctx.lineTo(chartArea.x + chartArea.width, chartArea.y + chartArea.height);
      
      // Y-axis
      ctx.moveTo(chartArea.x, chartArea.y);
      ctx.lineTo(chartArea.x, chartArea.y + chartArea.height);
      ctx.stroke();
      
      // Find max value for scaling
      const maxValue = Math.max(
        ...data.datasets.flatMap(dataset => dataset.data)
      );
      
      // Draw data
      const labelWidth = chartArea.width / (data.labels.length - 1);
      
      // Draw x-axis labels
      ctx.fillStyle = '#9ca3af';
      ctx.font = '10px Inter, sans-serif';
      ctx.textAlign = 'center';
      
      data.labels.forEach((label, i) => {
        const x = chartArea.x + (i * labelWidth);
        const y = chartArea.y + chartArea.height + 15;
        ctx.fillText(label, x, y);
      });
      
      // Draw data points and lines
      data.datasets.forEach(dataset => {
        ctx.strokeStyle = dataset.color;
        ctx.fillStyle = dataset.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        dataset.data.forEach((value, i) => {
          const x = chartArea.x + (i * labelWidth);
          const y = chartArea.y + chartArea.height - ((value / maxValue) * chartArea.height);
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
          
          // Draw points
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        });
        
        ctx.stroke();
      });
      
      // Draw legend
      const legendY = padding / 2;
      let legendX = padding;
      
      data.datasets.forEach(dataset => {
        ctx.fillStyle = dataset.color;
        
        // Draw legend dot
        ctx.beginPath();
        ctx.arc(legendX, legendY, 4, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw legend text
        ctx.fillStyle = '#4b5563';
        ctx.textAlign = 'left';
        ctx.fillText(dataset.label, legendX + 8, legendY + 3);
        
        legendX += ctx.measureText(dataset.label).width + 24;
      });
    }
  }, [data]);

  return (
    <Card title={title} className={`${className}`}>
      <div className="relative h-64">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    </Card>
  );
};

export default Chart;