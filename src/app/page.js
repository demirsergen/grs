'use client';

import MultiStepForm from '@/components/MultiStepForm';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-teal-800">
      <h1 className="text-white">GRS</h1>
      <MultiStepForm />
    </main>
  );
}
