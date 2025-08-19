import {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {fetchInvoiceById, fetchCustomers} from '@/app/lib/data';
import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';

type PageProps = {
  params: Promise<{ id: string }>
}

export const metadata: Metadata = {
  title: 'Update Invoice',
};

export default async function Page(props: PageProps) {
  const params = await props.params;
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: 'Invoices',
            href: '/dashboard/invoices'
          },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
