import React from 'react';
import {Metadata} from "next";
import {lusitana} from '@/app/ui/fonts';
import {RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton} from '@/app/ui/skeletons';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import CardWrapper from '@/app/ui/dashboard/cards';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <React.Suspense fallback={<CardsSkeleton />}>
        <CardWrapper />
        </React.Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <React.Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </React.Suspense>
        <React.Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </React.Suspense>
      </div>
    </main>
  );
}
