import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';
import { projects } from '@/data/resume';
import { Link } from '@/lib/routing';
import { ArrowLeft, Code, Database, Zap, Network } from 'lucide-react';
import PortfolioClient from '@/components/Portfolio/PortfolioClient';

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <PortfolioClient />
      </main>
      <Footer />
    </>
  );
}

