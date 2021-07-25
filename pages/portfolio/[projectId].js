import { useRouter } from 'next/router';

function PortfolioProjectPage() {
  const router = useRouter();

  //exposes varios peices of data and methods
  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}
export default PortfolioProjectPage;
