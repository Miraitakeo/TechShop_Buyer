// components/ui/card.tsx
export const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="border rounded-lg shadow-md p-4 bg-white dark:bg-gray-800">
      {children}
    </div>
  );
  
  export const CardContent = ({ children }: { children: React.ReactNode }) => (
    <div className="p-2">{children}</div>
  );
  