import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">404 - Not Found</h2>
      <p className="mb-8 text-neutral-text-secondary">お探しのページは見つかりませんでした。</p>
      <Link to="/" className="text-blue-500 hover:underline">
        トップページに戻る
      </Link>
    </div>
  );
}
