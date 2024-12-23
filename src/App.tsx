import { TextTransformer } from '@/components/TextTransformer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Type } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <div className="container px-4 py-8 mx-auto">
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Type className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Transformador de Texto</h1>
          </div>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Transforma tu texto reemplazando todas las vocales con la letra que elijas.
            ¡Pruébalo ahora!
          </p>
        </header>

        <main>
          <TextTransformer />
        </main>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>Creado con ❤️ usando React, TypeScript y Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}

export default App;