/**
 * Gera um placeholder visual em SVG (data URI) indicando claramente
 * onde uma foto real deve ser inserida pela Sophia.
 *
 * Uso: troque o campo `image` no arquivo de dados pelo caminho
 * da foto real (ex: import via '../assets/images/volume-fox.jpg')
 * e remova a chamada a placeholderImage para esse item.
 */
export const placeholderImage = (label: string): string => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F0E6D2" />
          <stop offset="100%" stop-color="#E8DCC4" />
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="url(#g)" />
      <rect x="20" y="20" width="560" height="560" fill="none" stroke="#B8915A" stroke-width="2" stroke-dasharray="10 8" opacity="0.6" />
      <g transform="translate(300,260)">
        <path d="M-70,0 Q-35,-45 0,-10 Q35,-45 70,0 Q35,15 0,8 Q-35,15 -70,0 Z" fill="none" stroke="#8C6D3F" stroke-width="3" opacity="0.5"/>
        <circle cx="0" cy="2" r="5" fill="#8C6D3F" opacity="0.5"/>
      </g>
      <text x="300" y="350" font-family="Arial, sans-serif" font-size="15" font-weight="600" fill="#8C6D3F" text-anchor="middle" letter-spacing="1">COLOQUE AQUI A FOTO</text>
      <text x="300" y="378" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#1C1A17" text-anchor="middle">${label}</text>
    </svg>
  `.trim();

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};
