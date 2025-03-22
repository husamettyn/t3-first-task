"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import { Button } from "@/components/ui/button";

export default function PostDetailPage() {
  const { postID } = useParams();
  const postIdString = Array.isArray(postID) ? postID[0] : postID ?? "";
  interface Post {
    postID: string;
    username: string;
    nickname: string;
    content: string;
    imageUrl?: string;
    date: string;
    like: number;
  }

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (postID) {
      // Mock data to simulate API response
      const mockData: Post = {
        postID: postIdString,
        username: "mockUser",
        nickname: "Mock Nickname",
        content: "This is a mock post content.",
        imageUrl: "/placeholder.jpg", // Update this path to your local image
        date: "2023-10-01",
        like: 42,
      };
      setPost(mockData);
    }
  }, [postID]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen p-4 bg-transparent text-foreground">
      <div className="flex flex-col max-w-2xl mx-auto p-6 border border-primary rounded-lg items-center gap-2">
        <Card
          postID={post.postID} 
          username={post.username}
          nickname={post.nickname}
          content={post.content}
          imageUrl={post.imageUrl}
          date={post.date}
          like={post.like}
        />
        <Button variant="destructive">Delete Post</Button>

      </div>
    </div>
  );
}
