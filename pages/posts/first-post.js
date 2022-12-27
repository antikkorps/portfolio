import Link from 'next/link';
import Navbar from '../../components/navbar/navbar';

export default function FirstPost() {
  return (
    <>
      <Navbar />
      <h1>First Post</h1>
      <p>
        {' '}
        <Link href='/'>Back to home</Link>
      </p>
    </>
  );
}
