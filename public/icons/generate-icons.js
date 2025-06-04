const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create directory if it doesn't exist
if (!fs.existsSync(path.join(__dirname))) {
  fs.mkdirSync(path.join(__dirname), { recursive: true });
}

// Icon sizes to generate
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Function to draw the TravelDeal logo
function drawLogo(ctx, size) {
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.45; // Globe radius
  
  // Background
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fill();
  
  // Globe outline
  ctx.strokeStyle = '#0891b2';
  ctx.lineWidth = size * 0.05;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.stroke();
  
  // Airplane
  ctx.fillStyle = '#0891b2';
  const planeSize = size * 0.6;
  
  // Simplified airplane shape
  ctx.beginPath();
  ctx.moveTo(centerX + planeSize * 0.3, centerY - planeSize * 0.1);
  ctx.lineTo(centerX, centerY);
  ctx.lineTo(centerX + planeSize * 0.3, centerY + planeSize * 0.1);
  ctx.lineTo(centerX + planeSize * 0.2, centerY + planeSize * 0.15);
  ctx.lineTo(centerX - planeSize * 0.05, centerY + planeSize * 0.05);
  ctx.lineTo(centerX - planeSize * 0.2, centerY + planeSize * 0.15);
  ctx.lineTo(centerX - planeSize * 0.3, centerY + planeSize * 0.1);
  ctx.lineTo(centerX - planeSize * 0.1, centerY);
  ctx.lineTo(centerX - planeSize * 0.3, centerY - planeSize * 0.1);
  ctx.lineTo(centerX - planeSize * 0.2, centerY - planeSize * 0.15);
  ctx.lineTo(centerX - planeSize * 0.05, centerY - planeSize * 0.05);
  ctx.lineTo(centerX + planeSize * 0.2, centerY - planeSize * 0.15);
  ctx.closePath();
  ctx.fill();
  
  // Cockpit detail
  ctx.fillStyle = '#0891b2';
  ctx.beginPath();
  ctx.arc(centerX, centerY, size * 0.03, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = size * 0.01;
  ctx.beginPath();
  ctx.arc(centerX, centerY, size * 0.03, 0, Math.PI * 2);
  ctx.stroke();
}

// Generate icons for each size
sizes.forEach(size => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Draw logo
  drawLogo(ctx, size);
  
  // Save as PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(__dirname, `icon-${size}x${size}.png`), buffer);
  
  console.log(`Generated icon-${size}x${size}.png`);
});

console.log('All icons generated successfully!');
