/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desabilitar overlay de erros em desenvolvimento
  reactStrictMode: false,
  // Configurar para produção-like
  poweredByHeader: false,
  // Configuração para Vercel
  output: 'standalone',
};

module.exports = nextConfig;
