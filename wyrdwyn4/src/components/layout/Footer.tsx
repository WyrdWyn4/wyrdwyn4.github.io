export default function Footer() {
  return (
    <footer className="border-t py-8 mt-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} شیخ لاہور
        </p>
      </div>
    </footer>
  );
}