import React from "react";
import { Card as ShadcnCard, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CardProps {
  username: string;
  nickname: string;
  content: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ username, nickname, content, imageUrl }) => {
  return (
    <ShadcnCard className="w-140">
      <CardHeader>
        <CardTitle>{username}</CardTitle>
        <CardDescription>{nickname}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
        {imageUrl && <img src={imageUrl} alt="Post image" className="mt-4 rounded" />}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>
          <Button className="mr-2" size="sm">Up</Button>
          <Button variant="outline" size="sm">Down</Button>
        </div>
        <Button variant="outline" size="sm">Edit</Button>
      </CardFooter>
    </ShadcnCard>
  );
};

export default Card;
