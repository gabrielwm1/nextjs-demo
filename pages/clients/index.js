import Link from 'next/link';

function ClientsPage() {
  const clients = [
    { id: 'max', name: 'maximilian' },
    { id: 'manu', name: 'manuel' },
  ];
  return (
    <div>
      <h1>THe Clients Page</h1>
      <ul>
        {clients.map((clients) => (
          <li key={clients.id}></li>
        ))}
      </ul>
    </div>
  );
}
export default ClientsPage;
