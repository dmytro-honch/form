import { ExampleForm } from '@/components/example-form';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeSwitcher } from '@/components/theme-switcher';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <div className="container mx-auto py-10">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 flex items-start justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">Form Example</h1>
                <p className="text-muted-foreground">
                  A demonstration of shadcn/ui components with react-hook-form
                </p>
              </div>
              <ThemeSwitcher />
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <ExampleForm />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
