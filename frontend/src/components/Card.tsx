import React from "react";
import { Card as ShadcnCard, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, MinusCircle} from "lucide-react";

import Link from "next/link";
import { date } from "zod";

interface Post {
  postID: string;
  username: string;
  nickname: string;
  content: string;
  imageUrl?: string;
  date: string;
  like: number;
}

const Card: React.FC<Post> = ({postID, username, nickname, content, imageUrl, date, like }) => {
  return (
    <ShadcnCard className="w-140">
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">  
            <CardTitle>{username}</CardTitle>
            <CardDescription>{nickname}</CardDescription>
          </div>
          <Link href={`/post/${postID}`}>
            <Button variant="outline" className="rounded-xl" size="sm">Detail</Button>
          </Link>
        </div>  
      </CardHeader>
      <CardContent>
        <p>{content}</p>
        {imageUrl && <img src={imageUrl} alt="Post image" className="mt-4 rounded" />}
        <div className="flex gap-4 mt-4 items-center justify-between text-sm">
          <p className="text-muted-foreground mt-4">{date}</p>
          <p className="text-muted-foreground mt-4">{like} Like</p>
        </div>
      </CardContent>
    </ShadcnCard>
  );
};

export default Card;
