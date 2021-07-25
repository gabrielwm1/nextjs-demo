import { useRouter } from 'next/router';
function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1> THe Project Page for a sepcific project for a selected client</h1>
    </div>
  );
}
export default SelectedClientProjectPage;
