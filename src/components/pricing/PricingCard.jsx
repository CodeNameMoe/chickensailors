import { ChevronRight, Egg } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const PricingCard = ({ plan }) => {
  return (
    <Card className={`h-full ${plan.popular ? "border-blue-600" : ""}`}>
      <CardHeader className={plan.popular ? "bg-blue-50" : ""}>
        {plan.popular && (
          <div className="text-center text-sm font-medium text-blue-600">
            Most Popular
          </div>
        )}
        <CardTitle>{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">£{plan.price}</div>
        <ul className="mt-4 space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="mr-2 h-4 w-4" />
              {feature.includes("egg capacity") ? (
                <strong>{feature}</strong>
              ) : (
                feature
              )}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">{plan.ctaText}</Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
