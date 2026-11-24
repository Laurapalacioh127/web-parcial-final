import Link from "next/link";
import { apiFetch } from "../../../lib/api";
import { notFound} from "next/navigation";
import type { LoanRequest } from "../../../lib/loan-types";

type ReceiptPageProps = { params: Promise<{ id: string }> };

export default async function ReceiptPage({ params }: ReceiptPageProps) {
  // TODO FRONT-C: leer params y consultar el detalle con apiFetch.
  // TODO FRONT-C: mostrar ID, purpose, days y tool.name de la solicitud recibida.
    const { id } = await params;
  const response = await apiFetch(`/loan-requests/${id}`);
  if (!response.ok) notFound();
  const loanRequest: LoanRequest = await response.json();
  void params

  return (
    <main>
      <h1>Loan receipt</h1>
      <Link href="/loan-requests">Back to requests</Link>
      <section className="panel">
        <p>Complete the request details.</p>
        <p>id:{Request.id}</p>
        <p>purpose:{Request.purpose}</p>
       <p>herramienta:{Request:tool.name}</p> 

      </section>
    </main>
  );
}