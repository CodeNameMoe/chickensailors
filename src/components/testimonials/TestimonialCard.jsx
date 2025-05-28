import { MessageSquare, Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const TestimonialCard = ({ testimonial }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get a chicken breed-specific color
  const getBreedColor = (breed) => {
    const breedColors = {
      "Light Sussex": "bg-amber-50 border-amber-200",
      Brahma: "bg-gray-50 border-gray-200",
      "Salmon Faverolles": "bg-rose-50 border-rose-200",
      "Rhode Island Red": "bg-red-50 border-red-200",
      "Plymouth Rock": "bg-slate-50 border-slate-200",
      "Silkie Bantam": "bg-blue-50 border-blue-200",
      Leghorn: "bg-white border-gray-200",
      Orpington: "bg-yellow-50 border-yellow-200",
    };

    return breedColors[breed] || "";
  };

  return (
    <Card className={`h-full ${getBreedColor(testimonial.breed)}`}>
      <CardHeader>
        <CardTitle>{testimonial.name}</CardTitle>
        <CardDescription>{testimonial.breed}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="italic">&quot;{testimonial.content}&quot;</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center">
          <MessageSquare className="mr-2 h-4 w-4 opacity-70" />
          <span className="text-xs text-muted-foreground">
            {testimonial.verified ? "Verified Chicken" : "Chicken"}
          </span>
        </div>
        <div className="flex items-center text-xs text-muted-foreground">
          <Calendar className="mr-1 h-3 w-3 opacity-70" />
          {formatDate(testimonial.date)}
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
