const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('image'));

app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Ken Ryan Garcia Loyola</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-image: url('/GIF by ADWEEK.gif');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          padding: 20px;
          overflow: hidden;
        }
        
        /* Glass Container */
        .glass-card {
          position: relative;
          max-width: 480px;
          width: 100%;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(40px) saturate(180%);
          -webkit-backdrop-filter: blur(40px) saturate(180%);
          border-radius: 32px;
          padding: 50px 40px;
          box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.37),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
            inset 0 -1px 0 0 rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.18);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        /* Hover Effect - More Glass, More Blur */
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(60px) saturate(200%);
          -webkit-backdrop-filter: blur(60px) saturate(200%);
          transform: translateY(-8px) scale(1.02);
          box-shadow: 
            0 16px 48px 0 rgba(0, 0, 0, 0.45),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.3),
            inset 0 -1px 0 0 rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.25);
        }
        
        /* Shimmer Effect on Hover */
        .glass-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        
        .glass-card:hover::before {
          opacity: 1;
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
        
        /* Content Wrapper */
        .content {
          position: relative;
          z-index: 1;
        }
        
        /* Profile Image */
        .profile-image-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 28px;
        }
        
        .profile-image {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(255, 255, 255, 0.4);
          box-shadow: 
            0 8px 24px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .glass-card:hover .profile-image {
          transform: scale(1.08);
          border: 3px solid rgba(255, 255, 255, 0.6);
          box-shadow: 
            0 12px 32px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }
        
        /* Name */
        .name {
          font-size: 38px;
          font-weight: 700;
          color: white;
          text-align: center;
          margin-bottom: 12px;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
          letter-spacing: -0.5px;
          transition: all 0.3s ease;
        }
        
        .glass-card:hover .name {
          text-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
          transform: translateY(-2px);
        }
        
        /* Section Badge */
        .section {
          display: inline-block;
          font-size: 16px;
          color: rgba(255, 255, 255, 0.95);
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 10px 24px;
          border-radius: 20px;
          letter-spacing: 1.5px;
          font-weight: 500;
          text-align: center;
          margin-bottom: 32px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .glass-card:hover .section {
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }
        
        /* Section Container */
        .section-container {
          text-align: center;
        }
        
        /* Divider */
        .divider {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          margin: 28px 0;
          transition: all 0.3s ease;
        }
        
        .glass-card:hover .divider {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.5),
            transparent
          );
        }
        
        /* Quote Section */
        .quote-section {
          text-align: center;
        }
        
        .quote-icon {
          font-size: 48px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 12px;
          line-height: 1;
          transition: all 0.3s ease;
        }
        
        .glass-card:hover .quote-icon {
          color: rgba(255, 255, 255, 0.7);
          transform: scale(1.1);
        }
        
        .quote {
          font-size: 18px;
          font-style: italic;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.7;
          margin-bottom: 16px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }
        
        .glass-card:hover .quote {
          color: white;
          transform: translateY(-2px);
        }
        
        .author {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 600;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }
        
        .glass-card:hover .author {
          color: rgba(255, 255, 255, 0.95);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .glass-card {
            padding: 40px 30px;
          }
          
          .name {
            font-size: 32px;
          }
          
          .quote {
            font-size: 16px;
          }
        }
      </style>
    </head>
    <body>
      <div class="glass-card">
        <div class="content">
          <div class="profile-image-wrapper">
            <img src="/ken.jpg" alt="Profile" class="profile-image">
          </div>
          
          <h1 class="name">Ken Ryan Garcia Loyola</h1>
          
          <div class="section-container">
            <div class="section">BSIT-BA 4101</div>
          </div>
          
          <div class="divider"></div>
          
          <div class="quote-section">
            <div class="quote-icon">"</div>
            <p class="quote">The only way to do great work is to love what you do.</p>
            <p class="author">— Steve Jobs</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
  
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});