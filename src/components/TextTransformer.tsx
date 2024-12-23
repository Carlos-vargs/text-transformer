import { useState } from "react";
import { AlertCircle, Wand2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TransformedText } from "@/components/TransformedText";
import { normalizeCharacter } from "@/lib/utils";

const VOWELS = ["a", "e", "i", "o", "u"];

export function TextTransformer() {
  const [inputText, setInputText] = useState("");
  const [replacementLetter, setReplacementLetter] = useState("i");
  const [transformedText, setTransformedText] = useState("");
  const [error, setError] = useState("");

  const handleTransform = () => {
    if (!inputText.trim()) {
      setError("Por favor, ingresa algún texto para transformar");
      return;
    }

    setError("");
    const transformed = inputText
      .toLowerCase()
      .split("")
      .map((char) => {
        const baseChar = normalizeCharacter(char.toLowerCase());
        return VOWELS.includes(baseChar) ? replacementLetter : char;
      })
      .join("");

    setTransformedText(transformed);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 animate-fade-in">
      <div className="space-y-2">
        <Label htmlFor="input-text">Texto Original</Label>
        <Textarea
          id="input-text"
          placeholder="Escribe algo aquí..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="min-h-[100px] transition-all duration-200 focus:ring-2"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end">
        <div className="w-full sm:w-48 space-y-2">
          <Label>Letra de Reemplazo</Label>
          <Select
            value={replacementLetter}
            onValueChange={setReplacementLetter}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona una letra" />
            </SelectTrigger>
            <SelectContent>
              {VOWELS.map((vowel) => (
                <SelectItem key={vowel} value={vowel}>
                  {vowel.toUpperCase()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={handleTransform}
          className="w-full sm:w-auto group hover:scale-105 transition-all duration-200"
        >
          <Wand2 className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-200" />
          Transformar
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {transformedText && <TransformedText text={transformedText} />}
    </div>
  );
}
