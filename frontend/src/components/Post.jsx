import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Heart, MessageCircleCode, ThumbsUp } from "lucide-react";

const Post = () => {
  return (
    <div className="backdrop-brightness-150 p-2 rounded mt-2">
      <div className="flex space-x-2">
        <Avatar className="w-9 h-9">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>Ac</AvatarFallback>
        </Avatar>

        <div className="text-white">
          <p>Amir Mansoor</p>
          <p className="text-gray-400 text-[10px]">Few minutes ago</p>
        </div>
      </div>

      <p className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        quae voluptate ut beatae facere nemo debitis. Blanditiis iure molestiae
        temporibus in qui ab officia fugiat, tenetur modi, dolorum, nobis optio?
      </p>

      <div className="text-gray-400">
        <p className="flex space-x-2">
          <span>35</span> <Heart size={20} />
        </p>
        <p className="flex space-x-2">
          <span>35</span> <MessageCircleCode size={20} />
        </p>
      </div>

      <div className="space-x-2 flex justify-between mt-2 ">
        <Button className="bg-[#102536] backdrop-brightness-150">
          <Heart />
        </Button>

        <Button className="bg-[#102536] backdrop-brightness-150">
          <MessageCircleCode />
        </Button>
      </div>
    </div>
  );
};

export default Post;
