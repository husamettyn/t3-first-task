import Card from "@/components/Card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-2 pb-20 sm:p-10 font-[family-name:var(--font-geist-sans)] bg-background text-foreground">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="w-full flex flex-row gap-4 items-center justify-between">
          <h1 className="text-4xl font-bold">Welcome!</h1>
          <Button>Add Post</Button>
        </div>  
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
