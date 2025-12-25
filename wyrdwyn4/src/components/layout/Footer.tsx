export default function Footer() {
  return (
    <footer id="footer" className="border-t py-4 mt-12 bg-gray-800/30 border-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} شیخ لاہور
        </p>
      </div>
    </footer>
  );
}