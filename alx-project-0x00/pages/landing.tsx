import Card from "@/components/Card";
import Button from "@/components/Button";

// const Landing: React.FC = () => {
//   return (
//     <div>
//       <h1 className="text-xl font-extralight">Landing Page</h1>
//       <Card />
//     </div>
//   );
// };

// export default Landing;

export default function Landing() {
  return (
    <div className="p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-4">Reusable Button Component</h1>

      {/* Small Buttons */}
      <Button title="Small Rounded-sm" styles="text-sm rounded-sm" />
      <Button title="Small Rounded-md" styles="text-sm rounded-md" />
      <Button title="Small Rounded-full" styles="text-sm rounded-full" />

      {/* Medium Buttons */}
      <Button title="Medium Rounded-sm" styles="text-base rounded-sm" />
      <Button title="Medium Rounded-md" styles="text-base rounded-md" />
      <Button title="Medium Rounded-full" styles="text-base rounded-full" />

      {/* Large Buttons */}
      <Button title="Large Rounded-sm" styles="text-lg rounded-sm" />
      <Button title="Large Rounded-md" styles="text-lg rounded-md" />
      <Button title="Large Rounded-full" styles="text-lg rounded-full" />
      <Button title="Large Rounded-lg" styles="text-lg rounded-lg" />
    </div>
  );
}
