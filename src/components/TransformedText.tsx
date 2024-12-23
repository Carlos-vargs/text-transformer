import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface TransformedTextProps {
  text: string;
}

export function TransformedText({ text }: TransformedTextProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-2 animate-fade-in">
      <div className="flex items-center justify-between">
        <Label>Texto Transformado</Label>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-8 px-2"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          <span className="sr-only">Copiar texto</span>
        </Button>
      </div>
      <div className="p-4 rounded-lg bg-secondary/50 min-h-[100px] whitespace-pre-wrap break-words">
        {text}
      </div>
    </div>
  );
}