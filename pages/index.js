import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';

function HomePage(props) {
  const { products } = props;

  return (
    <div>
      <h1>The home page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
        <li>
          <Link href='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link href='/clients'>Clients</Link>
        </li>
        <li>
          <Link href='/p'>Portfolio</Link>
        </li>
      </ul>
    </div>
  );
}

export async function getStaticProps(context) {
  console.log('re generating');
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      },
    };
  }
  if (data.products.length === 0) {
    return { notFound: true };
  }
  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}
export default HomePage;
