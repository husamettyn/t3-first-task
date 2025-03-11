import Image from "next/image";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-background text-foreground">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Welcome to My App</h1>
        <Card
          username="John Doe"
          nickname="@johndoe"
          content="This is a sample post content."
          imageUrl="https://via.placeholder.com/150"
        />
        <Card
          username="John Doe"
          nickname="@johndoe"
          content="This is a sample post content."
          imageUrl="https://via.placeholder.com/150"
        />
        <Card
          username="John Doe"
          nickname="@johndoe"
          content="This is a sample post content."
          imageUrl="https://via.placeholder.com/150"
        />
        <Card
          username="John Doe"
          nickname="@johndoe"
          content="This is a sample post content."
          imageUrl="https://via.placeholder.com/150"
        />
        
        <Card
          username="Jane Smith"
          nickname="@janesmith"
          content="Another example of a post content."
        />
      </main>
    </div>
  );
}
