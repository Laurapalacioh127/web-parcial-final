import Link from "next/link";
import { apiFetch } from "../../lib/api";
import type { Tool } from "../../lib/loan-types";
import { LoanRequest } from "../../lib/loan-types";

type LoanRequestsPageProps = { searchParams: Promise<{ toolId?: string }> };

export default async function LoanRequestsPage({ searchParams }: LoanRequestsPageProps) {
  // Esta consulta solo prepara las opciones que se necesitan para el selector del filtro.
  const toolsResponse = await apiFetch("/tools");
  const tools: Tool[] = toolsResponse.ok ? await toolsResponse.json() : [];

  // TODO FRONT-A: leer searchParams y consultar las solicitudes con apiFetch.
  // TODO FRONT-A: agregar el formulario GET de filtro usando tools y la opción All tools.
  // TODO FRONT-A: mostrar las solicitudes y sus enlaces al comprobante correspondiente.

    const { toolId } = await searchParams;
    const query = toolId ? `?toolId=${encodeURIComponent(toolId)}` : "";
    const response = await apiFetch(`/loan-requests${query}`);
    const loanRequests: LoanRequest[] = response.ok ? await response.json() : [];

 return (
  <main>
    <h1>Loan requests</h1>
    <Link className="button" href="/loan-requests/new">New request</Link>
    <form action="/loan-requests" method="get">
      <select name="toolId" defaultValue={toolId ?? ""}>
        <option value="">All tools</option>
        {tools.map((tool) => (
          <option key={tool.id} value={tool.id}>{tool.name}</option>
        ))}
      </select>
      <button type="submit">Apply filter</button>
    </form>
    {loanRequests.map((item) => (
      <p key={item.id}>
        <Link href={`/loan-requests/${item.id}`}>{item.id}</Link> {item.purpose} {item.days} {item.tool.name}
      </p>
    ))}
  </main>
);
}
